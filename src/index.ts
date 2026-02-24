import type { Core } from '@strapi/strapi';
import axios from 'axios';

/**
 * Vali Import System
 * 
 * Features:
 * - Automatic manufacturer/brand import
 * - Category-based product import
 * - BGN to EUR conversion
 * - Per-category price markup
 * - Stock filtering
 * - Price updates for existing products
 * - GPU specification with value mapping
 * - Modern product filtering
 */

// ========== TYPES ==========

interface ValiProduct {
  id: number;
  reference_number: string;
  name: Array<{ language_code: string; text: string }>;
  description: Array<{ language_code: string; text: string }>;
  price_client: number;
  status: number;
  manufacturer_id: number;
  categories: Array<number | { id: number }>;
  parameters: Array<{
    parameter_name: Array<{ text: string }>;
    option_name?: Array<{ text: string }>;
    value: string;
  }>;
  images?: Array<{ href: string }>;
}

// ========== GPU SPECIFICATION HANDLER ==========

const gpuSpecificationHandler = {
  getValueMaps() {
    return {
      chipManufacturer: {
        'nVIDIA': 'NVIDIA',
        'NVIDIA': 'NVIDIA',
        'AMD': 'AMD',
        'INTEL': 'Intel',
        'Intel': 'Intel',
        'MATROX': 'MATROX'
      },
      memory: {
        '1 GB': 'VRAM_4GB', '1GB': 'VRAM_4GB',
        '2 GB': 'VRAM_4GB', '2GB': 'VRAM_4GB',
        '3 GB': 'VRAM_4GB', '3GB': 'VRAM_4GB',
        '4 GB': 'VRAM_4GB', '4GB': 'VRAM_4GB',
        '6 GB': 'VRAM_6GB', '6GB': 'VRAM_6GB',
        '8 GB': 'VRAM_8GB', '8GB': 'VRAM_8GB',
        '10 GB': 'VRAM_10GB', '10GB': 'VRAM_10GB',
        '12 GB': 'VRAM_12GB', '12GB': 'VRAM_12GB',
        '16 GB': 'VRAM_16GB', '16GB': 'VRAM_16GB',
        '20 GB': 'VRAM_20GB', '20GB': 'VRAM_20GB',
        '24 GB': 'VRAM_24GB', '24GB': 'VRAM_24GB',
        '32 GB': 'VRAM_32GB', '32GB': 'VRAM_32GB',
        '48 GB': 'VRAM_48GB', '48GB': 'VRAM_48GB'
      },
      memoryType: {
        'GDDR5': 'GDDR5',
        'GDDR5X': 'GDDR5X',
        'GDDR6': 'GDDR6',
        'GDDR6X': 'GDDR6X',
        'GDDR7': 'GDDR7',
        'HBM2': 'HBM2',
        'HBM2E': 'HBM2E',
        'HBM3': 'HBM3',
        'HBM': 'HBM2',
        'GDDR2': 'GDDR5',
        'GDDR3': 'GDDR5',
        'DDR4': 'GDDR5',
        'DDR3': 'GDDR5',
        'DDR2': 'GDDR5'
      },
      memoryBus: {
        '32 b': 'Bus_64bit', '32 bit': 'Bus_64bit',
        '64 b': 'Bus_64bit', '64 bit': 'Bus_64bit',
        '96 b': 'Bus_128bit', '96 bit': 'Bus_128bit',
        '128 b': 'Bus_128bit', '128 bit': 'Bus_128bit',
        '160 b': 'Bus_128bit', '160 bit': 'Bus_128bit',
        '192 b': 'Bus_192bit', '192 bit': 'Bus_192bit',
        '256 b': 'Bus_256bit', '256 bit': 'Bus_256bit',
        '320 b': 'Bus_320bit', '320 bit': 'Bus_320bit',
        '352 b': 'Bus_384bit', '352 bit': 'Bus_384bit',
        '384 b': 'Bus_384bit', '384 bit': 'Bus_384bit',
        '512 b': 'Bus_512bit', '512 bit': 'Bus_512bit'
      },
      slotWidth: {
        '1': 'Slot_1_5',
        'Single Slot': 'Slot_1_5',
        '2': 'Slot_2',
        'Dual Slots': 'Slot_2',
        'Dual Slot': 'Slot_2',
        '2.2 Slot': 'Slot_2',
        '2.25': 'Slot_2_5',
        '2.5': 'Slot_2_5',
        '2.5 Slot': 'Slot_2_5',
        '2.7': 'Slot_2_7',
        '2.75': 'Slot_2_7',
        '3': 'Slot_3',
        '3.5': 'Slot_3_5',
        '4': 'Slot_4'
      },
      recommendedPSU: {
        '200W': 'PSU_400W',
        '300W': 'PSU_400W',
        '350W': 'PSU_400W',
        '400W': 'PSU_400W',
        '450W': 'PSU_450W',
        '500W': 'PSU_500W',
        '550W': 'PSU_550W',
        '600W': 'PSU_600W',
        '650W': 'PSU_650W',
        '700W': 'PSU_700W',
        '750W': 'PSU_750W',
        '800W': 'PSU_800W',
        '850W': 'PSU_850W',
        '1000W': 'PSU_1000W',
        '1200W': 'PSU_1200W'
      },
      cudaCoresStreams: {
        '160': 'Cores_1024', '320': 'Cores_1024', '384': 'Cores_1024',
        '480': 'Cores_1024', '512': 'Cores_1024', '640': 'Cores_1024',
        '768': 'Cores_1024', '896': 'Cores_1024',
        '1024': 'Cores_1024',
        '1152': 'Cores_1536', '1280': 'Cores_1536', '1408': 'Cores_1536',
        '1536': 'Cores_1536',
        '1664': 'Cores_2048', '1792': 'Cores_2048', '1920': 'Cores_2048',
        '2048': 'Cores_2048',
        '2304': 'Cores_2560', '2560': 'Cores_2560',
        '2688': 'Cores_3072', '2816': 'Cores_3072', '3072': 'Cores_3072',
        '3328': 'Cores_3584', '3584': 'Cores_3584',
        '3840': 'Cores_4096', '4096': 'Cores_4096',
        '4352': 'Cores_5120', '4608': 'Cores_5120', '4864': 'Cores_5120',
        '5120': 'Cores_5120',
        '5632': 'Cores_5888', '5888': 'Cores_5888',
        '6144': 'Cores_6144',
        '6656': 'Cores_7168', '7168': 'Cores_7168',
        '7680': 'Cores_7680',
        '8192': 'Cores_8192',
        '8704': 'Cores_8704',
        '8960': 'Cores_9216', '9216': 'Cores_9216',
        '9728': 'Cores_9728',
        '10240': 'Cores_10240',
        '10752': 'Cores_10752',
        '11264': 'Cores_12288', '11776': 'Cores_12288', '12288': 'Cores_12288',
        '13824': 'Cores_14336', '14336': 'Cores_14336',
        '15360': 'Cores_16384', '16384': 'Cores_16384',
        '17408': 'Cores_18432', '18432': 'Cores_18432',
        '21760': 'Cores_21760'
      },
      powerConnector: {
        '--': 'Power_None',
        'None': 'Power_None',
        '6-pins': 'Power_6pin',
        '1 x 6-pin': 'Power_6pin',
        '8-pins': 'Power_8pin',
        '1 x 8-pin': 'Power_8pin',
        '6-pins;8-pins': 'Power_6_8pin',
        '1 x 6-pin + 1 x 8-pin': 'Power_6_8pin',
        '2 x 8-pins': 'Power_2x8pin',
        '2 x 8-pin': 'Power_2x8pin',
        '3 x 8-pins': 'Power_3x8pin',
        '3 x 8-pin': 'Power_3x8pin',
        '12VHPWR': 'Power_12VHPWR',
        '16-pin': 'Power_16pin',
        '1 x 16-pin': 'Power_16pin'
      },
      maxResolution: {
        '1920x1080': 'Res_1080p',
        '1920 x 1080': 'Res_1080p',
        '1920x1200': 'Res_1080p',
        '2048 x 1536': 'Res_1080p',
        '2560x1440': 'Res_1440p',
        '2560 x 1440': 'Res_1440p',
        '2560 x 1600': 'Res_1440p',
        '3840x2160': 'Res_4K',
        '3840 x 2160': 'Res_4K',
        '4096 x 2160': 'Res_4K',
        '5120 x 2880': 'Res_5K',
        '5120 x 3200': 'Res_5K',
        '7680x4320': 'Res_8K',
        '7680 x 4320': 'Res_8K'
      }
    };
  },

  isModern(product: ValiProduct, mappings: any, findParam: Function, log: any): boolean {
    const memMapping = mappings['memory'];
    if (memMapping) {
      const mem = findParam(product.parameters, memMapping.valiParameterNames);
      if (mem && !this.getValueMaps()['memory'][mem]) {
        log.warn(`  ⚠️  memory: "${mem}" not modern (requires 4GB+) - SKIP`);
        return false;
      }
    }
    const typeMapping = mappings['memoryType'];
    if (typeMapping) {
      const type = findParam(product.parameters, typeMapping.valiParameterNames);
      if (type && !this.getValueMaps()['memoryType'][type]) {
        log.warn(`  ⚠️  memoryType: "${type}" not modern - SKIP`);
        return false;
      }
    }
    return true;
  },

  inferFields(specData: any, product: ValiProduct, findParam: Function, log: any) {
    const model = specData.gpuModel?.toUpperCase();
    const mfr = specData.chipManufacturer;
    if (!model || !mfr) return;

    // Infer series
    let series = null;
    if (model.includes('RTX') && model.includes('50')) series = 'RTX_5000';
    else if (model.includes('RTX') && model.includes('40')) series = 'RTX_4000';
    else if (model.includes('RTX') && model.includes('30')) series = 'RTX_3000';
    else if (model.includes('RTX') && model.includes('20')) series = 'RTX_2000';
    else if (model.includes('GTX') && model.includes('16')) series = 'GTX_1600';
    else if (model.includes('GTX') && model.includes('10')) series = 'GTX_1000';
    else if (model.includes('RX') && model.includes('90')) series = 'RX_9000';
    else if (model.includes('RX') && model.includes('7')) series = 'RX_7000';
    else if (model.includes('RX') && model.includes('6')) series = 'RX_6000';
    else if (model.includes('RX') && model.includes('5')) series = 'RX_5000';
    else if (model.includes('ARC') && model.includes('A')) series = 'Arc_A_Series';
    else if (model.includes('ARC') && model.includes('B')) series = 'Arc_B_Series';

    if (series) {
      specData.series = series;
      log.info(`  🎯 series: ${series}`);
    }

    // Infer features
    specData.rayTracing = series ? (series.includes('RTX') || series.includes('RX_6') || series.includes('RX_7') || series.includes('RX_9') || series.includes('Arc')) : false;
    specData.dlss = (mfr === 'NVIDIA' && series && (series.includes('RTX') || series.includes('GTX')));
    specData.fsr = (mfr === 'AMD');
    log.info(`  🎯 rayTracing: ${specData.rayTracing}, dlss: ${specData.dlss}, fsr: ${specData.fsr}`);

    // Video outputs - parse from "Video outputs" parameter
    const videoOut = findParam(product.parameters, ['Video outputs', 'Видео изходи']);
    if (videoOut) {
      const hdmi = videoOut.match(/(\d+)\s*x\s*HDMI[^\,]*/gi);
      const dp = videoOut.match(/(\d+)\s*x\s*DisplayPort[^\,]*/gi);
      if (hdmi) {
        specData.hdmiPorts = hdmi.join(', ');
        log.info(`  ✓ hdmiPorts: "${specData.hdmiPorts}"`);
      }
      if (dp) {
        specData.displayPorts = dp.join(', ');
        log.info(`  ✓ displayPorts: "${specData.displayPorts}"`);
      }
    }
  }
};

// ========== HELPER FUNCTIONS ==========

const findParameterValue = (parameters: any[], paramNames: string[]): string | null => {
  if (!parameters || !Array.isArray(parameters)) return null;
  for (const param of parameters) {
    if (!param.parameter_name || !Array.isArray(param.parameter_name)) continue;
    for (const nameObj of param.parameter_name) {
      const paramText = nameObj.text || '';
      if (paramNames.some(n => n.toLowerCase() === paramText.toLowerCase())) {
        // Get value from option_name (preferred) or value field (fallback)
        if (param.option_name && Array.isArray(param.option_name) && param.option_name.length > 0) {
          return param.option_name[0].text || null;
        }
        return param.value || null;
      }
    }
  }
  return null;
};

const getProductName = (product: ValiProduct): string => {
  if (!Array.isArray(product.name)) return '';
  const item = product.name.find((i: any) => i.language_code === 'bg');
  return item?.text || '';
};

const getProductDescription = (product: ValiProduct): string => {
  if (!Array.isArray(product.description)) return '';
  const item = product.description.find((i: any) => i.language_code === 'bg');
  return item?.text || '';
};

const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

const downloadAndUploadImage = async (imageUrl: string, productSku: string, strapi: any): Promise<any | null> => {
  try {
    const response = await axios.get(imageUrl, { 
      responseType: 'arraybuffer',
      timeout: 10000
    });
    
    const buffer = Buffer.from(response.data);
    const extension = imageUrl.split('.').pop()?.split('?')[0] || 'jpg';
    const filename = `${productSku}-${Date.now()}.${extension}`;
    
    // Upload to Strapi
    const formData = require('form-data');
    const form = new formData();
    form.append('files', buffer, {
      filename: filename,
      contentType: response.headers['content-type'] || 'image/jpeg'
    });
    
    const uploadResponse = await axios.post(
      `http://localhost:1337/api/upload`,
      form,
      { headers: form.getHeaders() }
    );
    
    return uploadResponse.data[0];
  } catch (error: any) {
    strapi.log.warn(`Failed to download/upload image from ${imageUrl}: ${error.message}`);
    return null;
  }
};

// ========== VALI API SERVICE ==========

class ValiApiService {
  constructor(private strapi: Core.Strapi) {}

  async makeRequest(apiUrl: string, apiToken: string, endpoint: string, params = {}, retries = 3) {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        const response = await axios.get(`${apiUrl}${endpoint}`, {
          params: { ...params, api_token: apiToken },
          headers: { 
            'Accept': 'application/json',
            'Connection': 'keep-alive'
          },
          timeout: 120000, // 2 minutes
          maxRedirects: 5
        });
        return response.data;
      } catch (error: any) {
        if (attempt === retries) {
          this.strapi.log.error(`❌ Request failed after ${retries} attempts: ${error.message}`);
          throw error;
        }
        this.strapi.log.warn(`⚠️  Attempt ${attempt} failed: ${error.message}, retrying...`);
        await new Promise(r => setTimeout(r, 2000 * attempt)); // Exponential backoff
      }
    }
    throw new Error('Request failed after all retries');
  }

  async fetchManufacturers(apiUrl: string, apiToken: string) {
    this.strapi.log.info('📥 Fetching manufacturers from Vali...');
    const data = await this.makeRequest(apiUrl, apiToken, '/api/v1/manufacturers');
    this.strapi.log.info(`✅ Fetched ${data.length} manufacturers`);
    return data;
  }

  async fetchAllProducts(apiUrl: string, apiToken: string) {
    this.strapi.log.info('📥 Fetching products from Vali...');
    const allProducts: ValiProduct[] = [];
    let currentPage = 1;
    let hasMore = true;
    let totalPages = 1;

    while (hasMore && currentPage <= totalPages) {
      try {
        const response = await this.makeRequest(apiUrl, apiToken, '/api/v1/products/full', { 
          page: currentPage, 
          per_page: 500 
        });
        
        if (currentPage === 1) {
          totalPages = response.last_page || 1;
          this.strapi.log.info(`📋 Total pages to fetch: ${totalPages}`);
        }
        
        if (response.items && response.items.length > 0) {
          allProducts.push(...response.items);
          this.strapi.log.info(`📊 Page ${currentPage}/${totalPages}: ${allProducts.length}/${response.total_items || '?'} products`);
        }
        
        hasMore = response.current_page < response.last_page;
        currentPage++;
        
        if (hasMore) {
          await new Promise(r => setTimeout(r, 1000)); // Rate limiting
        }
      } catch (error: any) {
        this.strapi.log.error(`❌ Failed to fetch page ${currentPage}: ${error.message}`);
        this.strapi.log.warn(`⚠️  Continuing with ${allProducts.length} products fetched so far...`);
        break; // Continue with what we have
      }
    }

    this.strapi.log.info(`✅ Fetched ${allProducts.length} total products`);
    return allProducts;
  }
}

// ========== BRAND IMPORT SERVICE ==========

class BrandImportService {
  constructor(private strapi: Core.Strapi) {}

  async importManufacturers(manufacturers: any[]) {
    this.strapi.log.info(`🏭 Importing ${manufacturers.length} manufacturers...`);
    let imported = 0, skipped = 0, published = 0;

    for (const valiBrand of manufacturers) {
      try {
        // Check for existing brand (draft or published)
        const existing = await this.strapi.documents('api::brand.brand').findMany({
          filters: { name: valiBrand.name },
          limit: 1,
          status: 'draft'
        });

        if (existing.length === 0) {
          // Create new brand
          const slug = generateSlug(valiBrand.name);
          const brand = await this.strapi.documents('api::brand.brand').create({
            data: { 
              name: valiBrand.name,
              slug: slug
            } as any
          });
          
          // Publish the brand
          await this.strapi.documents('api::brand.brand').publish({
            documentId: brand.documentId
          });
          
          imported++;
        } else {
          // Brand exists - check if it needs slug or publishing
          const brand = existing[0];
          let needsUpdate = false;
          const updateData: any = {};
          
          if (!brand.slug) {
            updateData.slug = generateSlug(valiBrand.name);
            needsUpdate = true;
          }
          
          if (needsUpdate) {
            await this.strapi.documents('api::brand.brand').update({
              documentId: brand.documentId,
              data: updateData
            });
          }
          
          // Publish if it's a draft
          try {
            await this.strapi.documents('api::brand.brand').publish({
              documentId: brand.documentId
            });
            published++;
          } catch (e) {
            // Already published, ignore error
          }
          
          skipped++;
        }
      } catch (error: any) {
        this.strapi.log.error(`❌ Failed to import ${valiBrand.name}: ${error.message}`);
      }
    }

    this.strapi.log.info(`✅ Brands: ${imported} imported, ${skipped} already exist, ${published} published`);
    return { imported, skipped, published };
  }

  async findBrandByName(name: string) {
    const brands = await this.strapi.documents('api::brand.brand').findMany({
      filters: { name },
      limit: 1,
      status: 'published'
    });
    return brands.length > 0 ? brands[0] : null;
  }
}

// ========== PRODUCT IMPORT SERVICE ==========

class ProductImportService {
  private manufacturers: any[] = [];
  private specHandlers: any = { gpu_specification: gpuSpecificationHandler };

  constructor(
    private strapi: Core.Strapi,
    private brandService: BrandImportService
  ) {}

  setManufacturers(manufacturers: any[]) {
    this.manufacturers = manufacturers;
  }

  async importAllProducts(valiProducts: ValiProduct[], settings: any) {
    const stats = { imported: 0, updated: 0, unchanged: 0, skipped: 0, filtered: 0 };

    this.strapi.log.info('🚀 Starting product import...');
    this.strapi.log.info(`📂 Categories: ${settings.selectedCategories.length} selected`);
    
    // COMPREHENSIVE DEBUG - Show selected categories with all details
    for (const cat of settings.selectedCategories) {
      this.strapi.log.info(`   📁 Category Name: "${cat.name}"`);
      this.strapi.log.info(`   📁 Category ID: ${cat.id}`);
      this.strapi.log.info(`   📁 Category documentId: ${cat.documentId}`);
    }
    
    // COMPREHENSIVE DEBUG - Show ALL parameter mappings in database
    const allMappings = await this.strapi.documents('api::vali-parameter-mapping.vali-parameter-mapping').findMany({
      limit: 100,
      status: 'draft',
      populate: ['strapiCategory']
    });
    
    this.strapi.log.info(`\n🗺️  Total parameter mappings in database: ${allMappings.length}`);
    
    for (const mapping of allMappings) {
      this.strapi.log.info(`\n   Mapping: "${mapping.name}"`);
      this.strapi.log.info(`      - ID: ${mapping.id}`);
      this.strapi.log.info(`      - documentId: ${mapping.documentId}`);
      this.strapi.log.info(`      - isActive: ${mapping.isActive}`);
      this.strapi.log.info(`      - specificationType: ${mapping.specificationType}`);
      this.strapi.log.info(`      - valiCategoryIds: ${JSON.stringify(mapping.valiCategoryIds)}`);
      this.strapi.log.info(`      - strapiCategory (raw): ${JSON.stringify(mapping.strapiCategory)}`);
      
      if (mapping.strapiCategory) {
        if (typeof mapping.strapiCategory === 'object') {
          this.strapi.log.info(`      - strapiCategory.documentId: ${mapping.strapiCategory.documentId}`);
          this.strapi.log.info(`      - strapiCategory.name: ${mapping.strapiCategory.name}`);
        } else {
          this.strapi.log.info(`      - strapiCategory (just ID): ${mapping.strapiCategory}`);
        }
      } else {
        this.strapi.log.info(`      - ⚠️  strapiCategory is NULL/undefined!`);
      }
    }
    
    // Debug: Sample some product categories
    this.strapi.log.info(`\n🔍 Sample product categories (first 5):`);
    for (let i = 0; i < Math.min(5, valiProducts.length); i++) {
      const p = valiProducts[i];
      this.strapi.log.info(`   Product ${p.reference_number}: categories = ${JSON.stringify(p.categories)}`);
    }
    
    this.strapi.log.info(`\n🔍 Stock filter: ${settings.importOutOfStock ? 'ALL' : 'IN-STOCK ONLY'}`);

    for (const valiProduct of valiProducts) {
      try {
        // Stock filter
        if (!settings.importOutOfStock && valiProduct.status === 0) {
          stats.filtered++;
          continue;
        }

        // Find category and mapping
        const { category, mapping } = await this.findCategoryAndMapping(valiProduct, settings.selectedCategories);
        if (!category || !mapping) {
          stats.filtered++;
          continue;
        }

        // Import product
        const result = await this.importProduct(valiProduct, category, mapping, settings);
        
        if (result.created) stats.imported++;
        else if (result.updated) stats.updated++;
        else if (result.unchanged) stats.unchanged++;
        else if (result.skipped) stats.skipped++;

      } catch (error: any) {
        this.strapi.log.error(`❌ Error: ${valiProduct.reference_number} - ${error.message}`);
        stats.skipped++;
      }
    }

    this.strapi.log.info(`\n✅ IMPORT COMPLETE`);
    this.strapi.log.info(`📊 Stats: ${stats.imported} new, ${stats.updated} updated, ${stats.unchanged} unchanged, ${stats.skipped} skipped, ${stats.filtered} filtered`);
    
    return stats;
  }

  private async importProduct(valiProduct: ValiProduct, category: any, mapping: any, settings: any) {
    this.strapi.log.info(`\n📦 ${valiProduct.reference_number} - ${getProductName(valiProduct)}`);
    
    // Get handler
    const handler = this.specHandlers[mapping.specificationType];
    if (!handler) {
      this.strapi.log.warn(`  ⚠️  No handler for ${mapping.specificationType}`);
      return { skipped: true };
    }

    // Check if modern
    const isModern = handler.isModern(valiProduct, mapping.parameterMappings, findParameterValue, this.strapi.log);
    if (!isModern) {
      return { skipped: true };
    }

    // Check existing (only in this category)
    const existing = await this.findProductBySKU(valiProduct.reference_number, category.documentId);

    // Calculate price
const priceInEur = valiProduct.price_client;  // ✅ Already in EUR!
    const categoryMarkup = await this.getCategoryMarkup(category.documentId);
    const markup = categoryMarkup || settings.priceMarkup || 0;
    const finalPrice = priceInEur * (1 + markup / 100);

    // Map stock status
    const stockMap: any = { 0: 0, 1: 999, 2: 10, 3: 5, 4: 1 };
    const stock = stockMap[valiProduct.status] || 0;

    // Update existing product
    if (existing) {
      const priceChanged = Math.abs(existing.price - finalPrice) > 0.01;
      const stockChanged = existing.stock !== stock;

      this.strapi.log.info(`  🔄 Product exists - checking if we need to create spec...`);
      
      // Check if product already has a specification
      const hasSpec = existing[mapping.specificationType];
      this.strapi.log.info(`  📋 Has specification: ${hasSpec ? 'YES' : 'NO'}`);
      
      // If no spec, create one
      if (!hasSpec) {
        this.strapi.log.info(`  🆕 Creating specification for existing product...`);
        
        // Build specification with value transformation
        const specData: any = {};
        
        this.strapi.log.info(`  📋 Building specification from ${Object.keys(mapping.parameterMappings || {}).length} mapped fields...`);

        for (const [field, fieldMapping] of Object.entries(mapping.parameterMappings as any)) {
          const valiValue = findParameterValue(valiProduct.parameters, (fieldMapping as any).valiParameterNames);
          
          if (valiValue) {
            const valueMap = handler.getValueMaps()[field];
            
            if (valueMap) {
              // Has value map - only store if value matches
              const transformed = valueMap[valiValue];
              if (transformed) {
                specData[field] = transformed;
                this.strapi.log.info(`    ✓ ${field}: "${valiValue}" → "${transformed}"`);
              } else {
                this.strapi.log.warn(`    ⊘ ${field}: "${valiValue}" - not in value map, skipping`);
              }
            } else {
              // No value map - store as-is (for string fields like gpuModel)
              specData[field] = valiValue;
              this.strapi.log.info(`    ✓ ${field}: "${valiValue}"`);
            }
          } else {
            this.strapi.log.info(`    ⊘ ${field}: not found in product parameters`);
          }
        }

        // Infer additional fields
        handler.inferFields(specData, valiProduct, findParameterValue, this.strapi.log);
        
        // Check if we have minimum core fields for publishing
        const hasMinimumFields = specData.gpuModel && specData.chipManufacturer && specData.memory;
        
        this.strapi.log.info(`  📊 Specification has ${Object.keys(specData).length} fields, has core fields: ${hasMinimumFields}`);

        // Create specification if we have at least 3 fields
        let specId = null;
        if (Object.keys(specData).length >= 3) {
          try {
            const spec = await (this.strapi.documents as any)(`api::${mapping.specificationType.replace(/_/g, '-')}.${mapping.specificationType.replace(/_/g, '-')}`).create({
              data: specData
            });
            specId = spec.documentId;
            this.strapi.log.info(`    ✅ Specification created with ${Object.keys(specData).length} fields`);
            
            // Update product to link spec
            this.strapi.log.info(`    🔗 Linking spec using field: ${mapping.specificationType}`);
            await this.strapi.documents('api::product.product').update({
              documentId: existing.documentId,
              data: { 
                gpu_specification: specId  // Use exact field name
              } as any
            });
            this.strapi.log.info(`    ✅ Linked specification (ID: ${specId}) to product`);
            
            // Download and attach images if not already present
            if (!(existing as any).image && valiProduct.images && Array.isArray(valiProduct.images) && valiProduct.images.length > 0) {
              this.strapi.log.info(`    🖼️  Downloading ${valiProduct.images.length} images...`);
              const uploadedImages = [];
              
              for (let i = 0; i < Math.min(valiProduct.images.length, 5); i++) {
                const imageUrl = valiProduct.images[i].href;
                if (imageUrl) {
                  const uploaded = await downloadAndUploadImage(imageUrl, valiProduct.reference_number, this.strapi);
                  if (uploaded) {
                    uploadedImages.push(uploaded.id);
                  }
                }
              }
              
              if (uploadedImages.length > 0) {
                await this.strapi.documents('api::product.product').update({
                  documentId: existing.documentId,
                  data: { 
                    image: uploadedImages[0],
                    gallery: uploadedImages
                  } as any
                });
                this.strapi.log.info(`    ✅ Uploaded ${uploadedImages.length} images`);
              }
            }
            
            // Publish if has minimum required fields
            if (hasMinimumFields) {
              await (this.strapi.documents as any)(`api::${mapping.specificationType.replace(/_/g, '-')}.${mapping.specificationType.replace(/_/g, '-')}`).publish({
                documentId: specId
              });
              await (this.strapi.documents as any)('api::product.product').publish({
                documentId: existing.documentId
              });
              this.strapi.log.info(`    📢 Published (has core fields)`);
              return { updated: true };
            } else {
              this.strapi.log.info(`    📝 Saved as draft (missing core fields)`);
              return { updated: true };
            }
          } catch (e: any) {
            this.strapi.log.error(`    ❌ Spec creation failed: ${e.message}`);
          }
        } else {
          this.strapi.log.warn(`    ⊘ Not enough fields (${Object.keys(specData).length}) - need at least 3`);
        }
      }

      if (!priceChanged && !stockChanged) {
        this.strapi.log.info(`  ⏭️  Unchanged`);
        return { unchanged: true };
      }

      if (settings.updatePrices || settings.updateStock) {
        const updateData: any = { valiStatus: `status_${valiProduct.status}` };
        if (settings.updatePrices) updateData.price = finalPrice;
        if (settings.updateStock) updateData.stock = stock;

        await this.strapi.documents('api::product.product').update({
          documentId: existing.documentId,
          data: updateData as any
        });

        this.strapi.log.info(`  🔄 Updated (price: ${priceChanged}, stock: ${stockChanged})`);
        return { updated: true };
      }
    }

    // Create new product
    this.strapi.log.info(`  🆕 Creating new product...`);

    // Build specification with value transformation
    const specData: any = {};
    
    this.strapi.log.info(`  📋 Building specification from ${Object.keys(mapping.parameterMappings || {}).length} mapped fields...`);

    for (const [field, fieldMapping] of Object.entries(mapping.parameterMappings as any)) {
      const valiValue = findParameterValue(valiProduct.parameters, (fieldMapping as any).valiParameterNames);
      
      if (valiValue) {
        const valueMap = handler.getValueMaps()[field];
        
        if (valueMap) {
          // Has value map - only store if value matches
          const transformed = valueMap[valiValue];
          if (transformed) {
            specData[field] = transformed;
            this.strapi.log.info(`    ✓ ${field}: "${valiValue}" → "${transformed}"`);
          } else {
            this.strapi.log.warn(`    ⊘ ${field}: "${valiValue}" - not in value map, skipping`);
          }
        } else {
          // No value map - store as-is (for string fields like gpuModel)
          specData[field] = valiValue;
          this.strapi.log.info(`    ✓ ${field}: "${valiValue}"`);
        }
      } else {
        this.strapi.log.info(`    ⊘ ${field}: not found in product parameters`);
      }
    }

    // Infer additional fields
    handler.inferFields(specData, valiProduct, findParameterValue, this.strapi.log);
    
    // Check if we have minimum core fields for publishing
    const hasMinimumFields = specData.gpuModel && specData.chipManufacturer && specData.memory;
    
    this.strapi.log.info(`  📊 Specification has ${Object.keys(specData).length} fields, has core fields: ${hasMinimumFields}`);

    // Create specification if we have at least 3 fields
    let specId = null;
    if (Object.keys(specData).length >= 3) {
      try {
        const spec = await (this.strapi.documents as any)(`api::${mapping.specificationType.replace(/_/g, '-')}.${mapping.specificationType.replace(/_/g, '-')}`).create({
          data: specData
        });
        specId = spec.documentId;
        this.strapi.log.info(`    ✅ Specification created with ${Object.keys(specData).length} fields`);
      } catch (e: any) {
        this.strapi.log.error(`    ❌ Spec creation failed: ${e.message}`);
      }
    } else {
      this.strapi.log.warn(`    ⊘ Not enough fields (${Object.keys(specData).length}) - need at least 3`);
    }

    // Build product data
    const productName = getProductName(valiProduct);
    const productSlug = generateSlug(`${productName}-${valiProduct.reference_number}`);
    
    const productData: any = {
      sku: valiProduct.reference_number,
      name: productName,
      nameBg: productName,
      slug: productSlug,
      description: getProductDescription(valiProduct),
      descriptionBg: getProductDescription(valiProduct),
      price: finalPrice,
      stock,
      category: category.documentId,
      valiId: valiProduct.id,
      valiStatus: `status_${valiProduct.status}`
    };

    // Link specification
    if (specId) {
      productData.gpu_specification = specId;  // Use exact field name
      this.strapi.log.info(`    🔗 Linked specification (ID: ${specId}) to product data`);
    }

    // Find brand
    const valiBrand = this.manufacturers.find((m: any) => m.id === valiProduct.manufacturer_id);
    if (valiBrand) {
      const brand = await this.brandService.findBrandByName(valiBrand.name);
      if (brand) {
        productData.brand = brand.documentId;
        this.strapi.log.info(`    🏷️  Linked brand: ${valiBrand.name}`);
      }
    }

    // Download and attach images
    if (valiProduct.images && Array.isArray(valiProduct.images) && valiProduct.images.length > 0) {
      this.strapi.log.info(`    🖼️  Downloading ${valiProduct.images.length} images...`);
      const uploadedImages = [];
      
      for (let i = 0; i < Math.min(valiProduct.images.length, 5); i++) {
        const imageUrl = valiProduct.images[i].href;
        if (imageUrl) {
          const uploaded = await downloadAndUploadImage(imageUrl, valiProduct.reference_number, this.strapi);
          if (uploaded) {
            uploadedImages.push(uploaded.id);
          }
        }
      }
      
      if (uploadedImages.length > 0) {
        productData.image = uploadedImages[0]; // First image as main
        productData.gallery = uploadedImages; // All images in gallery
        this.strapi.log.info(`    ✅ Uploaded ${uploadedImages.length} images`);
      }
    }

    // Create product
    const product = await this.strapi.documents('api::product.product').create({
      data: productData as any
    });

    // Publish if has minimum required fields
    if (specId && hasMinimumFields) {
      try {
        await (this.strapi.documents as any)(`api::${mapping.specificationType.replace(/_/g, '-')}.${mapping.specificationType.replace(/_/g, '-')}`).publish({
          documentId: specId
        });
        await (this.strapi.documents as any)('api::product.product').publish({
          documentId: product.documentId
        });
        this.strapi.log.info(`    📢 Published (has core fields)`);
      } catch (e: any) {
        this.strapi.log.warn(`    ⚠️  Publish failed: ${e.message} - saved as draft`);
      }
    } else if (specId && !hasMinimumFields) {
      this.strapi.log.info(`    📝 Saved as draft (missing core fields: gpuModel, chipManufacturer, or memory)`);
    } else {
      this.strapi.log.info(`    📝 Saved as draft (no specification created)`);
    }

    return { created: true };
  }

  private async findCategoryAndMapping(valiProduct: ValiProduct, selectedCategories: any[]) {
    // Debug: Log product categories occasionally
    if (Math.random() < 0.01) {
      this.strapi.log.info(`🔍 DEBUG: Product ${valiProduct.reference_number} categories:`, JSON.stringify(valiProduct.categories));
    }

    for (const category of selectedCategories) {
      this.strapi.log.info(`\n🔎 Looking for mapping for category: "${category.name}" (documentId: ${category.documentId})`);
      
      // Try multiple filtering strategies for Strapi v5
      let mappings: any[] = [];
      
      // Strategy 1: Filter by documentId with object syntax
      try {
        mappings = await this.strapi.documents('api::vali-parameter-mapping.vali-parameter-mapping').findMany({
          filters: { 
            isActive: true,
            strapiCategory: { documentId: category.documentId }
          },
          limit: 1,
          status: 'draft'
        });
        this.strapi.log.info(`   Strategy 1 (object syntax): Found ${mappings.length} mappings`);
      } catch (e: any) {
        this.strapi.log.warn(`   Strategy 1 failed: ${e.message}`);
      }
      
      // Strategy 2: Filter by documentId directly
      if (mappings.length === 0) {
        try {
          mappings = await this.strapi.documents('api::vali-parameter-mapping.vali-parameter-mapping').findMany({
            filters: { 
              isActive: true,
              strapiCategory: category.documentId
            },
            limit: 1,
            status: 'draft'
          });
          this.strapi.log.info(`   Strategy 2 (direct documentId): Found ${mappings.length} mappings`);
        } catch (e: any) {
          this.strapi.log.warn(`   Strategy 2 failed: ${e.message}`);
        }
      }
      
      // Strategy 3: Get all active mappings and filter manually
      if (mappings.length === 0) {
        try {
          const allActive = await this.strapi.documents('api::vali-parameter-mapping.vali-parameter-mapping').findMany({
            filters: { isActive: true },
            populate: ['strapiCategory'],
            limit: 100,
            status: 'draft'
          });
          
          this.strapi.log.info(`   Strategy 3 (manual filter): Found ${allActive.length} active mappings total`);
          
          mappings = allActive.filter((m: any) => {
            if (!m.strapiCategory) {
              this.strapi.log.info(`      Mapping "${m.name}" has no strapiCategory`);
              return false;
            }
            
            const catDocId = typeof m.strapiCategory === 'object' 
              ? m.strapiCategory.documentId 
              : m.strapiCategory;
            
            this.strapi.log.info(`      Mapping "${m.name}" strapiCategory: ${catDocId} vs ${category.documentId}`);
            
            return catDocId === category.documentId;
          });
          
          this.strapi.log.info(`   Strategy 3 result: Found ${mappings.length} matching mappings`);
        } catch (e: any) {
          this.strapi.log.warn(`   Strategy 3 failed: ${e.message}`);
        }
      }

      if (mappings.length === 0) {
        this.strapi.log.warn(`⚠️  No parameter mapping found for category: ${category.name}`);
        this.strapi.log.warn(`   Tried all 3 strategies, none found a mapping with strapiCategory = ${category.documentId}`);
        continue;
      }
      
      const mapping = mappings[0];
      this.strapi.log.info(`   ✅ Found mapping: "${mapping.name}"`);

      if (!mapping.valiCategoryIds || (mapping.valiCategoryIds as any[]).length === 0) {
        this.strapi.log.warn(`⚠️  Parameter mapping "${mapping.name}" has no valiCategoryIds`);
        continue;
      }

      const productCategories = valiProduct.categories || [];
      const hasMatch = productCategories.some((cat: any) => {
        const catId = typeof cat === 'object' ? cat.id : cat;
        return (mapping.valiCategoryIds as any[]).includes(catId);
      });

      if (hasMatch) {
        this.strapi.log.info(`   ✅ Product matches! Vali category found in product`);
        return { category, mapping };
      } else {
        this.strapi.log.info(`   ❌ Product categories ${JSON.stringify(productCategories)} don't match mapping valiCategoryIds ${JSON.stringify(mapping.valiCategoryIds)}`);
      }
    }

    return { category: null, mapping: null };
  }

  private async findProductBySKU(sku: string, categoryId?: string) {
    const filters: any = { sku };
    
    // Only check products in the category being imported
    if (categoryId) {
      filters.category = { documentId: categoryId };
    }
    
    const products = await this.strapi.documents('api::product.product').findMany({
      filters,
      limit: 1,
      status: 'draft',
      populate: ['gpu_specification', 'image', 'gallery']
    });
    return products.length > 0 ? products[0] : null;
  }

  private async getCategoryMarkup(categoryId: string): Promise<number | null> {
    const markups = await this.strapi.documents('api::category-markup.category-markup').findMany({
      filters: { 
        category: { documentId: categoryId },
        isActive: true
      },
      limit: 1
    });
    return markups.length > 0 ? markups[0].markupPercentage : null;
  }
}

// ========== BOOTSTRAP ==========

export default {
  register() {},

  bootstrap({ strapi }: { strapi: Core.Strapi }) {
    strapi.log.info('🚀 Initializing Vali Import System...');

    // Initialize services
    const valiApi = new ValiApiService(strapi);
    const brandService = new BrandImportService(strapi);
    const productService = new ProductImportService(strapi, brandService);

    // Register custom routes using Koa middleware
    strapi.server.app.use(async (ctx, next) => {
      // CLEAR IMPORTS ENDPOINT
      if (ctx.method === 'POST' && ctx.path === '/vali-import/clear') {
        try {
          strapi.log.info('\n========================================');
          strapi.log.info('🗑️  CLEARING VALI IMPORTS');
          strapi.log.info('========================================\n');

          const stats = { productsDeleted: 0, specsDeleted: 0 };

          // Delete all products with valiId
          const valiProducts = await strapi.documents('api::product.product').findMany({
            filters: { valiId: { $notNull: true } },
            limit: 10000,
            status: 'draft'
          });

          strapi.log.info(`📦 Found ${valiProducts.length} Vali products to delete...`);

          for (const product of valiProducts) {
            await strapi.documents('api::product.product').delete({
              documentId: product.documentId
            });
            stats.productsDeleted++;
          }

          strapi.log.info(`✅ Deleted ${stats.productsDeleted} products`);

          // Delete all GPU specifications
          const gpuSpecs = await (strapi.documents as any)('api::gpu-specification.gpu-specification').findMany({
            limit: 10000,
            status: 'draft'
          });

          strapi.log.info(`🔧 Found ${gpuSpecs.length} GPU specifications to delete...`);

          for (const spec of gpuSpecs) {
            await (strapi.documents as any)('api::gpu-specification.gpu-specification').delete({
              documentId: spec.documentId
            });
            stats.specsDeleted++;
          }

          strapi.log.info(`✅ Deleted ${stats.specsDeleted} GPU specifications`);

          strapi.log.info('\n========================================');
          strapi.log.info('✅ CLEAR IMPORTS COMPLETED');
          strapi.log.info('========================================\n');

          ctx.body = {
            success: true,
            stats,
            timestamp: new Date().toISOString()
          };

        } catch (error: any) {
          strapi.log.error(`\n❌ Clear failed: ${error.message}`);
          strapi.log.error(error.stack);
          ctx.status = 500;
          ctx.body = { error: error.message };
        }
      }
      // SYNC ENDPOINT
      else if (ctx.method === 'POST' && ctx.path === '/vali-import/sync') {
        try {
          strapi.log.info('\n========================================');
          strapi.log.info('🚀 VALI IMPORT SYNC STARTED');
          strapi.log.info('========================================\n');

          // Get settings
          const settings = await strapi.documents('api::vali-import-setting.vali-import-setting').findFirst({
            populate: ['selectedCategories', 'valiVendor']
          });

          if (!settings || !settings.valiVendor) {
            ctx.status = 400;
            ctx.body = { error: 'Import settings not configured' };
            return;
          }

          const { apiUrl, apiToken } = settings.valiVendor;

          // Fetch manufacturers
          const manufacturers = await valiApi.fetchManufacturers(apiUrl, apiToken);
          await brandService.importManufacturers(manufacturers);

          // Fetch products
          const products = await valiApi.fetchAllProducts(apiUrl, apiToken);

          // Set manufacturers for product service
          productService.setManufacturers(manufacturers);

          // Import products
          const stats = await productService.importAllProducts(products, settings);

          // Update last sync time
          await strapi.documents('api::vali-import-setting.vali-import-setting').update({
            documentId: settings.documentId,
            data: { lastSyncAt: new Date() } as any
          });

          strapi.log.info('\n========================================');
          strapi.log.info('✅ VALI IMPORT SYNC COMPLETED');
          strapi.log.info('========================================\n');

          ctx.body = {
            success: true,
            stats,
            timestamp: new Date().toISOString()
          };

        } catch (error: any) {
          strapi.log.error(`\n❌ Import failed: ${error.message}`);
          strapi.log.error(error.stack);
          ctx.status = 500;
          ctx.body = { error: error.message };
        }
      } else {
        await next();
      }
    });

    strapi.log.info('✅ Vali Import System ready!');
    strapi.log.info('📍 Endpoints:');
    strapi.log.info('   - POST /vali-import/sync (Import products)');
    strapi.log.info('   - POST /vali-import/clear (Clear all imports)');
  }
};
