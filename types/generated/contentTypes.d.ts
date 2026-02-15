import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    encryptedKey: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminSession extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_sessions';
  info: {
    description: 'Session Manager storage';
    displayName: 'Session';
    name: 'Session';
    pluralName: 'sessions';
    singularName: 'session';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
    i18n: {
      localized: false;
    };
  };
  attributes: {
    absoluteExpiresAt: Schema.Attribute.DateTime & Schema.Attribute.Private;
    childId: Schema.Attribute.String & Schema.Attribute.Private;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    deviceId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    expiresAt: Schema.Attribute.DateTime &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::session'> &
      Schema.Attribute.Private;
    origin: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    sessionId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique;
    status: Schema.Attribute.String & Schema.Attribute.Private;
    type: Schema.Attribute.String & Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    userId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiBrandBrand extends Struct.CollectionTypeSchema {
  collectionName: 'brands';
  info: {
    displayName: 'Brand';
    pluralName: 'brands';
    singularName: 'brand';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Brand: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    featured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::brand.brand'> &
      Schema.Attribute.Private;
    logo: Schema.Attribute.Media<'images'>;
    logoDark: Schema.Attribute.Media<'images'>;
    logoLight: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    publishedAt: Schema.Attribute.DateTime;
    showOnHomepage: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    website: Schema.Attribute.String;
  };
}

export interface ApiBuildComponentBuildComponent
  extends Struct.CollectionTypeSchema {
  collectionName: 'build_components';
  info: {
    displayName: 'build component';
    pluralName: 'build-components';
    singularName: 'build-component';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    category: Schema.Attribute.Enumeration<
      [
        'cpu',
        'gpu',
        'motherboard',
        'ram',
        'storage',
        'psu',
        'case',
        'cooling',
        'fans',
        'os',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    hasRgb: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    image: Schema.Attribute.Media<'images'>;
    isDefault: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::build-component.build-component'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    nameBg: Schema.Attribute.String;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    pc_build_templates: Schema.Attribute.Relation<
      'oneToMany',
      'api::pc-build-template.pc-build-template'
    >;
    priceDifference: Schema.Attribute.Decimal & Schema.Attribute.DefaultTo<0>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCaseSpecificationCaseSpecification
  extends Struct.CollectionTypeSchema {
  collectionName: 'case_specifications';
  info: {
    displayName: 'Case Specification';
    pluralName: 'case-specifications';
    singularName: 'case-specification';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    argbController: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    bottomFans: Schema.Attribute.Enumeration<
      [
        'Fan_1x120mm',
        'Fan_2x120mm',
        'Fan_3x120mm',
        'Fan_1x140mm',
        'Fan_2x140mm',
        'None',
      ]
    >;
    bottomRadiatorSupport: Schema.Attribute.Enumeration<
      ['Rad_None', 'Rad_120mm', 'Rad_240mm', 'Rad_280mm', 'Rad_360mm']
    >;
    cableManagement: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    caseHeight: Schema.Attribute.Enumeration<
      [
        'Height_Under300mm',
        'Height_300_350mm',
        'Height_350_400mm',
        'Height_400_450mm',
        'Height_450_500mm',
        'Height_500_550mm',
        'Height_Over550mm',
      ]
    >;
    caseLength: Schema.Attribute.Enumeration<
      [
        'Length_Under300mm',
        'Length_300_350mm',
        'Length_350_400mm',
        'Length_400_450mm',
        'Length_450_500mm',
        'Length_500_550mm',
        'Length_Over550mm',
      ]
    >;
    caseWidth: Schema.Attribute.Enumeration<
      [
        'Width_Under150mm',
        'Width_150_180mm',
        'Width_180_210mm',
        'Width_210_240mm',
        'Width_240_270mm',
        'Width_Over270mm',
      ]
    >;
    color: Schema.Attribute.Enumeration<
      [
        'Black',
        'White',
        'Gray',
        'Silver',
        'Red',
        'Blue',
        'Green',
        'Pink',
        'Orange',
        'Purple',
        'Black_White',
        'Black_Red',
        'Black_Blue',
        'Black_Green',
        'Gunmetal',
        'Mesh_Black',
        'Mesh_White',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    driveBays25: Schema.Attribute.Enumeration<
      [
        'Bays_0',
        'Bays_1',
        'Bays_2',
        'Bays_3',
        'Bays_4',
        'Bays_5',
        'Bays_6',
        'Bays_8',
        'Bays_10',
      ]
    >;
    driveBays35: Schema.Attribute.Enumeration<
      [
        'Bays_0',
        'Bays_1',
        'Bays_2',
        'Bays_3',
        'Bays_4',
        'Bays_5',
        'Bays_6',
        'Bays_8',
        'Bays_10',
      ]
    >;
    dustFilters: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    expansionSlots: Schema.Attribute.Enumeration<
      [
        'Slots_2',
        'Slots_3',
        'Slots_4',
        'Slots_5',
        'Slots_6',
        'Slots_7',
        'Slots_8',
        'Slots_9',
        'Slots_10',
      ]
    >;
    fanController: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    frontFans: Schema.Attribute.Enumeration<
      [
        'Fan_1x120mm',
        'Fan_2x120mm',
        'Fan_3x120mm',
        'Fan_4x120mm',
        'Fan_1x140mm',
        'Fan_2x140mm',
        'Fan_3x140mm',
        'Fan_1x200mm',
        'Fan_2x200mm',
        'Fan_Mixed',
        'None',
      ]
    >;
    frontIOAudio: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    frontIOUSB32Gen1: Schema.Attribute.Enumeration<
      ['Ports_0', 'Ports_1', 'Ports_2', 'Ports_3', 'Ports_4']
    >;
    frontIOUSB32Gen2: Schema.Attribute.Enumeration<
      ['Ports_0', 'Ports_1', 'Ports_2']
    >;
    frontIOUSBTypeC: Schema.Attribute.Enumeration<
      ['Ports_0', 'Ports_1', 'Ports_2']
    >;
    frontPanelMaterial: Schema.Attribute.Enumeration<
      [
        'Steel',
        'Mesh',
        'Tempered_Glass',
        'Acrylic',
        'Plastic',
        'Aluminum',
        'Glass_Mesh_Combo',
      ]
    >;
    frontRadiatorSupport: Schema.Attribute.Enumeration<
      [
        'Rad_None',
        'Rad_120mm',
        'Rad_140mm',
        'Rad_240mm',
        'Rad_280mm',
        'Rad_360mm',
        'Rad_420mm',
      ]
    >;
    includedFans: Schema.Attribute.Enumeration<
      [
        'Fans_None',
        'Fans_1x92mm',
        'Fans_1x120mm',
        'Fans_2x120mm',
        'Fans_3x120mm',
        'Fans_4x120mm',
        'Fans_1x140mm',
        'Fans_2x140mm',
        'Fans_3x140mm',
        'Fans_1x200mm',
        'Fans_Mixed_2',
        'Fans_Mixed_3',
        'Fans_Mixed_4',
      ]
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::case-specification.case-specification'
    > &
      Schema.Attribute.Private;
    manufacturer: Schema.Attribute.Enumeration<
      [
        'Lian_Li',
        'NZXT',
        'Corsair',
        'Fractal_Design',
        'Phanteks',
        'be_quiet',
        'Cooler_Master',
        'Thermaltake',
        'MSI',
        'ASUS',
        'Gigabyte',
        'Silverstone',
        'SSUPD',
        'Meshify',
        'DeepCool',
        'Montech',
        'InWin',
        'Antec',
        'BitFenix',
        'Razer',
        'HYTE',
        'Jonsbo',
        'SAMA',
        'Cougar',
      ]
    >;
    maxCPUCoolerHeight: Schema.Attribute.Enumeration<
      [
        'Height_50mm',
        'Height_55mm',
        'Height_60mm',
        'Height_65mm',
        'Height_70mm',
        'Height_75mm',
        'Height_80mm',
        'Height_100mm',
        'Height_120mm',
        'Height_140mm',
        'Height_155mm',
        'Height_160mm',
        'Height_165mm',
        'Height_170mm',
        'Height_175mm',
        'Height_180mm',
        'Height_185mm',
        'Height_190mm',
        'Height_200mm',
      ]
    >;
    maxGPULength: Schema.Attribute.Enumeration<
      [
        'Length_200mm',
        'Length_250mm',
        'Length_280mm',
        'Length_300mm',
        'Length_320mm',
        'Length_330mm',
        'Length_340mm',
        'Length_350mm',
        'Length_360mm',
        'Length_370mm',
        'Length_380mm',
        'Length_400mm',
        'Length_420mm',
        'Length_450mm',
        'Length_Over450mm',
      ]
    >;
    maxPSULength: Schema.Attribute.Enumeration<
      [
        'Length_120mm',
        'Length_140mm',
        'Length_150mm',
        'Length_160mm',
        'Length_170mm',
        'Length_180mm',
        'Length_190mm',
        'Length_200mm',
        'Length_220mm',
        'Length_250mm',
        'Length_Unlimited',
      ]
    >;
    motherboardSupport: Schema.Attribute.Enumeration<
      [
        'Mini_ITX',
        'Mini_ITX_Micro_ATX',
        'Mini_ITX_Micro_ATX_ATX',
        'Mini_ITX_Micro_ATX_ATX_E_ATX',
        'Mini_DTX_Mini_ITX',
        'All_Sizes',
      ]
    >;
    product: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
    PSUFormFactor: Schema.Attribute.Enumeration<
      ['ATX', 'SFX', 'SFX_L', 'ATX_SFX', 'TFX', 'Flex_ATX']
    >;
    psuPosition: Schema.Attribute.Enumeration<
      ['Bottom', 'Top', 'Rear', 'Chamber', 'Side']
    >;
    publishedAt: Schema.Attribute.DateTime;
    rearFans: Schema.Attribute.Enumeration<
      ['Fan_1x92mm', 'Fan_1x120mm', 'Fan_1x140mm', 'Fan_2x120mm', 'None']
    >;
    rearRadiatorSupport: Schema.Attribute.Enumeration<
      ['Rad_None', 'Rad_120mm', 'Rad_140mm']
    >;
    rgb: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    sideFans: Schema.Attribute.Enumeration<
      [
        'Fan_1x120mm',
        'Fan_2x120mm',
        'Fan_3x120mm',
        'Fan_1x140mm',
        'Fan_2x140mm',
        'None',
      ]
    >;
    sidePanelMaterial: Schema.Attribute.Enumeration<
      [
        'Steel',
        'Tempered_Glass',
        'Acrylic',
        'Mesh',
        'Steel_Window',
        'Tempered_Glass_Dual',
        'Full_Mesh',
        'Glass_Mesh_Combo',
      ]
    >;
    sideRadiatorSupport: Schema.Attribute.Enumeration<
      ['Rad_None', 'Rad_120mm', 'Rad_240mm', 'Rad_280mm', 'Rad_360mm']
    >;
    toolFree: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    topFans: Schema.Attribute.Enumeration<
      [
        'Fan_1x120mm',
        'Fan_2x120mm',
        'Fan_3x120mm',
        'Fan_1x140mm',
        'Fan_2x140mm',
        'Fan_3x140mm',
        'Fan_1x200mm',
        'Fan_Mixed',
        'None',
      ]
    >;
    topRadiatorSupport: Schema.Attribute.Enumeration<
      [
        'Rad_None',
        'Rad_120mm',
        'Rad_140mm',
        'Rad_240mm',
        'Rad_280mm',
        'Rad_360mm',
        'Rad_420mm',
      ]
    >;
    type: Schema.Attribute.Enumeration<
      [
        'Full_Tower',
        'Mid_Tower',
        'Mini_Tower',
        'SFF',
        'HTPC',
        'Open_Frame',
        'Test_Bench',
      ]
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    verticalGPUSlots: Schema.Attribute.Enumeration<
      ['Slots_0', 'Slots_2', 'Slots_3', 'Slots_4']
    >;
    weight: Schema.Attribute.Enumeration<
      [
        'Weight_Under3kg',
        'Weight_3_5kg',
        'Weight_5_7kg',
        'Weight_7_9kg',
        'Weight_9_11kg',
        'Weight_11_13kg',
        'Weight_13_15kg',
        'Weight_Over15kg',
      ]
    >;
  };
}

export interface ApiCategoryMarkupCategoryMarkup
  extends Struct.CollectionTypeSchema {
  collectionName: 'category_markups';
  info: {
    displayName: 'CategoryMarkup';
    pluralName: 'category-markups';
    singularName: 'category-markup';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::category-markup.category-markup'
    > &
      Schema.Attribute.Private;
    markupPercent: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    vendor: Schema.Attribute.Relation<'manyToOne', 'api::vendor.vendor'>;
  };
}

export interface ApiCategoryCategory extends Struct.CollectionTypeSchema {
  collectionName: 'categories';
  info: {
    displayName: 'Category';
    pluralName: 'categories';
    singularName: 'category';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    category: Schema.Attribute.Relation<'oneToOne', 'api::category.category'>;
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#00B553'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    descriptionBg: Schema.Attribute.Text;
    icon: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Emoji/icon'>;
    image: Schema.Attribute.Media<'images'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    nameBg: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    publishedAt: Schema.Attribute.DateTime;
    showInMenu: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    showOnHomepage: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCpuSpecificationCpuSpecification
  extends Struct.CollectionTypeSchema {
  collectionName: 'cpu_specifications';
  info: {
    displayName: 'CPU Specification';
    pluralName: 'cpu-specifications';
    singularName: 'cpu-specification';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    baseClock: Schema.Attribute.Enumeration<
      [
        'GHz_2_0',
        'GHz_2_2',
        'GHz_2_4',
        'GHz_2_5',
        'GHz_2_6',
        'GHz_2_8',
        'GHz_3_0',
        'GHz_3_2',
        'GHz_3_4',
        'GHz_3_5',
        'GHz_3_6',
        'GHz_3_7',
        'GHz_3_8',
        'GHz_4_0',
        'GHz_4_2',
        'GHz_4_3',
        'GHz_4_5',
        'GHz_4_7',
        'GHz_5_0',
      ]
    >;
    boostClock: Schema.Attribute.Enumeration<
      [
        'GHz_3_5',
        'GHz_3_8',
        'GHz_4_0',
        'GHz_4_2',
        'GHz_4_4',
        'GHz_4_5',
        'GHz_4_6',
        'GHz_4_7',
        'GHz_4_8',
        'GHz_4_9',
        'GHz_5_0',
        'GHz_5_1',
        'GHz_5_2',
        'GHz_5_3',
        'GHz_5_4',
        'GHz_5_5',
        'GHz_5_6',
        'GHz_5_7',
        'GHz_5_8',
        'GHz_6_0',
        'GHz_6_2',
      ]
    >;
    cacheL2: Schema.Attribute.Enumeration<
      [
        'L2_1MB',
        'L2_2MB',
        'L2_4MB',
        'L2_6MB',
        'L2_8MB',
        'L2_12MB',
        'L2_14MB',
        'L2_16MB',
        'L2_20MB',
        'L2_24MB',
        'L2_32MB',
        'L2_64MB',
      ]
    >;
    cacheL3: Schema.Attribute.Enumeration<
      [
        'L3_4MB',
        'L3_8MB',
        'L3_12MB',
        'L3_16MB',
        'L3_24MB',
        'L3_30MB',
        'L3_32MB',
        'L3_36MB',
        'L3_64MB',
        'L3_96MB',
        'L3_128MB',
        'L3_256MB',
        'L3_384MB',
      ]
    >;
    coolerIncluded: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    cores: Schema.Attribute.Enumeration<
      [
        'Cores_2',
        'Cores_4',
        'Cores_6',
        'Cores_8',
        'Cores_10',
        'Cores_12',
        'Cores_14',
        'Cores_16',
        'Cores_18',
        'Cores_20',
        'Cores_24',
        'Cores_32',
        'Cores_64',
        'Cores_96',
        'Cores_128',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    generation: Schema.Attribute.Enumeration<
      [
        'Zen_5',
        'Zen_4',
        'Zen_3',
        'Zen_2',
        'Zen_Plus',
        'Zen',
        'Raptor_Lake_Refresh',
        'Raptor_Lake',
        'Alder_Lake',
        'Rocket_Lake',
        'Comet_Lake',
        'Coffee_Lake',
        'Arrow_Lake',
        'Lunar_Lake',
        'Meteor_Lake',
      ]
    >;
    igpuModel: Schema.Attribute.Enumeration<
      [
        'None',
        'Radeon_Graphics',
        'Radeon_Vega_3',
        'Radeon_Vega_6',
        'Radeon_Vega_7',
        'Radeon_Vega_8',
        'Radeon_Vega_11',
        'Radeon_780M',
        'Radeon_760M',
        'Radeon_740M',
        'Intel_UHD_610',
        'Intel_UHD_630',
        'Intel_UHD_730',
        'Intel_UHD_770',
        'Intel_Iris_Xe',
        'Intel_Arc',
      ]
    >;
    integratedGraphics: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    lithograpy: Schema.Attribute.Enumeration<
      ['nm_3', 'nm_4', 'nm_5', 'nm_6', 'nm_7', 'nm_10', 'nm_12', 'nm_14']
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::cpu-specification.cpu-specification'
    > &
      Schema.Attribute.Private;
    manufacturer: Schema.Attribute.Enumeration<['AMD', 'Intel']>;
    maxMemory: Schema.Attribute.Enumeration<
      [
        'RAM_64GB',
        'RAM_128GB',
        'RAM_192GB',
        'RAM_256GB',
        'RAM_512GB',
        'RAM_1TB',
        'RAM_2TB',
        'RAM_4TB',
      ]
    >;
    maxMemorySpeed: Schema.Attribute.Enumeration<
      [
        'MTs_2666',
        'MTs_2933',
        'MTs_3200',
        'MTs_3600',
        'MTs_4000',
        'MTs_4400',
        'MTs_4800',
        'MTs_5200',
        'MTs_5600',
        'MTs_6000',
        'MTs_6400',
        'MTs_6800',
        'MTs_7200',
        'MTs_7600',
        'MTs_8000',
        'MTs_8400',
        'MTs_8800',
      ]
    >;
    memoryChannels: Schema.Attribute.Enumeration<
      ['Channels_2', 'Channels_4', 'Channels_6', 'Channels_8']
    >;
    memoryType: Schema.Attribute.Enumeration<['DDR4', 'DDR5', 'DDR4_DDR5']>;
    pcieLanes: Schema.Attribute.Enumeration<
      [
        'Lanes_16',
        'Lanes_20',
        'Lanes_24',
        'Lanes_28',
        'Lanes_32',
        'Lanes_44',
        'Lanes_48',
        'Lanes_64',
        'Lanes_80',
        'Lanes_112',
        'Lanes_128',
      ]
    >;
    pcieVersion: Schema.Attribute.Enumeration<
      ['PCIe_3_0', 'PCIe_4_0', 'PCIe_5_0']
    >;
    product: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
    publishedAt: Schema.Attribute.DateTime;
    series: Schema.Attribute.Enumeration<
      [
        'Ryzen_9',
        'Ryzen_7',
        'Ryzen_5',
        'Ryzen_3',
        'Ryzen_Threadripper',
        'Ryzen_Threadripper_PRO',
        'Core_i9',
        'Core_i7',
        'Core_i5',
        'Core_i3',
        'Core_Ultra_9',
        'Core_Ultra_7',
        'Core_Ultra_5',
        'Pentium',
        'Celeron',
        'Xeon',
        'EPYC',
      ]
    >;
    socket: Schema.Attribute.Enumeration<
      [
        'AM4',
        'AM5',
        'LGA1700',
        'LGA1200',
        'LGA1151',
        'LGA2066',
        'sTRX4',
        'sWRX8',
        'TR4',
        'SP5',
        'SP3',
        'LGA1851',
      ]
    >;
    tdp: Schema.Attribute.Enumeration<
      [
        'TDP_35W',
        'TDP_45W',
        'TDP_55W',
        'TDP_65W',
        'TDP_80W',
        'TDP_95W',
        'TDP_105W',
        'TDP_125W',
        'TDP_150W',
        'TDP_170W',
        'TDP_180W',
        'TDP_200W',
        'TDP_250W',
        'TDP_280W',
        'TDP_350W',
      ]
    >;
    threads: Schema.Attribute.Enumeration<
      [
        'Threads_2',
        'Threads_4',
        'Threads_8',
        'Threads_12',
        'Threads_16',
        'Threads_20',
        'Threads_24',
        'Threads_28',
        'Threads_32',
        'Threads_36',
        'Threads_40',
        'Threads_48',
        'Threads_64',
        'Threads_128',
        'Threads_192',
        'Threads_256',
      ]
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiGlobalSettingGlobalSetting extends Struct.SingleTypeSchema {
  collectionName: 'global_settings';
  info: {
    displayName: 'Global Setting';
    pluralName: 'global-settings';
    singularName: 'global-setting';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bgnToEurRate: Schema.Attribute.Decimal &
      Schema.Attribute.DefaultTo<1.95583>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::global-setting.global-setting'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    showBGNReference: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    transitionEndDate: Schema.Attribute.DateTime &
      Schema.Attribute.DefaultTo<'2026-12-30T22:00:00.000Z'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiGpuSpecificationGpuSpecification
  extends Struct.CollectionTypeSchema {
  collectionName: 'gpu_specifications';
  info: {
    displayName: 'GPU Specification';
    pluralName: 'gpu-specifications';
    singularName: 'gpu-specification';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    backplate: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    boostClock: Schema.Attribute.Enumeration<
      [
        'MHz_1500',
        'MHz_1600',
        'MHz_1700',
        'MHz_1800',
        'MHz_1900',
        'MHz_2000',
        'MHz_2100',
        'MHz_2200',
        'MHz_2300',
        'MHz_2400',
        'MHz_2500',
        'MHz_2600',
        'MHz_2700',
        'MHz_2800',
        'MHz_2900',
        'MHz_3000',
      ]
    >;
    cardLength: Schema.Attribute.Enumeration<
      [
        'Length_Under200mm',
        'Length_200_250mm',
        'Length_250_300mm',
        'Length_300_320mm',
        'Length_320_350mm',
        'Length_Over350mm',
      ]
    >;
    chipManufacturer: Schema.Attribute.Enumeration<['NVIDIA', 'AMD', 'Intel']>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    cudaCoresStreams: Schema.Attribute.Enumeration<
      [
        'Cores_1024',
        'Cores_1536',
        'Cores_2048',
        'Cores_2560',
        'Cores_3072',
        'Cores_3584',
        'Cores_4096',
        'Cores_5120',
        'Cores_5888',
        'Cores_6144',
        'Cores_7168',
        'Cores_7680',
        'Cores_8192',
        'Cores_8704',
        'Cores_9216',
        'Cores_9728',
        'Cores_10240',
        'Cores_10752',
        'Cores_12288',
        'Cores_14336',
        'Cores_16384',
        'Cores_18432',
        'Cores_21760',
      ]
    >;
    displayPorts: Schema.Attribute.Enumeration<
      ['DP_0', 'DP_1', 'DP_2', 'DP_3', 'DP_4']
    >;
    dlss: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    fans: Schema.Attribute.Enumeration<['Fans_1', 'Fans_2', 'Fans_3']>;
    fsr: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    gpuModel: Schema.Attribute.Enumeration<
      [
        'RTX 5090',
        'RTX 5080',
        'RTX 5070 Ti',
        'RTX 5070',
        'RTX 4090',
        'RTX 4080 SUPER',
        'RTX 4080',
        'RTX 4070 Ti SUPER',
        'RTX 4070 Ti',
        'RTX 4070 SUPER',
        'RTX 4070',
        'RTX 4060 Ti',
        'RTX 4060',
        'RTX 3090 Ti',
        'RTX 3090',
        'RTX 3080 Ti',
        'RTX 3080',
        'RTX 3070 Ti',
        'RTX 3070',
        'RTX 3060 Ti',
        'RTX 3060',
        'RX 7900 XTX',
        'RX 7900 XT',
        'RX 7900 GRE',
        'RX 7800 XT',
        'RX 7700 XT',
        'RX 7600 XT',
        'RX 7600',
        'RX 6950 XT',
        'RX 6900 XT',
        'RX 6800 XT',
        'RX 6800',
        'RX 6750 XT',
        'RX 6700 XT',
        'RX 6650 XT',
        'RX 6600 XT',
        'RX 6600',
        'Arc A770',
        'Arc A750',
        'Arc A580',
        'Arc A380',
      ]
    >;
    hdmiPorts: Schema.Attribute.Enumeration<['HDMI_0', 'HDMI_1', 'HDMI_2']>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::gpu-specification.gpu-specification'
    > &
      Schema.Attribute.Private;
    maxResolution: Schema.Attribute.Enumeration<
      ['Res_1080p', 'Res_1440p', 'Res_4K', 'Res_5K', 'Res_8K']
    >;
    memory: Schema.Attribute.Enumeration<
      [
        'VRAM_4GB',
        'VRAM_6GB',
        'VRAM_8GB',
        'VRAM_10GB',
        'VRAM_12GB',
        'VRAM_16GB',
        'VRAM_20GB',
        'VRAM_24GB',
        'VRAM_32GB',
        'VRAM_48GB',
      ]
    >;
    memoryBus: Schema.Attribute.Enumeration<
      [
        'Bus_64bit',
        'Bus_128bit',
        'Bus_192bit',
        'Bus_256bit',
        'Bus_320bit',
        'Bus_384bit',
        'Bus_512bit',
      ]
    >;
    memoryType: Schema.Attribute.Enumeration<
      ['GDDR5', 'GDDR5X', 'GDDR6', 'GDDR6X', 'HBM2', 'HBM2E', 'HBM3']
    >;
    powerConnector: Schema.Attribute.Enumeration<
      [
        'Power_None',
        'Power_6pin',
        'Power_8pin',
        'Power_6_8pin',
        'Power_2x8pin',
        'Power_3x8pin',
        'Power_12VHPWR',
        'Power_16pin',
      ]
    >;
    product: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
    publishedAt: Schema.Attribute.DateTime;
    rayTracing: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    recommendedPSU: Schema.Attribute.Enumeration<
      [
        'PSU_400W',
        'PSU_450W',
        'PSU_500W',
        'PSU_550W',
        'PSU_600W',
        'PSU_650W',
        'PSU_700W',
        'PSU_750W',
        'PSU_800W',
        'PSU_850W',
        'PSU_1000W',
        'PSU_1200W',
      ]
    >;
    rgb: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    series: Schema.Attribute.Enumeration<
      [
        'RTX 5000',
        'RTX 4000',
        'RTX 3000',
        'RTX 2000',
        'GTX 1600',
        'GTX 1000',
        'RX 9000',
        'RX 7000',
        'RX 6000',
        'RX 5000',
        'Arc A-Series',
        'Arc B-Series',
      ]
    >;
    slotWidth: Schema.Attribute.Enumeration<
      [
        'Slot_1_5',
        'Slot_2',
        'Slot_2_5',
        'Slot_2_7',
        'Slot_3',
        'Slot_3_5',
        'Slot_4',
      ]
    >;
    tdp: Schema.Attribute.Enumeration<
      [
        'TDP_75W',
        'TDP_100W',
        'TDP_120W',
        'TDP_150W',
        'TDP_170W',
        'TDP_200W',
        'TDP_220W',
        'TDP_250W',
        'TDP_285W',
        'TDP_300W',
        'TDP_320W',
        'TDP_350W',
        'TDP_400W',
        'TDP_450W',
        'TDP_500W',
        'TDP_600W',
      ]
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    usbCPorts: Schema.Attribute.Enumeration<['USB_C_0', 'USB_C_1', 'USB_C_2']>;
  };
}

export interface ApiHeadsetSpecificationHeadsetSpecification
  extends Struct.CollectionTypeSchema {
  collectionName: 'headset_specifications';
  info: {
    displayName: 'Headset Specification';
    pluralName: 'headset-specifications';
    singularName: 'headset-specification';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    anc: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    ancLevels: Schema.Attribute.Enumeration<
      [
        'Not_Applicable',
        'On_Off',
        'Levels_2',
        'Levels_3',
        'Levels_5',
        'Adaptive',
      ]
    >;
    cableLength: Schema.Attribute.Enumeration<
      ['Not_Applicable', 'm_1_0', 'm_1_2', 'm_1_5', 'm_1_8', 'm_2_0', 'm_3_0']
    >;
    cableType: Schema.Attribute.Enumeration<
      [
        'Not_Applicable',
        'Fixed',
        'Detachable_3_5mm',
        'Detachable_USB_C',
        'Detachable_Proprietary',
        'Braided',
      ]
    >;
    connectivity: Schema.Attribute.Enumeration<
      [
        'Wired_3_5mm',
        'Wired_USB',
        'Wired_3_5mm_USB',
        'Wireless_2_4GHz',
        'Wireless_Bluetooth',
        'Wireless_2_4GHz_Bluetooth',
        'Wired_Wireless_2_4GHz',
        'Wired_Wireless_Bluetooth',
        'Wired_Wireless_2_4GHz_Bluetooth',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    driverSize: Schema.Attribute.Enumeration<
      [
        'mm_30',
        'mm_40',
        'mm_44',
        'mm_50',
        'mm_53',
        'mm_55',
        'mm_60',
        'mm_70',
        'mm_100',
      ]
    >;
    driverType: Schema.Attribute.Enumeration<
      [
        'Dynamic',
        'Planar_Magnetic',
        'Electrostatic',
        'Balanced_Armature',
        'Hybrid',
        'Bio_Cellulose',
        'Titanium',
        'Graphene',
        'Liquid_Silicone',
      ]
    >;
    earcupMaterial: Schema.Attribute.Enumeration<
      [
        'Leatherette',
        'Velour',
        'Fabric',
        'Mesh',
        'Memory_Foam',
        'Protein_Leather',
        'Hybrid',
        'Gel_Infused',
        'Cooling_Gel',
      ]
    >;
    eq: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    eqPresets: Schema.Attribute.Enumeration<
      [
        'Not_Applicable',
        'Presets_3',
        'Presets_5',
        'Presets_10',
        'Custom_Only',
        'Presets_Plus_Custom',
      ]
    >;
    foldable: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    frequencyResponse: Schema.Attribute.Enumeration<
      [
        'Hz_10_20000',
        'Hz_10_21000',
        'Hz_10_22000',
        'Hz_10_23000',
        'Hz_10_25000',
        'Hz_12_20000',
        'Hz_12_28000',
        'Hz_15_20000',
        'Hz_15_25000',
        'Hz_20_20000',
        'Hz_20_25000',
        'Hz_20_40000',
      ]
    >;
    headbandMaterial: Schema.Attribute.Enumeration<
      [
        'Plastic',
        'Steel',
        'Aluminum',
        'Fabric',
        'Leatherette',
        'Memory_Foam',
        'Suspension',
      ]
    >;
    impedance: Schema.Attribute.Enumeration<
      [
        'Ohm_16',
        'Ohm_20',
        'Ohm_24',
        'Ohm_28',
        'Ohm_32',
        'Ohm_35',
        'Ohm_38',
        'Ohm_40',
        'Ohm_45',
        'Ohm_60',
        'Ohm_64',
        'Ohm_80',
        'Ohm_150',
        'Ohm_250',
        'Ohm_300',
      ]
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::headset-specification.headset-specification'
    > &
      Schema.Attribute.Private;
    manufacturer: Schema.Attribute.Enumeration<
      [
        'Logitech',
        'Razer',
        'Corsair',
        'SteelSeries',
        'HyperX',
        'ASUS',
        'Astro',
        'Turtle_Beach',
        'JBL',
        'Audio_Technica',
        'Sennheiser',
        'EPOS',
        'Beyerdynamic',
        'Drop',
        'Audeze',
        'Sony',
        'Microsoft',
        'Creative',
        'Cooler_Master',
        'Roccat',
        'MSI',
        'Gigabyte',
        'Fnatic',
        'NZXT',
        'Skullcandy',
      ]
    >;
    microphoneFrequency: Schema.Attribute.Enumeration<
      [
        'Not_Applicable',
        'Hz_50_10000',
        'Hz_50_12000',
        'Hz_100_6500',
        'Hz_100_8000',
        'Hz_100_10000',
        'Hz_100_12000',
        'Hz_100_16000',
        'Hz_100_18000',
      ]
    >;
    microphoneMute: Schema.Attribute.Enumeration<
      [
        'Not_Applicable',
        'Button',
        'Switch',
        'Flip_Up',
        'Touch',
        'Software_Only',
      ]
    >;
    microphonePattern: Schema.Attribute.Enumeration<
      [
        'Not_Applicable',
        'Omnidirectional',
        'Cardioid',
        'Bidirectional',
        'Unidirectional',
        'Noise_Cancelling',
      ]
    >;
    microphoneType: Schema.Attribute.Enumeration<
      [
        'None',
        'Built_In',
        'Boom_Fixed',
        'Boom_Flexible',
        'Boom_Detachable',
        'Boom_Retractable',
        'Boom_Flip_To_Mute',
        'Dual_Microphone',
        'Beamforming',
      ]
    >;
    onEarControls: Schema.Attribute.Enumeration<
      [
        'None',
        'Volume_Only',
        'Volume_Mute',
        'Volume_Mute_Power',
        'Full_Controls',
        'Touch_Controls',
      ]
    >;
    platformCompatibility: Schema.Attribute.Enumeration<
      [
        'PC_Only',
        'PC_Mac',
        'PC_PlayStation',
        'PC_Xbox',
        'PC_PlayStation_Xbox',
        'PC_PlayStation_Switch',
        'PC_Mac_PlayStation_Xbox_Switch',
        'Universal',
        'Mobile',
        'PC_Mobile',
      ]
    >;
    product: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
    publishedAt: Schema.Attribute.DateTime;
    quickCharge: Schema.Attribute.Enumeration<
      [
        'Not_Applicable',
        'Min_10_For_2H',
        'Min_10_For_3H',
        'Min_15_For_2H',
        'Min_15_For_3H',
        'Min_15_For_6H',
      ]
    >;
    rgb: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    rgbZones: Schema.Attribute.Enumeration<
      ['None', 'Earcup_Logo', 'Earcup_Ring', 'Earcup_Full', 'Dual_Zone']
    >;
    rotatingEarcups: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    sensitivity: Schema.Attribute.Enumeration<
      [
        'dB_96',
        'dB_98',
        'dB_100',
        'dB_102',
        'dB_104',
        'dB_106',
        'dB_108',
        'dB_110',
        'dB_112',
        'dB_116',
        'dB_118',
        'dB_119',
        'dB_120',
      ]
    >;
    series: Schema.Attribute.Enumeration<
      [
        'G_Series',
        'G_Pro',
        'G_Pro_X',
        'BlackShark',
        'Kraken',
        'Barracuda',
        'Nari',
        'Void',
        'HS_Series',
        'Virtuoso',
        'Arctis',
        'Arctis_Nova',
        'Arctis_Prime',
        'Cloud',
        'Cloud_Alpha',
        'Cloud_II',
        'Cloud_III',
        'Cloud_Stinger',
        'ROG_Delta',
        'ROG_Strix',
        'ROG_Fusion',
        'TUF_Gaming',
        'A40',
        'A50',
        'Stealth',
        'Recon',
        'Elite',
        'Atlas',
        'Quantum',
        'M_Series',
        'GSP',
        'Game_One',
        'Game_Zero',
        'PC_Series',
        'Penrose',
        'Mobius',
        'Maxwell',
        'Pulse',
        'INZONE',
        'Xbox_Wireless',
        'MH_Series',
        'Immersa',
        'Delta',
        'Elo',
        'GH_Series',
        'AORUS',
        'React',
        'Relay',
      ]
    >;
    sidetone: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    software: Schema.Attribute.Enumeration<
      [
        'None',
        'Logitech_G_Hub',
        'Razer_Synapse',
        'Corsair_iCUE',
        'SteelSeries_GG',
        'HyperX_NGENUITY',
        'ASUS_Armoury_Crate',
        'Astro_Command_Center',
        'Turtle_Beach_Audio_Hub',
        'JBL_QuantumENGINE',
        'EPOS_Gaming_Suite',
        'Audeze_HQ',
        'Sony_InZone_Hub',
        'Creative_App',
        'Roccat_Swarm',
      ]
    >;
    surroundSound: Schema.Attribute.Enumeration<
      [
        'Stereo',
        'Virtual_5_1',
        'Virtual_7_1',
        'True_5_1',
        'True_7_1',
        'Dolby_Atmos',
        'DTS_Headphone_X',
        'THX_Spatial',
        'Tempest_3D',
        'Windows_Sonic',
        'Sony_360_Audio',
        'ASUS_AI_Surround',
      ]
    >;
    transparencyMode: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    type: Schema.Attribute.Enumeration<
      ['Over_Ear_Closed', 'Over_Ear_Open', 'On_Ear', 'In_Ear']
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    weight: Schema.Attribute.Enumeration<
      [
        'g_Under_200',
        'g_200_250',
        'g_250_280',
        'g_280_300',
        'g_300_330',
        'g_330_360',
        'g_360_400',
        'g_Over_400',
      ]
    >;
    wirelessDongle: Schema.Attribute.Enumeration<
      ['Not_Applicable', 'USB_A', 'USB_C', 'USB_A_USB_C_Adapter']
    >;
  };
}

export interface ApiHeroSlideHeroSlide extends Struct.CollectionTypeSchema {
  collectionName: 'hero_slides';
  info: {
    displayName: 'Hero Slide';
    pluralName: 'hero-slides';
    singularName: 'hero-slide';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    active: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    buttonColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'#00B553'>;
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    buttonTextBg: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    endDate: Schema.Attribute.DateTime;
    image: Schema.Attribute.Media<'images'>;
    imageMobile: Schema.Attribute.Media<'images'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::hero-slide.hero-slide'
    > &
      Schema.Attribute.Private;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    overlayOpacity: Schema.Attribute.Decimal & Schema.Attribute.DefaultTo<0.4>;
    publishedAt: Schema.Attribute.DateTime;
    startDate: Schema.Attribute.DateTime;
    subtitle: Schema.Attribute.String;
    subtitleBg: Schema.Attribute.String;
    textPosition: Schema.Attribute.Enumeration<['left', 'center', 'right']>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleBg: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiInvoiceClientInvoiceClient
  extends Struct.CollectionTypeSchema {
  collectionName: 'invoice_clients';
  info: {
    displayName: 'Invoice client';
    pluralName: 'invoice-clients';
    singularName: 'invoice-client';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    buyerAddress: Schema.Attribute.String & Schema.Attribute.Required;
    buyerCity: Schema.Attribute.String;
    buyerEik: Schema.Attribute.String;
    buyerMol: Schema.Attribute.String;
    buyerName: Schema.Attribute.String & Schema.Attribute.Required;
    buyerVatNumber: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    invoiceNumber: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    invoiceStatus: Schema.Attribute.Enumeration<
      ['draft', 'issued', 'paid', 'cancelled']
    >;
    issuedDate: Schema.Attribute.DateTime & Schema.Attribute.Required;
    items: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::invoice-client.invoice-client'
    > &
      Schema.Attribute.Private;
    notes: Schema.Attribute.Text;
    order: Schema.Attribute.Relation<'oneToOne', 'api::order.order'>;
    pdfFile: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    publishedAt: Schema.Attribute.DateTime;
    subtotal: Schema.Attribute.Decimal;
    totalAmount: Schema.Attribute.Decimal;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users_permissions_user: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    vatAmount: Schema.Attribute.Decimal;
  };
}

export interface ApiKeyboardSpecificationKeyboardSpecification
  extends Struct.CollectionTypeSchema {
  collectionName: 'keyboard_specifications';
  info: {
    displayName: 'Keyboard Specification';
    pluralName: 'keyboard-specifications';
    singularName: 'keyboard-specification';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    actuationForce: Schema.Attribute.Enumeration<
      [
        'Force_35g',
        'Force_40g',
        'Force_45g',
        'Force_50g',
        'Force_55g',
        'Force_60g',
        'Force_65g',
        'Force_67g',
        'Force_70g',
        'Force_80g',
      ]
    >;
    actuationPoint: Schema.Attribute.Enumeration<
      [
        'mm_0_1',
        'mm_0_2',
        'mm_0_4',
        'mm_1_0',
        'mm_1_2',
        'mm_1_5',
        'mm_1_8',
        'mm_2_0',
        'mm_2_2',
        'mm_2_5',
        'mm_3_0',
        'mm_4_0',
        'Adjustable',
      ]
    >;
    antiGhosting: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    audioPassthrough: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    backlighting: Schema.Attribute.Enumeration<
      ['None', 'Single_Color', 'RGB_Single_Zone', 'RGB_Per_Key']
    >;
    batteryLife: Schema.Attribute.Enumeration<
      [
        'Not_Applicable',
        'Hours_30',
        'Hours_40',
        'Hours_50',
        'Hours_70',
        'Hours_100',
        'Hours_150',
        'Hours_200',
        'Hours_300',
        'Hours_400',
        'Hours_1000',
      ]
    >;
    cableLength: Schema.Attribute.Enumeration<
      ['m_1_0', 'm_1_5', 'm_1_8', 'm_2_0', 'm_2_5', 'm_3_0']
    >;
    cableType: Schema.Attribute.Enumeration<
      [
        'Fixed',
        'Detachable_USB_C',
        'Detachable_USB_A',
        'Detachable_Micro_USB',
        'Braided_Fixed',
        'Braided_Detachable',
        'Coiled_Detachable',
      ]
    >;
    connectivity: Schema.Attribute.Enumeration<
      [
        'Wired_USB',
        'Wireless_2_4GHz',
        'Bluetooth',
        'Wired_Wireless_2_4GHz',
        'Wired_Bluetooth',
        'Wireless_2_4GHz_Bluetooth',
        'Wired_Wireless_2_4GHz_Bluetooth',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    formFactor: Schema.Attribute.Enumeration<
      [
        'Full_Size_100',
        'TKL_80',
        'Compact_75',
        'Compact_65',
        'Compact_60',
        'Compact_40',
        'Numpad',
        'Ergonomic',
        'Split',
      ]
    >;
    frameMaterial: Schema.Attribute.Enumeration<
      [
        'Plastic',
        'Aluminum',
        'Aluminum_Top_Plate',
        'Steel',
        'Polycarbonate',
        'Wood',
        'Acrylic',
      ]
    >;
    gasketMount: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    hotSwappable: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    keycapMaterial: Schema.Attribute.Enumeration<
      [
        'ABS',
        'PBT',
        'POM',
        'Double_Shot_ABS',
        'Double_Shot_PBT',
        'Pudding_PBT',
        'Shine_Through_ABS',
      ]
    >;
    keycapProfile: Schema.Attribute.Enumeration<
      ['OEM', 'Cherry', 'SA', 'DSA', 'XDA', 'MT3', 'KAT', 'MDA', 'Low_Profile']
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::keyboard-specification.keyboard-specification'
    > &
      Schema.Attribute.Private;
    macroKeys: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    manufacturer: Schema.Attribute.Enumeration<
      [
        'Logitech',
        'Razer',
        'Corsair',
        'SteelSeries',
        'HyperX',
        'ASUS_ROG',
        'Ducky',
        'Keychron',
        'Glorious',
        'Wooting',
        'GMMK',
        'Roccat',
        'Cooler_Master',
        'MSI',
        'Gigabyte',
        'Cherry',
        'Das_Keyboard',
        'Leopold',
        'Varmilo',
        'Anne_Pro',
        'Akko',
        'NuPhy',
        'IQUNIX',
        'Epomaker',
        'Royal_Kludge',
        'Redragon',
        'Fnatic',
        'Mountain',
        'Endgame_Gear',
      ]
    >;
    mediaControls: Schema.Attribute.Enumeration<
      [
        'None',
        'Fn_Shortcuts',
        'Dedicated_Buttons',
        'Volume_Wheel',
        'Volume_Roller',
        'Full_Media_Deck',
      ]
    >;
    nKeyRollover: Schema.Attribute.Enumeration<
      ['NKRO_6', 'NKRO_10', 'NKRO_Full']
    >;
    onboardMemory: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    pollingRate: Schema.Attribute.Enumeration<
      ['Hz_125', 'Hz_250', 'Hz_500', 'Hz_1000', 'Hz_2000', 'Hz_4000', 'Hz_8000']
    >;
    product: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
    publishedAt: Schema.Attribute.DateTime;
    rgb: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    rgbZones: Schema.Attribute.Enumeration<
      [
        'None',
        'Underglow',
        'Per_Key',
        'Per_Key_Underglow',
        'Side_Lights',
        'Full_Body',
      ]
    >;
    software: Schema.Attribute.Enumeration<
      [
        'None',
        'Logitech_G_Hub',
        'Razer_Synapse',
        'Corsair_iCUE',
        'SteelSeries_GG',
        'HyperX_NGENUITY',
        'ASUS_Armoury_Crate',
        'Glorious_Core',
        'Wooting_Wootility',
        'Keychron_Via',
        'QMK_VIA',
        'Roccat_Swarm',
        'Cooler_Master_Portal',
      ]
    >;
    soundDampening: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    switchBrand: Schema.Attribute.Enumeration<
      [
        'Cherry_MX',
        'Gateron',
        'Kailh',
        'Razer',
        'Logitech',
        'SteelSeries',
        'Romer_G',
        'HyperX',
        'Outemu',
        'Akko',
        'TTC',
        'Glorious',
        'Wooting',
        'Holy_Panda',
        'Zealios',
        'Boba',
        'Durock',
        'JWK',
        'SP_Star',
        'Tecsee',
        'Custom_Hotswap',
      ]
    >;
    switchType: Schema.Attribute.Enumeration<
      [
        'Linear_Red',
        'Linear_Black',
        'Linear_Yellow',
        'Linear_Speed_Silver',
        'Tactile_Brown',
        'Tactile_Clear',
        'Tactile_Orange',
        'Clicky_Blue',
        'Clicky_Green',
        'Clicky_White',
        'Silent_Red',
        'Silent_Black',
        'Silent_Brown',
        'Optical_Red',
        'Optical_Purple',
        'Magnetic_Hall_Effect',
        'Low_Profile_Red',
        'Low_Profile_Brown',
        'Low_Profile_Blue',
      ]
    >;
    totalTravel: Schema.Attribute.Enumeration<
      ['mm_2_5', 'mm_3_0', 'mm_3_2', 'mm_3_5', 'mm_3_7', 'mm_4_0']
    >;
    type: Schema.Attribute.Enumeration<
      [
        'Mechanical',
        'Optical_Mechanical',
        'Membrane',
        'Scissor',
        'Topre',
        'Hall_Effect',
        'Hybrid',
      ]
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    usbPassthrough: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    weight: Schema.Attribute.Enumeration<
      [
        'g_Under_500',
        'g_500_700',
        'g_700_900',
        'g_900_1100',
        'g_1100_1300',
        'g_1300_1500',
        'g_Over_1500',
      ]
    >;
    wristRest: Schema.Attribute.Enumeration<
      [
        'None',
        'Included_Plastic',
        'Included_Fabric',
        'Included_Leatherette',
        'Included_Memory_Foam',
        'Included_Magnetic',
        'Sold_Separately',
      ]
    >;
  };
}

export interface ApiLaptopSpecificationLaptopSpecification
  extends Struct.CollectionTypeSchema {
  collectionName: 'laptop_specifications';
  info: {
    displayName: 'Laptop Specification';
    pluralName: 'laptop-specifications';
    singularName: 'laptop-specification';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    advancedOptimus: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    audioJack: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    batteryCapacity: Schema.Attribute.Enumeration<
      [
        'Wh_40',
        'Wh_50',
        'Wh_54',
        'Wh_56',
        'Wh_60',
        'Wh_66',
        'Wh_70',
        'Wh_72',
        'Wh_76',
        'Wh_80',
        'Wh_86',
        'Wh_90',
        'Wh_95',
        'Wh_99',
        'Wh_100',
      ]
    >;
    chargerWattage: Schema.Attribute.Enumeration<
      [
        'W_45',
        'W_65',
        'W_90',
        'W_100',
        'W_120',
        'W_140',
        'W_150',
        'W_180',
        'W_200',
        'W_240',
        'W_280',
        'W_300',
        'W_330',
      ]
    >;
    color: Schema.Attribute.Enumeration<
      [
        'Black',
        'White',
        'Gray',
        'Silver',
        'Space_Gray',
        'Midnight',
        'Starlight',
        'Eclipse_Gray',
        'Volt_Green',
        'Nebula_Red',
        'Storm_Blue',
        'Moonlight_White',
        'Off_Black',
        'Carbon_Fiber',
        'Stealth_Black',
      ]
    >;
    cpuManufacturer: Schema.Attribute.Enumeration<
      ['Intel', 'AMD', 'Apple', 'Qualcomm']
    >;
    cpuModel: Schema.Attribute.Enumeration<
      [
        'i9_14900HX',
        'i9_14900H',
        'i9_13980HX',
        'i9_13900HX',
        'i9_13900H',
        'i7_14700HX',
        'i7_14650HX',
        'i7_13850HX',
        'i7_13800H',
        'i7_13700H',
        'i5_14500HX',
        'i5_14450HX',
        'i5_13600H',
        'i5_13500H',
        'i5_13420H',
        'Ultra_9_185H',
        'Ultra_7_165H',
        'Ultra_7_155H',
        'Ultra_5_125H',
        'R9_8945HX',
        'R9_8945HS',
        'R9_7945HX',
        'R9_7945HX3D',
        'R9_7940HX',
        'R9_7940HS',
        'R7_8845HS',
        'R7_8840HS',
        'R7_7840HS',
        'R7_7840U',
        'R7_7735HS',
        'R5_8645HS',
        'R5_8640HS',
        'R5_7640HS',
        'R5_7640U',
        'R5_7535HS',
        'M3',
        'M3_Pro_11_Core',
        'M3_Pro_12_Core',
        'M3_Max_14_Core',
        'M3_Max_16_Core',
        'M4',
        'M4_Pro_12_Core',
        'M4_Pro_14_Core',
        'M4_Max',
      ]
    >;
    cpuSeries: Schema.Attribute.Enumeration<
      [
        'Core_i9_14th_Gen',
        'Core_i9_13th_Gen',
        'Core_i7_14th_Gen',
        'Core_i7_13th_Gen',
        'Core_i5_14th_Gen',
        'Core_i5_13th_Gen',
        'Core_i3_14th_Gen',
        'Core_i3_13th_Gen',
        'Core_Ultra_9',
        'Core_Ultra_7',
        'Core_Ultra_5',
        'Ryzen_9_8000',
        'Ryzen_9_7000',
        'Ryzen_7_8000',
        'Ryzen_7_7000',
        'Ryzen_5_8000',
        'Ryzen_5_7000',
        'Apple_M3',
        'Apple_M3_Pro',
        'Apple_M3_Max',
        'Apple_M4',
        'Apple_M4_Pro',
        'Apple_M4_Max',
        'Snapdragon_X_Elite',
        'Snapdragon_X_Plus',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    displayPort: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    ethernetPort: Schema.Attribute.Enumeration<
      ['None', 'RJ45_1Gbps', 'RJ45_2_5Gbps']
    >;
    fingerprintReader: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    freeSync: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    gpuManufacturer: Schema.Attribute.Enumeration<
      ['NVIDIA', 'AMD', 'Intel', 'Apple', 'Integrated']
    >;
    gpuModel: Schema.Attribute.Enumeration<
      [
        'RTX_4090_Laptop',
        'RTX_4080_Laptop',
        'RTX_4070_Laptop',
        'RTX_4060_Laptop',
        'RTX_4050_Laptop',
        'RTX_3080_Ti_Laptop',
        'RTX_3080_Laptop',
        'RTX_3070_Ti_Laptop',
        'RTX_3070_Laptop',
        'RTX_3060_Laptop',
        'RTX_3050_Ti_Laptop',
        'RTX_3050_Laptop',
        'GTX_1650_Laptop',
        'RX_7900M',
        'RX_7800M',
        'RX_7700S',
        'RX_7600M_XT',
        'RX_7600M',
        'RX_7600S',
        'RX_6850M_XT',
        'RX_6800M',
        'RX_6700M',
        'RX_6650M',
        'RX_6600M',
        'RX_6500M',
        'Radeon_780M',
        'Radeon_760M',
        'Radeon_740M',
        'Radeon_680M',
        'Intel_Arc_A770M',
        'Intel_Arc_A730M',
        'Intel_Arc_A570M',
        'Intel_Arc_A370M',
        'Intel_Iris_Xe',
        'Intel_UHD',
        'Apple_M3_GPU_10_Core',
        'Apple_M3_Pro_GPU_14_Core',
        'Apple_M3_Pro_GPU_18_Core',
        'Apple_M3_Max_GPU_30_Core',
        'Apple_M3_Max_GPU_40_Core',
        'Integrated_Only',
      ]
    >;
    gpuTGP: Schema.Attribute.Enumeration<
      [
        'TGP_35W',
        'TGP_45W',
        'TGP_60W',
        'TGP_75W',
        'TGP_80W',
        'TGP_90W',
        'TGP_100W',
        'TGP_115W',
        'TGP_125W',
        'TGP_140W',
        'TGP_150W',
        'TGP_175W',
        'TGP_200W',
      ]
    >;
    gpuVRAM: Schema.Attribute.Enumeration<
      [
        'VRAM_Shared',
        'VRAM_2GB',
        'VRAM_4GB',
        'VRAM_6GB',
        'VRAM_8GB',
        'VRAM_12GB',
        'VRAM_16GB',
        'VRAM_24GB',
      ]
    >;
    gSync: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    hdmiPort: Schema.Attribute.Enumeration<
      ['None', 'HDMI_1_4', 'HDMI_2_0', 'HDMI_2_1']
    >;
    keyboardBacklight: Schema.Attribute.Enumeration<
      [
        'None',
        'Single_Color',
        'Single_Zone_RGB',
        'Four_Zone_RGB',
        'Per_Key_RGB',
      ]
    >;
    keyboardType: Schema.Attribute.Enumeration<
      [
        'Membrane',
        'Mechanical',
        'Optical_Mechanical',
        'Scissor',
        'Butterfly',
        'Magic_Keyboard',
      ]
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::laptop-specification.laptop-specification'
    > &
      Schema.Attribute.Private;
    manufacturer: Schema.Attribute.Enumeration<
      [
        'ASUS',
        'MSI',
        'Lenovo',
        'Acer',
        'HP',
        'Dell',
        'Razer',
        'Gigabyte',
        'Alienware',
        'Apple',
        'Samsung',
        'Huawei',
        'Xiaomi',
        'LG',
        'Microsoft',
        'Framework',
      ]
    >;
    material: Schema.Attribute.Enumeration<
      [
        'Plastic',
        'Aluminum',
        'Magnesium_Alloy',
        'Aluminum_Magnesium',
        'Carbon_Fiber',
        'Recycled_Aluminum',
      ]
    >;
    milSpec: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    muxSwitch: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    numpad: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    panelType: Schema.Attribute.Enumeration<
      [
        'IPS',
        'IPS_Level',
        'VA',
        'TN',
        'OLED',
        'Mini_LED',
        'Nebula_Display',
        'Nebula_HDR',
        'ROG_Nebula',
        'Liquid_Retina',
        'Liquid_Retina_XDR',
      ]
    >;
    product: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
    publishedAt: Schema.Attribute.DateTime;
    ramSize: Schema.Attribute.Enumeration<
      [
        'RAM_8GB',
        'RAM_16GB',
        'RAM_24GB',
        'RAM_32GB',
        'RAM_36GB',
        'RAM_48GB',
        'RAM_64GB',
        'RAM_96GB',
        'RAM_128GB',
      ]
    >;
    ramSlots: Schema.Attribute.Enumeration<
      ['Soldered', 'Slots_1', 'Slots_2', 'Slots_1_Plus_Soldered']
    >;
    ramSpeed: Schema.Attribute.Enumeration<
      [
        'MTs_3200',
        'MTs_4800',
        'MTs_5200',
        'MTs_5600',
        'MTs_6000',
        'MTs_6400',
        'MTs_7467',
        'MTs_7500',
      ]
    >;
    ramType: Schema.Attribute.Enumeration<
      ['DDR4', 'DDR5', 'LPDDR4X', 'LPDDR5', 'LPDDR5X', 'Unified_Memory']
    >;
    ramUpgradeable: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    rgb: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    screenBrightness: Schema.Attribute.Enumeration<
      [
        'Nits_250',
        'Nits_300',
        'Nits_350',
        'Nits_400',
        'Nits_500',
        'Nits_600',
        'Nits_800',
        'Nits_1000',
        'Nits_1100',
        'Nits_1600',
      ]
    >;
    screenRefreshRate: Schema.Attribute.Enumeration<
      [
        'Hz_60',
        'Hz_90',
        'Hz_120',
        'Hz_144',
        'Hz_165',
        'Hz_180',
        'Hz_240',
        'Hz_300',
        'Hz_360',
        'Hz_500',
      ]
    >;
    screenResolution: Schema.Attribute.Enumeration<
      [
        'HD_1366x768',
        'FHD_1920x1080',
        'FHD_Plus_1920x1200',
        'QHD_2560x1440',
        'QHD_Plus_2560x1600',
        'UHD_3840x2160',
        'OLED_2880x1800',
        'Mini_LED_2560x1600',
        'Retina_2560x1664',
        'Retina_3024x1964',
        'Retina_3456x2234',
      ]
    >;
    screenResponseTime: Schema.Attribute.Enumeration<
      ['Ms_1', 'Ms_2', 'Ms_3', 'Ms_4', 'Ms_5', 'Ms_7', 'Ms_8']
    >;
    screenSize: Schema.Attribute.Enumeration<
      [
        'Inch_13_3',
        'Inch_14',
        'Inch_14_5',
        'Inch_15_6',
        'Inch_16',
        'Inch_16_1',
        'Inch_17',
        'Inch_17_3',
        'Inch_18',
      ]
    >;
    sdCardReader: Schema.Attribute.Enumeration<
      ['None', 'microSD', 'SD_UHS_I', 'SD_UHS_II', 'SD_Express']
    >;
    secondStorageSlot: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    series: Schema.Attribute.Enumeration<
      [
        'ROG_Zephyrus',
        'ROG_Strix',
        'ROG_Flow',
        'TUF_Gaming',
        'Vivobook',
        'Zenbook',
        'ProArt',
        'Legion_Pro',
        'Legion_Slim',
        'Legion_Go',
        'IdeaPad_Gaming',
        'ThinkPad',
        'ThinkBook',
        'Predator_Helios',
        'Predator_Triton',
        'Nitro_5',
        'Nitro_7',
        'Nitro_V',
        'Swift',
        'Aspire',
        'Omen',
        'Victus',
        'Pavilion_Gaming',
        'Envy',
        'Spectre',
        'G_Series',
        'XPS',
        'Inspiron',
        'Latitude',
        'Precision',
        'Alienware_M',
        'Alienware_X',
        'Razer_Blade',
        'Razer_Book',
        'AORUS',
        'AERO',
        'G5',
        'Stealth',
        'Raider',
        'Titan',
        'Crosshair',
        'Vector',
        'Katana',
        'Cyborg',
        'Pulse',
        'Thin',
        'Sword',
        'Creator',
        'Prestige',
        'Modern',
        'MacBook_Air',
        'MacBook_Pro',
        'Galaxy_Book',
        'MateBook',
        'RedmiBook',
        'Gram',
        'Surface_Laptop',
        'Surface_Pro',
        'Framework_Laptop',
      ]
    >;
    speakers: Schema.Attribute.Enumeration<
      [
        'Stereo_2W',
        'Stereo_4W',
        'Stereo_6W',
        'Quad_Speaker',
        'Six_Speaker',
        'Harman_Kardon',
        'Bang_Olufsen',
        'DTS_X_Ultra',
        'Dolby_Atmos',
        'Force_Cancelling_Woofer',
      ]
    >;
    storageCapacity: Schema.Attribute.Enumeration<
      ['GB_128', 'GB_256', 'GB_512', 'TB_1', 'TB_2', 'TB_4', 'TB_8']
    >;
    storageSlots: Schema.Attribute.Enumeration<
      ['Slots_1', 'Slots_2', 'Slots_3']
    >;
    storageType: Schema.Attribute.Enumeration<
      [
        'NVMe_PCIe_3_0',
        'NVMe_PCIe_4_0',
        'NVMe_PCIe_5_0',
        'SATA_SSD',
        'HDD',
        'eMMC',
      ]
    >;
    thickness: Schema.Attribute.Enumeration<
      [
        'mm_Under_15',
        'mm_15_18',
        'mm_18_20',
        'mm_20_23',
        'mm_23_25',
        'mm_25_28',
        'mm_28_30',
        'mm_Over_30',
      ]
    >;
    thunderbolt: Schema.Attribute.Enumeration<
      ['Ports_0', 'Ports_1', 'Ports_2', 'Ports_3']
    >;
    touchpad: Schema.Attribute.Enumeration<
      [
        'Standard',
        'Precision',
        'NumberPad_Dual',
        'ScreenPad',
        'Haptic',
        'Force_Touch',
      ]
    >;
    touchscreen: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    usbPowerDelivery: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    usbTypeA: Schema.Attribute.Enumeration<
      ['Ports_0', 'Ports_1', 'Ports_2', 'Ports_3', 'Ports_4']
    >;
    usbTypeC: Schema.Attribute.Enumeration<
      ['Ports_0', 'Ports_1', 'Ports_2', 'Ports_3', 'Ports_4']
    >;
    vrReady: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    webcam: Schema.Attribute.Enumeration<
      [
        'None',
        'HD_720p',
        'FHD_1080p',
        'QHD_1440p',
        'IR_HD_720p',
        'IR_FHD_1080p',
      ]
    >;
    webcamFeatures: Schema.Attribute.Enumeration<
      [
        'None',
        'IR_Face_Recognition',
        'Windows_Hello',
        'Privacy_Shutter',
        'AI_Noise_Cancelling',
        'AV1_Encoding',
      ]
    >;
    weight: Schema.Attribute.Enumeration<
      [
        'Kg_Under_1_0',
        'Kg_1_0_1_3',
        'Kg_1_3_1_5',
        'Kg_1_5_1_8',
        'Kg_1_8_2_0',
        'Kg_2_0_2_3',
        'Kg_2_3_2_5',
        'Kg_2_5_2_8',
        'Kg_2_8_3_0',
        'Kg_Over_3_0',
      ]
    >;
    wirelessBluetooth: Schema.Attribute.Enumeration<
      ['BT_5_0', 'BT_5_1', 'BT_5_2', 'BT_5_3', 'BT_5_4']
    >;
    wirelessWiFi: Schema.Attribute.Enumeration<
      ['WiFi_5', 'WiFi_6', 'WiFi_6E', 'WiFi_7']
    >;
  };
}

export interface ApiMicrophoneSpecificationMicrophoneSpecification
  extends Struct.CollectionTypeSchema {
  collectionName: 'microphone_specifications';
  info: {
    displayName: 'Microphone Specification';
    pluralName: 'microphone-specifications';
    singularName: 'microphone-specification';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bitDepth: Schema.Attribute.Enumeration<
      ['Bit_16', 'Bit_24', 'Bit_32', 'Bit_16_24', 'Bit_24_32']
    >;
    boomArmIncluded: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    cableDetachable: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    cableLength: Schema.Attribute.Enumeration<
      ['Not_Applicable', 'm_1_0', 'm_1_5', 'm_1_8', 'm_2_0', 'm_2_5', 'm_3_0']
    >;
    capsules: Schema.Attribute.Enumeration<
      ['Single', 'Dual', 'Triple', 'Quad']
    >;
    color: Schema.Attribute.Enumeration<
      [
        'Black',
        'White',
        'Silver',
        'Gray',
        'Red',
        'Blue',
        'Pink',
        'Green',
        'Gold',
        'Rose_Gold',
        'Matte_Black',
        'Satin_Black',
      ]
    >;
    connectionInterface: Schema.Attribute.Enumeration<
      [
        'USB_A',
        'USB_C',
        'USB_A_To_USB_C',
        'XLR_3_Pin',
        'XLR_USB',
        'Lightning',
        'Wireless_USB_Dongle',
        'Bluetooth',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    diaphragmSize: Schema.Attribute.Enumeration<
      ['mm_10', 'mm_14', 'mm_16', 'mm_20', 'mm_22', 'mm_25', 'mm_34', 'Inch_1']
    >;
    dspEffects: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    dspFeatures: Schema.Attribute.Enumeration<
      [
        'Not_Applicable',
        'Noise_Reduction',
        'Noise_Gate',
        'Compressor',
        'De_Esser',
        'EQ',
        'Limiter',
        'Reverb',
        'Voice_Effects',
        'Full_Suite',
        'AI_Noise_Removal',
      ]
    >;
    frequencyResponse: Schema.Attribute.Enumeration<
      [
        'Hz_20_16000',
        'Hz_20_18000',
        'Hz_20_20000',
        'Hz_30_18000',
        'Hz_40_18000',
        'Hz_50_16000',
        'Hz_50_18000',
        'Hz_50_20000',
        'Hz_70_20000',
        'Hz_100_10000',
        'Hz_100_16000',
        'Hz_100_18000',
      ]
    >;
    gainControl: Schema.Attribute.Enumeration<
      [
        'None',
        'Physical_Knob',
        'Software_Only',
        'Physical_And_Software',
        'Touch_Control',
      ]
    >;
    headphoneJack: Schema.Attribute.Enumeration<
      ['Not_Applicable', 'mm_3_5', 'mm_6_35', 'mm_3_5_And_6_35']
    >;
    headphoneOutput: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    headphoneVolumeControl: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    impedance: Schema.Attribute.Enumeration<
      [
        'Ohm_16',
        'Ohm_32',
        'Ohm_50',
        'Ohm_75',
        'Ohm_100',
        'Ohm_150',
        'Ohm_200',
        'Ohm_250',
        'Ohm_300',
      ]
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::microphone-specification.microphone-specification'
    > &
      Schema.Attribute.Private;
    manufacturer: Schema.Attribute.Enumeration<
      [
        'Shure',
        'Rode',
        'Blue',
        'Elgato',
        'Audio_Technica',
        'HyperX',
        'Razer',
        'Corsair',
        'Logitech',
        'SteelSeries',
        'ASUS',
        'Beyerdynamic',
        'Sennheiser',
        'EPOS',
        'AKG',
        'Samson',
        'Fifine',
        'Maono',
        'NZXT',
        'JBL',
        'Creative',
        'Neat',
        'Presonus',
        'Mackie',
        'Focusrite',
        'TC_Helicon',
      ]
    >;
    material: Schema.Attribute.Enumeration<
      [
        'Plastic',
        'Metal',
        'Aluminum',
        'Steel',
        'Zinc_Alloy',
        'Die_Cast_Metal',
        'Metal_Mesh',
      ]
    >;
    maxSPL: Schema.Attribute.Enumeration<
      [
        'dB_110',
        'dB_115',
        'dB_120',
        'dB_125',
        'dB_130',
        'dB_135',
        'dB_140',
        'dB_145',
        'dB_150',
      ]
    >;
    microphoneType: Schema.Attribute.Enumeration<
      [
        'Condenser',
        'Dynamic',
        'Ribbon',
        'Electret',
        'USB_Condenser',
        'USB_Dynamic',
      ]
    >;
    mountType: Schema.Attribute.Enumeration<
      [
        'Desktop_Stand',
        'Desktop_Tripod',
        'Boom_Arm_Compatible',
        'Shock_Mount_Compatible',
        'Thread_5_8',
        'Thread_3_8',
        'Thread_5_8_And_3_8',
        'Magnetic_Desktop',
      ]
    >;
    muteButton: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    muteIndicator: Schema.Attribute.Enumeration<
      [
        'Not_Applicable',
        'LED',
        'RGB_LED',
        'Tap_To_Mute_LED',
        'Capacitive_Touch',
      ]
    >;
    phantomPowerRequired: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    phantomPowerVoltage: Schema.Attribute.Enumeration<
      ['Not_Applicable', 'V_12', 'V_24', 'V_48', 'V_12_48']
    >;
    plugAndPlay: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    polarPattern: Schema.Attribute.Enumeration<
      [
        'Cardioid',
        'Super_Cardioid',
        'Hyper_Cardioid',
        'Omnidirectional',
        'Bidirectional',
        'Multi_Pattern',
        'Cardioid_Omnidirectional',
        'Cardioid_Bidirectional',
        'Cardioid_Omnidirectional_Bidirectional',
        'Cardioid_Omnidirectional_Bidirectional_Stereo',
      ]
    >;
    popFilter: Schema.Attribute.Enumeration<
      ['None', 'Built_In', 'Included_External', 'Sold_Separately']
    >;
    product: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
    publishedAt: Schema.Attribute.DateTime;
    rgb: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    rgbZones: Schema.Attribute.Enumeration<
      ['None', 'Mic_Body', 'Mute_Button', 'Base', 'Full_Body', 'Customizable']
    >;
    sampleRate: Schema.Attribute.Enumeration<
      [
        'kHz_44_1',
        'kHz_48',
        'kHz_96',
        'kHz_192',
        'kHz_44_1_48',
        'kHz_48_96',
        'kHz_48_96_192',
      ]
    >;
    sensitivity: Schema.Attribute.Enumeration<
      [
        'dBV_Minus_60',
        'dBV_Minus_55',
        'dBV_Minus_50',
        'dBV_Minus_47',
        'dBV_Minus_45',
        'dBV_Minus_42',
        'dBV_Minus_40',
        'dBV_Minus_38',
        'dBV_Minus_37',
        'dBV_Minus_36',
        'dBV_Minus_35',
        'dBV_Minus_34',
        'dBV_Minus_32',
      ]
    >;
    series: Schema.Attribute.Enumeration<
      [
        'SM_Series',
        'MV_Series',
        'Motiv',
        'NT_USB',
        'NT_USB_Mini',
        'PodMic',
        'VideoMic',
        'Yeti',
        'Yeti_X',
        'Yeti_Nano',
        'Snowball',
        'Snowball_Ice',
        'Wave',
        'Wave_DX',
        'QuadCast',
        'QuadCast_S',
        'SoloCast',
        'DuoCast',
        'Seiren',
        'Seiren_Mini',
        'Seiren_V2',
        'Seiren_Elite',
        'Seiren_BT',
        'Virtuoso',
        'Blue_Voice',
        'G_Series',
        'Alias',
        'ROG_Carnyx',
        'ROG_Strix',
        'TUF_Gaming',
        'Fox',
        'Capsule',
        'AT2020',
        'AT2035',
        'AT2040',
        'AT4040',
        'Quantum_Stream',
        'SL_Series',
        'B_Series',
        'Revelator',
        'PD_Series',
        'Scarlett',
        'GoXLR',
      ]
    >;
    shockMount: Schema.Attribute.Enumeration<
      ['None', 'Built_In', 'Included_External', 'Sold_Separately']
    >;
    software: Schema.Attribute.Enumeration<
      [
        'None',
        'Shure_Motiv',
        'Shure_Plus_Motiv',
        'Rode_Central',
        'Rode_Connect',
        'Blue_Voice',
        'Elgato_Wave_Link',
        'HyperX_NGENUITY',
        'Razer_Synapse',
        'Corsair_iCUE',
        'Logitech_G_Hub',
        'SteelSeries_GG',
        'ASUS_Armoury_Crate',
        'NZXT_CAM',
        'JBL_QuantumENGINE',
      ]
    >;
    type: Schema.Attribute.Enumeration<
      ['USB', 'XLR', 'USB_XLR', 'Wireless', 'USB_C', 'Lightning']
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    weight: Schema.Attribute.Enumeration<
      [
        'g_Under_200',
        'g_200_300',
        'g_300_400',
        'g_400_500',
        'g_500_600',
        'g_600_800',
        'g_Over_800',
      ]
    >;
    zeroLatencyMonitoring: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface ApiModuleModule extends Struct.CollectionTypeSchema {
  collectionName: 'modules';
  info: {
    displayName: 'Module';
    pluralName: 'modules';
    singularName: 'module';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    category: Schema.Attribute.Enumeration<['page', 'feature', 'system']>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    enabled: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    icon: Schema.Attribute.String & Schema.Attribute.DefaultTo<' \uD83D\uDCE6'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::module.module'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<100>;
    position: Schema.Attribute.Enumeration<
      [
        'home',
        'header',
        'footer',
        'sidebar',
        'product-page',
        'cart-page',
        'checkout',
        'account',
        'global',
      ]
    >;
    publishedAt: Schema.Attribute.DateTime;
    requiredModules: Schema.Attribute.String;
    settings: Schema.Attribute.JSON;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiMonitorSpecificationMonitorSpecification
  extends Struct.CollectionTypeSchema {
  collectionName: 'monitor_specifications';
  info: {
    displayName: 'Monitor Specification';
    pluralName: 'monitor-specifications';
    singularName: 'monitor-specification';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    adaptiveSync: Schema.Attribute.Enumeration<
      [
        'None',
        'AMD_FreeSync',
        'AMD_FreeSync_Premium',
        'AMD_FreeSync_Premium_Pro',
        'NVIDIA_G_Sync_Compatible',
        'NVIDIA_G_Sync',
        'NVIDIA_G_Sync_Ultimate',
        'Adaptive_Sync',
        'VRR',
      ]
    >;
    aspectRatio: Schema.Attribute.Enumeration<
      [
        'Ratio_16_9',
        'Ratio_16_10',
        'Ratio_21_9',
        'Ratio_32_9',
        'Ratio_32_10',
        'Ratio_4_3',
      ]
    >;
    audioOutput: Schema.Attribute.Enumeration<
      ['None', 'Headphone_Jack', 'Line_Out', 'Headphone_Line_Out']
    >;
    backlightType: Schema.Attribute.Enumeration<
      ['LED', 'WLED', 'Mini_LED', 'QD_LED', 'OLED', 'Dual_Layer_LED']
    >;
    blackEquializer: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    bluelightFilter: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    brightness: Schema.Attribute.Enumeration<
      [
        'Nits_250',
        'Nits_300',
        'Nits_350',
        'Nits_400',
        'Nits_450',
        'Nits_500',
        'Nits_600',
        'Nits_800',
        'Nits_1000',
        'Nits_1300',
        'Nits_1400',
        'Nits_1600',
      ]
    >;
    builtInSpeakers: Schema.Attribute.Enumeration<
      [
        'None',
        'W_2x1',
        'W_2x2',
        'W_2x3',
        'W_2x5',
        'W_2x7',
        'W_2x10',
        'Soundbar',
      ]
    >;
    coating: Schema.Attribute.Enumeration<
      ['Matte', 'Glossy', 'Semi_Glossy', 'Anti_Glare', 'Nano_Texture']
    >;
    colorDepth: Schema.Attribute.Enumeration<
      [
        'Bit_6',
        'Bit_8',
        'Bit_8_Plus_FRC',
        'Bit_10',
        'Bit_10_Plus_FRC',
        'Bit_12',
      ]
    >;
    colorGamut: Schema.Attribute.Enumeration<
      [
        'sRGB_95',
        'sRGB_99',
        'sRGB_100',
        'sRGB_125',
        'sRGB_150',
        'DCI_P3_90',
        'DCI_P3_95',
        'DCI_P3_98',
        'DCI_P3_99',
        'DCI_P3_100',
        'Adobe_RGB_95',
        'Adobe_RGB_99',
        'Adobe_RGB_100',
      ]
    >;
    contrast: Schema.Attribute.Enumeration<
      [
        'Contrast_1000_1',
        'Contrast_1500_1',
        'Contrast_2500_1',
        'Contrast_3000_1',
        'Contrast_4000_1',
        'Contrast_5000_1',
        'Contrast_1000000_1',
        'Contrast_Infinite',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    crosshairOverlay: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    curvature: Schema.Attribute.Enumeration<
      [
        'Flat',
        'Curved_1000R',
        'Curved_1200R',
        'Curved_1500R',
        'Curved_1800R',
        'Curved_2300R',
        'Curved_3000R',
        'Curved_4000R',
      ]
    >;
    deltaE: Schema.Attribute.Enumeration<
      [
        'Delta_E_Under_1',
        'Delta_E_Under_2',
        'Delta_E_Under_3',
        'Delta_E_3_5',
        'Delta_E_Over_5',
        'Factory_Calibrated',
      ]
    >;
    displayPortCount: Schema.Attribute.Enumeration<
      ['Ports_0', 'Ports_1', 'Ports_2', 'Ports_3']
    >;
    displayPortVersion: Schema.Attribute.Enumeration<
      ['None', 'DP_1_2', 'DP_1_4', 'DP_2_0', 'DP_2_1']
    >;
    energyRating: Schema.Attribute.Enumeration<
      ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    >;
    flickerFree: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    fpsCounter: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    hdmiCount: Schema.Attribute.Enumeration<
      ['Ports_0', 'Ports_1', 'Ports_2', 'Ports_3', 'Ports_4']
    >;
    hdmiVersion: Schema.Attribute.Enumeration<
      ['None', 'HDMI_1_4', 'HDMI_2_0', 'HDMI_2_1']
    >;
    hdrSupport: Schema.Attribute.Enumeration<
      [
        'None',
        'HDR10',
        'HDR10_Plus',
        'HDR400',
        'HDR600',
        'HDR1000',
        'HDR1400',
        'Dolby_Vision',
        'DisplayHDR_True_Black_400',
        'DisplayHDR_True_Black_500',
      ]
    >;
    heightAdjustment: Schema.Attribute.Enumeration<
      ['None', 'mm_100', 'mm_120', 'mm_130', 'mm_150', 'mm_180']
    >;
    kvm: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    localDimmingZones: Schema.Attribute.Enumeration<
      [
        'None',
        'Zones_16',
        'Zones_32',
        'Zones_64',
        'Zones_128',
        'Zones_256',
        'Zones_512',
        'Zones_576',
        'Zones_1024',
        'Zones_1152',
        'Zones_2048',
        'Zones_2304',
        'Per_Pixel',
      ]
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::monitor-specification.monitor-specification'
    > &
      Schema.Attribute.Private;
    manufacturer: Schema.Attribute.Enumeration<
      [
        'ASUS',
        'MSI',
        'Acer',
        'LG',
        'Samsung',
        'Dell',
        'BenQ',
        'ViewSonic',
        'AOC',
        'Gigabyte',
        'Philips',
        'HP',
        'Corsair',
        'Razer',
        'Lenovo',
        'NZXT',
        'Cooler_Master',
        'Eve',
        'Nixeus',
        'Xiaomi',
        'Huawei',
        'Innocn',
        'KTC',
        'KOORUI',
        'Titan_Army',
      ]
    >;
    motionBlurReduction: Schema.Attribute.Enumeration<
      [
        'None',
        'ELMB',
        'ELMB_Sync',
        'DyAc',
        'DyAc_Plus',
        'ULMB',
        'ULMB_2',
        'Blur_Busters_Approved',
        'MBR',
      ]
    >;
    osd: Schema.Attribute.Enumeration<
      ['Physical_Buttons', 'Joystick', 'Touch_Sensitive', 'Remote']
    >;
    panelType: Schema.Attribute.Enumeration<
      [
        'IPS',
        'VA',
        'TN',
        'OLED',
        'QD_OLED',
        'Mini_LED',
        'Nano_IPS',
        'Fast_IPS',
        'Rapid_IPS',
        'IPS_Black',
        'AHVA',
      ]
    >;
    pbp: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    pip: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    pivot: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    powerConsumption: Schema.Attribute.Enumeration<
      [
        'W_Under_20',
        'W_20_30',
        'W_30_40',
        'W_40_50',
        'W_50_75',
        'W_75_100',
        'W_100_150',
        'W_150_200',
        'W_Over_200',
      ]
    >;
    product: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
    publishedAt: Schema.Attribute.DateTime;
    refreshRate: Schema.Attribute.Enumeration<
      [
        'Hz_60',
        'Hz_75',
        'Hz_100',
        'Hz_120',
        'Hz_144',
        'Hz_165',
        'Hz_170',
        'Hz_175',
        'Hz_180',
        'Hz_200',
        'Hz_240',
        'Hz_280',
        'Hz_300',
        'Hz_360',
        'Hz_390',
        'Hz_480',
        'Hz_500',
        'Hz_540',
        'Hz_600',
      ]
    >;
    resolution: Schema.Attribute.Enumeration<
      [
        'FHD_1920x1080',
        'FHD_Plus_1920x1200',
        'WFHD_2560x1080',
        'QHD_2560x1440',
        'QHD_Plus_2560x1600',
        'WQHD_3440x1440',
        'WQHD_Plus_3840x1600',
        'UHD_4K_3840x2160',
        'UHD_4K_Plus_3840x2400',
        'DQHD_5120x1440',
        'UHD_5K_5120x2160',
        'UHD_5K_5120x2880',
        'UHD_8K_7680x4320',
      ]
    >;
    responseTime: Schema.Attribute.Enumeration<
      [
        'ms_0_03',
        'ms_0_1',
        'ms_0_2',
        'ms_0_3',
        'ms_0_5',
        'ms_1',
        'ms_2',
        'ms_3',
        'ms_4',
        'ms_5',
        'ms_8',
      ]
    >;
    rgb: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    screenSize: Schema.Attribute.Enumeration<
      [
        'Inch_21_5',
        'Inch_23_8',
        'Inch_24',
        'Inch_24_5',
        'Inch_25',
        'Inch_27',
        'Inch_28',
        'Inch_31_5',
        'Inch_32',
        'Inch_34',
        'Inch_37_5',
        'Inch_38',
        'Inch_42',
        'Inch_43',
        'Inch_45',
        'Inch_48',
        'Inch_49',
        'Inch_55',
        'Inch_57',
      ]
    >;
    series: Schema.Attribute.Enumeration<
      [
        'ROG_Swift',
        'ROG_Strix',
        'TUF_Gaming',
        'ProArt',
        'ZenScreen',
        'MAG',
        'MPG',
        'MEG',
        'Optix',
        'Predator',
        'Nitro',
        'VG_Series',
        'UltraGear',
        'Odyssey',
        'ViewFinity',
        'Alienware',
        'UltraSharp',
        'Dell_S_Series',
        'Dell_G_Series',
        'Zowie',
        'Mobiuz',
        'EX_Series',
        'EW_Series',
        'XG_Series',
        'VX_Series',
        'Elite',
        'VP_Series',
        'AORUS',
        'M_Series',
        'Gaming_Series',
        'Evnia',
        'Momentum',
        'Omen',
        'Xeneon',
        'Raptor',
        'ThinkVision',
        'Legion',
        'Canvas',
      ]
    >;
    software: Schema.Attribute.Enumeration<
      [
        'None',
        'ASUS_DisplayWidget',
        'MSI_Gaming_OSD',
        'LG_OnScreen_Control',
        'Samsung_Easy_Setting_Box',
        'Dell_Display_Manager',
        'BenQ_Display_Pilot',
        'Acer_Display_Widget',
        'Gigabyte_OSD_Sidekick',
        'AOC_G_Menu',
      ]
    >;
    standAdjustment: Schema.Attribute.Enumeration<
      [
        'Tilt_Only',
        'Tilt_Height',
        'Tilt_Swivel',
        'Tilt_Swivel_Height',
        'Tilt_Swivel_Pivot_Height',
        'No_Stand',
      ]
    >;
    swivel: Schema.Attribute.Enumeration<
      ['None', 'Deg_15', 'Deg_20', 'Deg_30', 'Deg_45', 'Deg_60', 'Deg_90']
    >;
    tilt: Schema.Attribute.Enumeration<
      ['Deg_5_15', 'Deg_5_20', 'Deg_5_23', 'Deg_5_25', 'Deg_5_35']
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    usbCDisplayPort: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    usbCPowerDelivery: Schema.Attribute.Enumeration<
      ['None', 'W_15', 'W_45', 'W_65', 'W_90', 'W_96', 'W_100', 'W_140']
    >;
    usbHub: Schema.Attribute.Enumeration<
      [
        'None',
        'USB_2_0_x2',
        'USB_2_0_x4',
        'USB_3_0_x2',
        'USB_3_0_x4',
        'USB_3_2_x2',
        'USB_3_2_x4',
      ]
    >;
    vesaMount: Schema.Attribute.Enumeration<
      ['None', 'VESA_75x75', 'VESA_100x100', 'VESA_200x200', 'VESA_300x300']
    >;
  };
}

export interface ApiMotherboardSpecificationMotherboardSpecification
  extends Struct.CollectionTypeSchema {
  collectionName: 'motherboard_specifications';
  info: {
    displayName: 'Motherboard Specification';
    pluralName: 'motherboard-specifications';
    singularName: 'motherboard-specification';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    argbHeaders: Schema.Attribute.Enumeration<
      [
        'Headers_0',
        'Headers_1',
        'Headers_2',
        'Headers_3',
        'Headers_4',
        'Headers_5',
        'Headers_6',
      ]
    >;
    audioChannels: Schema.Attribute.Enumeration<
      ['Audio_2_1', 'Audio_5_1', 'Audio_7_1']
    >;
    audioChipset: Schema.Attribute.Enumeration<
      [
        'Realtek_ALC887',
        'Realtek_ALC892',
        'Realtek_ALC897',
        'Realtek_ALC1150',
        'Realtek_ALC1200',
        'Realtek_ALC1220',
        'Realtek_ALC4080',
        'Realtek_ALC4082',
        'ROG_SupremeFX',
        'Nahimic',
        'Sound_BlasterX',
        'ESS_Sabre',
      ]
    >;
    biosFlashback: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    bluetooth: Schema.Attribute.Enumeration<
      ['None', 'BT_4_2', 'BT_5_0', 'BT_5_1', 'BT_5_2', 'BT_5_3', 'BT_5_4']
    >;
    chipset: Schema.Attribute.Enumeration<
      [
        'X870E',
        'X870',
        'X670E',
        'X670',
        'B850',
        'B650E',
        'B650',
        'A620',
        'X570',
        'B550',
        'A520',
        'X470',
        'B450',
        'Z890',
        'Z790',
        'B760',
        'H770',
        'Z690',
        'B660',
        'H670',
        'H610',
        'Z590',
        'B560',
        'H570',
        'Z490',
        'B460',
        'H470',
        'W790',
        'X299',
        'TRX40',
        'WRX80',
        'WRX90',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    dualBios: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    fanHeaders: Schema.Attribute.Enumeration<
      [
        'Headers_2',
        'Headers_3',
        'Headers_4',
        'Headers_5',
        'Headers_6',
        'Headers_7',
        'Headers_8',
        'Headers_10',
        'Headers_12',
      ]
    >;
    formFactor: Schema.Attribute.Enumeration<
      [
        'E_ATX',
        'ATX',
        'Micro_ATX',
        'Mini_ITX',
        'Mini_DTX',
        'SSI_CEB',
        'SSI_EEB',
      ]
    >;
    internalUSBHeaders: Schema.Attribute.Enumeration<
      ['Headers_0', 'Headers_1', 'Headers_2', 'Headers_3', 'Headers_4']
    >;
    lan: Schema.Attribute.Enumeration<
      [
        'LAN_1Gbps',
        'LAN_2_5Gbps',
        'LAN_5Gbps',
        'LAN_10Gbps',
        'LAN_Dual_1Gbps',
        'LAN_Dual_2_5Gbps',
        'LAN_1Gbps_Plus_2_5Gbps',
        'LAN_2_5Gbps_Plus_10Gbps',
      ]
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::motherboard-specification.motherboard-specification'
    > &
      Schema.Attribute.Private;
    m2NvmeGen4: Schema.Attribute.Enumeration<
      ['Slots_0', 'Slots_1', 'Slots_2', 'Slots_3', 'Slots_4']
    >;
    m2NvmeGen5: Schema.Attribute.Enumeration<
      ['Slots_0', 'Slots_1', 'Slots_2', 'Slots_3', 'Slots_4']
    >;
    m2Slots: Schema.Attribute.Enumeration<
      [
        'Slots_0',
        'Slots_1',
        'Slots_2',
        'Slots_3',
        'Slots_4',
        'Slots_5',
        'Slots_6',
      ]
    >;
    manufacturer: Schema.Attribute.Enumeration<
      [
        'ASUS',
        'MSI',
        'Gigabyte',
        'ASRock',
        'EVGA',
        'NZXT',
        'Biostar',
        'Supermicro',
      ]
    >;
    maxMemory: Schema.Attribute.Enumeration<
      [
        'RAM_32GB',
        'RAM_64GB',
        'RAM_128GB',
        'RAM_192GB',
        'RAM_256GB',
        'RAM_512GB',
        'RAM_1TB',
        'RAM_2TB',
      ]
    >;
    maxMemorySpeed: Schema.Attribute.Enumeration<
      [
        'MTs_2666',
        'MTs_2933',
        'MTs_3200',
        'MTs_3600',
        'MTs_4000',
        'MTs_4400',
        'MTs_4800',
        'MTs_5200',
        'MTs_5600',
        'MTs_6000',
        'MTs_6400',
        'MTs_6800',
        'MTs_7200',
        'MTs_7600',
        'MTs_8000',
        'MTs_8200',
        'MTs_8400',
        'MTs_8600',
        'MTs_8800',
        'MTs_9000',
      ]
    >;
    memorySlot: Schema.Attribute.Enumeration<['Slots_2', 'Slots_4', 'Slots_8']>;
    memoryType: Schema.Attribute.Enumeration<['DDR4', 'DDR5']>;
    pcieVersion: Schema.Attribute.Enumeration<
      ['PCIe_3_0', 'PCIe_4_0', 'PCIe_5_0']
    >;
    pcieX16Slots: Schema.Attribute.Enumeration<
      ['Slots_0', 'Slots_1', 'Slots_2', 'Slots_3', 'Slots_4']
    >;
    pcieX1Slots: Schema.Attribute.Enumeration<
      ['Slots_0', 'Slots_1', 'Slots_2', 'Slots_3', 'Slots_4']
    >;
    pcieX4Slots: Schema.Attribute.Enumeration<
      ['Slots_0', 'Slots_1', 'Slots_2', 'Slots_3', 'Slots_4']
    >;
    postDisplay: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    product: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
    publishedAt: Schema.Attribute.DateTime;
    rgb: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    rgbHeaders: Schema.Attribute.Enumeration<
      [
        'Headers_0',
        'Headers_1',
        'Headers_2',
        'Headers_3',
        'Headers_4',
        'Headers_5',
        'Headers_6',
      ]
    >;
    sataConnectors: Schema.Attribute.Enumeration<
      ['SATA_0', 'SATA_2', 'SATA_4', 'SATA_6', 'SATA_8', 'SATA_10', 'SATA_12']
    >;
    socket: Schema.Attribute.Enumeration<
      [
        'AM4',
        'AM5',
        'LGA1700',
        'LGA1200',
        'LGA1151',
        'LGA2066',
        'sTRX4',
        'sWRX8',
        'TR4',
        'SP5',
        'SP3',
        'LGA1851',
      ]
    >;
    thunderbolt: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    usb20: Schema.Attribute.Enumeration<
      ['Ports_0', 'Ports_2', 'Ports_4', 'Ports_6']
    >;
    usb32Gen1: Schema.Attribute.Enumeration<
      [
        'Ports_0',
        'Ports_1',
        'Ports_2',
        'Ports_3',
        'Ports_4',
        'Ports_5',
        'Ports_6',
        'Ports_8',
        'Ports_10',
      ]
    >;
    usb32Gen2: Schema.Attribute.Enumeration<
      [
        'Ports_0',
        'Ports_1',
        'Ports_2',
        'Ports_3',
        'Ports_4',
        'Ports_5',
        'Ports_6',
      ]
    >;
    usb32Gen2x2: Schema.Attribute.Enumeration<
      ['Ports_0', 'Ports_1', 'Ports_2', 'Ports_3', 'Ports_4']
    >;
    usbTypeC: Schema.Attribute.Enumeration<
      ['Ports_0', 'Ports_1', 'Ports_2', 'Ports_3', 'Ports_4']
    >;
    wifi: Schema.Attribute.Enumeration<
      ['None', 'WiFi_5', 'WiFi_6', 'WiFi_6E', 'WiFi_7']
    >;
  };
}

export interface ApiMouseSpecificationMouseSpecification
  extends Struct.CollectionTypeSchema {
  collectionName: 'mouse_specifications';
  info: {
    displayName: 'Mouse Specification';
    pluralName: 'mouse-specifications';
    singularName: 'mouse-specification';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    batteryLife: Schema.Attribute.Enumeration<
      [
        'Not_Applicable',
        'Hours_30',
        'Hours_50',
        'Hours_60',
        'Hours_70',
        'Hours_80',
        'Hours_90',
        'Hours_100',
        'Hours_140',
        'Hours_200',
        'Hours_300',
        'Hours_400',
        'Hours_500',
      ]
    >;
    batteryType: Schema.Attribute.Enumeration<
      ['Not_Applicable', 'Built_In_Rechargeable', 'AA_Battery', 'AAA_Battery']
    >;
    buttons: Schema.Attribute.Enumeration<
      [
        'Buttons_4',
        'Buttons_5',
        'Buttons_6',
        'Buttons_7',
        'Buttons_8',
        'Buttons_9',
        'Buttons_10',
        'Buttons_11',
        'Buttons_12',
        'Buttons_20',
      ]
    >;
    cableLength: Schema.Attribute.Enumeration<
      ['m_1_5', 'm_1_8', 'm_2_0', 'm_2_1', 'm_2_5']
    >;
    cableType: Schema.Attribute.Enumeration<
      [
        'Fixed_Rubber',
        'Fixed_Braided',
        'Paracord',
        'Detachable_Rubber',
        'Detachable_Braided',
        'Detachable_Paracord',
        'Speedflex',
        'Ultraweave',
      ]
    >;
    chargingMethod: Schema.Attribute.Enumeration<
      [
        'Not_Applicable',
        'USB_C',
        'Micro_USB',
        'Wireless_Charging',
        'Dock',
        'USB_C_Wireless',
        'USB_C_Dock',
      ]
    >;
    coating: Schema.Attribute.Enumeration<
      ['Matte', 'Glossy', 'Rubberized', 'Textured', 'Grip_Tape', 'UV_Coating']
    >;
    connectivity: Schema.Attribute.Enumeration<
      [
        'Wired_USB',
        'Wireless_2_4GHz',
        'Bluetooth',
        'Wired_Wireless_2_4GHz',
        'Wired_Bluetooth',
        'Wireless_2_4GHz_Bluetooth',
        'Wired_Wireless_2_4GHz_Bluetooth',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    dpi: Schema.Attribute.Enumeration<
      [
        'DPI_8000',
        'DPI_10000',
        'DPI_12000',
        'DPI_16000',
        'DPI_18000',
        'DPI_20000',
        'DPI_25000',
        'DPI_25600',
        'DPI_26000',
        'DPI_30000',
        'DPI_32000',
        'DPI_35000',
        'DPI_42000',
      ]
    >;
    dpiButton: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    feetMaterial: Schema.Attribute.Enumeration<
      [
        'PTFE',
        'Virgin_PTFE',
        'Glass',
        'Ceramic',
        'Sapphire',
        'Tiger_ICE',
        'Corepadz',
        'Superglides',
      ]
    >;
    gripStyle: Schema.Attribute.Enumeration<
      ['Palm', 'Claw', 'Fingertip', 'Palm_Claw', 'Claw_Fingertip', 'All_Grips']
    >;
    handOrientation: Schema.Attribute.Enumeration<
      ['Right_Handed', 'Left_Handed', 'Ambidextrous']
    >;
    height: Schema.Attribute.Enumeration<
      [
        'mm_Under_35',
        'mm_35_38',
        'mm_38_40',
        'mm_40_42',
        'mm_42_45',
        'mm_Over_45',
      ]
    >;
    length: Schema.Attribute.Enumeration<
      [
        'mm_Under_110',
        'mm_110_115',
        'mm_115_120',
        'mm_120_125',
        'mm_125_130',
        'mm_Over_130',
      ]
    >;
    liftOffDistance: Schema.Attribute.Enumeration<
      ['mm_1_0', 'mm_1_5', 'mm_2_0', 'mm_3_0', 'Adjustable']
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::mouse-specification.mouse-specification'
    > &
      Schema.Attribute.Private;
    mainSwitches: Schema.Attribute.Enumeration<
      [
        'Omron_20M',
        'Omron_50M',
        'Omron_60M',
        'Omron_70M',
        'Kailh_GM_4_0',
        'Kailh_GM_8_0',
        'Razer_Optical_Gen_2',
        'Razer_Optical_Gen_3',
        'Huano_Blue_Shell',
        'Huano_Pink_Dot',
        'TTC_Gold',
        'LK_Optical',
        'Zippy_DF3_P1',
        'Optical_Switches',
        'Custom_Mechanical',
      ]
    >;
    manufacturer: Schema.Attribute.Enumeration<
      [
        'Logitech',
        'Razer',
        'Corsair',
        'SteelSeries',
        'HyperX',
        'ASUS_ROG',
        'Zowie',
        'Pulsar',
        'Lamzu',
        'Finalmouse',
        'Glorious',
        'Roccat',
        'Cooler_Master',
        'MSI',
        'Gigabyte',
        'Endgame_Gear',
        'Vaxee',
        'Ninjutso',
        'Xtrfy',
        'G_Wolves',
        'Fantech',
        'Bloody',
        'VIPER',
        'Lethal_Gaming_Gear',
        'Deathadder',
        'Mountain',
        'Fnatic',
        'Zaunkoenig',
        'Rainy',
        'WLMouse',
      ]
    >;
    maxAcceleration: Schema.Attribute.Enumeration<
      ['G_35', 'G_40', 'G_50', 'G_60', 'G_70', 'G_80', 'G_100']
    >;
    maxSpeed: Schema.Attribute.Enumeration<
      [
        'IPS_300',
        'IPS_400',
        'IPS_450',
        'IPS_500',
        'IPS_550',
        'IPS_650',
        'IPS_750',
        'IPS_850',
      ]
    >;
    onboardMemory: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    onboardProfiles: Schema.Attribute.Enumeration<
      ['None', 'Profiles_1', 'Profiles_3', 'Profiles_5', 'Profiles_Unlimited']
    >;
    pollingRate: Schema.Attribute.Enumeration<
      ['Hz_125', 'Hz_250', 'Hz_500', 'Hz_1000', 'Hz_2000', 'Hz_4000', 'Hz_8000']
    >;
    product: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
    publishedAt: Schema.Attribute.DateTime;
    rgb: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    rgbZones: Schema.Attribute.Enumeration<
      ['None', 'Logo', 'Scroll_Wheel', 'Logo_Scroll', 'Underglow', 'Full_Body']
    >;
    scrollWheel: Schema.Attribute.Enumeration<
      [
        'Standard',
        'Notched',
        'Smooth',
        'Tilt',
        'Infinite_Scroll',
        'MagSpeed',
        'Dual_Mode',
      ]
    >;
    sensorModel: Schema.Attribute.Enumeration<
      [
        'PixArt_PAW3395',
        'PixArt_PAW3399',
        'PixArt_PAW3370',
        'PixArt_PAW3359',
        'PixArt_PAW3335',
        'PixArt_PAW3327',
        'PixArt_PAW3311',
        'PixArt_PMW3360',
        'PixArt_PMW3389',
        'PixArt_PMW3366',
        'Logitech_Hero_25K',
        'Logitech_Hero_2',
        'Razer_Focus_Pro_30K',
        'Razer_Focus_Plus_26K',
        'SteelSeries_TrueMove_Pro',
        'SteelSeries_TrueMove_Air',
        'Corsair_Marksman',
        'ASUS_AimPoint_Pro',
        'Finalmouse_Finalsensor',
        'Custom_Sensor',
      ]
    >;
    sensorType: Schema.Attribute.Enumeration<
      [
        'Optical',
        'Laser',
        'Hero_Optical',
        'Focus_Pro',
        'Razer_Focus_Pro',
        'PixArt',
        'Custom',
      ]
    >;
    shape: Schema.Attribute.Enumeration<
      [
        'Ergonomic',
        'Symmetrical',
        'Ergonomic_Large',
        'Ergonomic_Medium',
        'Ergonomic_Small',
        'Symmetrical_Large',
        'Symmetrical_Medium',
        'Symmetrical_Small',
      ]
    >;
    shellMaterial: Schema.Attribute.Enumeration<
      [
        'Plastic_ABS',
        'Plastic_PBT',
        'Magnesium_Alloy',
        'Carbon_Fiber',
        'Honeycomb_Plastic',
        'Recycled_Plastic',
      ]
    >;
    sideButtons: Schema.Attribute.Enumeration<
      ['None', 'Buttons_1', 'Buttons_2', 'Buttons_3', 'Buttons_6', 'Buttons_12']
    >;
    software: Schema.Attribute.Enumeration<
      [
        'None',
        'Logitech_G_Hub',
        'Razer_Synapse',
        'Corsair_iCUE',
        'SteelSeries_GG',
        'HyperX_NGENUITY',
        'ASUS_Armoury_Crate',
        'Glorious_Core',
        'Roccat_Swarm',
        'Cooler_Master_Portal',
        'Pulsar_Fusion',
        'Lamzu_Atlantis',
        'Endgame_Gear_Config',
      ]
    >;
    switchLifespan: Schema.Attribute.Enumeration<
      [
        'Clicks_20M',
        'Clicks_50M',
        'Clicks_60M',
        'Clicks_70M',
        'Clicks_80M',
        'Clicks_90M',
        'Clicks_100M',
      ]
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    weight: Schema.Attribute.Enumeration<
      [
        'g_Under_50',
        'g_50_55',
        'g_55_60',
        'g_60_65',
        'g_65_70',
        'g_70_75',
        'g_75_80',
        'g_80_85',
        'g_85_90',
        'g_90_100',
        'g_100_110',
        'g_Over_110',
      ]
    >;
    weightTuning: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    width: Schema.Attribute.Enumeration<
      ['mm_Under_55', 'mm_55_60', 'mm_60_65', 'mm_65_70', 'mm_Over_70']
    >;
  };
}

export interface ApiMousepadSpecificationMousepadSpecification
  extends Struct.CollectionTypeSchema {
  collectionName: 'mousepad_specifications';
  info: {
    displayName: 'Mousepad Specification';
    pluralName: 'mousepad-specifications';
    singularName: 'mousepad-specification';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    baseMaterial: Schema.Attribute.Enumeration<
      [
        'Rubber',
        'Natural_Rubber',
        'Silicone',
        'Foam',
        'Poron',
        'Non_Slip_Rubber',
        'Anti_Slip_Coating',
      ]
    >;
    cableManagement: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    glide: Schema.Attribute.Enumeration<
      ['Low_Friction', 'Medium_Friction', 'High_Friction', 'Adjustable']
    >;
    humidityResistant: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    length: Schema.Attribute.Enumeration<
      [
        'mm_Under_300',
        'mm_300_350',
        'mm_350_400',
        'mm_400_450',
        'mm_450_500',
        'mm_500_600',
        'mm_600_700',
        'mm_700_800',
        'mm_800_900',
        'mm_900_1000',
        'mm_Over_1000',
      ]
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::mousepad-specification.mousepad-specification'
    > &
      Schema.Attribute.Private;
    manufacturer: Schema.Attribute.Enumeration<
      [
        'Logitech',
        'Razer',
        'Corsair',
        'SteelSeries',
        'HyperX',
        'ASUS',
        'Zowie',
        'Pulsar',
        'Artisan',
        'Lethal_Gaming_Gear',
        'Glorious',
        'Roccat',
        'Cooler_Master',
        'MSI',
        'Gigabyte',
        'Endgame_Gear',
        'Xtrfy',
        'X_Raypad',
        'Fnatic',
        'Vaxee',
        'Mad_Catz',
        'Cougar',
        'NZXT',
        'Thermaltake',
        'Skypad',
        'Esports_Tiger',
        'Aqua_Control',
        'Dream_Machines',
      ]
    >;
    product: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
    publishedAt: Schema.Attribute.DateTime;
    rgb: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    rgbConnector: Schema.Attribute.Enumeration<
      ['Not_Applicable', 'USB_A', 'USB_C', 'Micro_USB']
    >;
    rgbZones: Schema.Attribute.Enumeration<
      ['None', 'Perimeter', 'Multi_Zone', 'Full_Surface']
    >;
    series: Schema.Attribute.Enumeration<
      [
        'G_Series',
        'PowerPlay',
        'Goliathus',
        'Strider',
        'Firefly',
        'Gigantus',
        'Sphex',
        'MM_Series',
        'QcK',
        'QcK_Edge',
        'QcK_Heavy',
        'QcK_Prism',
        'Fury_S',
        'Fury_Ultra',
        'Pulsefire',
        'ROG_Sheath',
        'ROG_Scabbard',
        'ROG_Balteus',
        'ROG_Strix',
        'TUF_Gaming',
        'G_SR',
        'G_SR_SE',
        'P_TF',
        'PTF_X',
        'Superglide',
        'Hien',
        'Hayate',
        'Zero',
        'Raiden',
        'Otsu',
        'Saturn',
        'Venus',
        'Jupiter',
        'Mercury',
        'GP_Series',
        'GP_Perimeter',
        'Ice',
        'Hyper_Pad',
        'Agility',
        'GD_Series',
        'AORUS',
        'Storm',
        'Focus',
        'Dash',
        'Boost',
      ]
    >;
    size: Schema.Attribute.Enumeration<
      [
        'Small',
        'Medium',
        'Large',
        'XL',
        'XXL',
        'XXXL',
        'Extended',
        'Desk_Mat',
        'Custom',
      ]
    >;
    software: Schema.Attribute.Enumeration<
      [
        'None',
        'Logitech_G_Hub',
        'Razer_Synapse',
        'Corsair_iCUE',
        'SteelSeries_GG',
        'HyperX_NGENUITY',
        'ASUS_Armoury_Crate',
        'Roccat_Swarm',
        'Cooler_Master_Portal',
      ]
    >;
    stitchedEdges: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    stoppingPower: Schema.Attribute.Enumeration<
      ['Low', 'Medium', 'High', 'Very_High']
    >;
    surface: Schema.Attribute.Enumeration<
      [
        'Speed',
        'Control',
        'Balanced',
        'Speed_Control_Hybrid',
        'Textured',
        'Smooth',
        'Poron',
      ]
    >;
    surfaceMaterial: Schema.Attribute.Enumeration<
      [
        'Cloth',
        'Micro_Textured_Cloth',
        'Cordura_Fabric',
        'Polyester',
        'Nylon',
        'Hard_Polymer',
        'Glass',
        'Tempered_Glass',
        'Ceramic',
        'Hybrid_Weave',
        'Lycra',
      ]
    >;
    thickness: Schema.Attribute.Enumeration<
      ['mm_1', 'mm_2', 'mm_3', 'mm_4', 'mm_5', 'mm_6']
    >;
    type: Schema.Attribute.Enumeration<
      [
        'Soft_Cloth',
        'Hybrid',
        'Hard',
        'Glass',
        'Ceramic',
        'Cordura',
        'Silicone',
      ]
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    usbPassthrough: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    washable: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    waterResistant: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    width: Schema.Attribute.Enumeration<
      [
        'mm_Under_250',
        'mm_250_300',
        'mm_300_350',
        'mm_350_400',
        'mm_400_450',
        'mm_450_500',
        'mm_Over_500',
      ]
    >;
    wirelessCharging: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    wirelessChargingCompatibility: Schema.Attribute.Enumeration<
      [
        'Not_Applicable',
        'Logitech_PowerPlay',
        'Razer_HyperFlux',
        'Corsair_Qi',
        'Universal_Qi',
      ]
    >;
  };
}

export interface ApiNewsletterSubscriberNewsletterSubscriber
  extends Struct.CollectionTypeSchema {
  collectionName: 'newsletter_subscribers';
  info: {
    displayName: 'Newsletter Subscriber';
    pluralName: 'newsletter-subscribers';
    singularName: 'newsletter-subscriber';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    active: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::newsletter-subscriber.newsletter-subscriber'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    source: Schema.Attribute.String;
    subscribedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOrderOrder extends Struct.CollectionTypeSchema {
  collectionName: 'orders';
  info: {
    displayName: 'Order';
    pluralName: 'orders';
    singularName: 'order';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    invoice_client: Schema.Attribute.Relation<
      'oneToOne',
      'api::invoice-client.invoice-client'
    >;
    items: Schema.Attribute.JSON;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::order.order'> &
      Schema.Attribute.Private;
    notes: Schema.Attribute.Text;
    orderNumber: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    orderStatus: Schema.Attribute.Enumeration<
      ['pending', 'processing', 'shipped', 'delivered', 'cancelled']
    >;
    originalAmount: Schema.Attribute.Decimal;
    paymentMethod: Schema.Attribute.String;
    paymentStatus: Schema.Attribute.Enumeration<
      ['pending', 'paid', 'failed', 'refunded']
    >;
    promoCode: Schema.Attribute.String;
    promoDiscountAmount: Schema.Attribute.Decimal &
      Schema.Attribute.DefaultTo<0>;
    promoDiscountPercentage: Schema.Attribute.Decimal &
      Schema.Attribute.DefaultTo<0>;
    publishedAt: Schema.Attribute.DateTime;
    shippingAddress: Schema.Attribute.JSON;
    totalAmount: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users_permissions_user: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    wantsInvoice: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface ApiOrganisationDetailOrganisationDetail
  extends Struct.SingleTypeSchema {
  collectionName: 'organisation_details';
  info: {
    displayName: 'Organisation Details';
    pluralName: 'organisation-details';
    singularName: 'organisation-detail';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    address: Schema.Attribute.String & Schema.Attribute.Required;
    bankName: Schema.Attribute.String;
    bic: Schema.Attribute.String;
    city: Schema.Attribute.String & Schema.Attribute.Required;
    companyName: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    eik: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    iban: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::organisation-detail.organisation-detail'
    > &
      Schema.Attribute.Private;
    logo: Schema.Attribute.Media<'images'>;
    mol: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    postalCode: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    vatNumber: Schema.Attribute.String;
  };
}

export interface ApiPagePage extends Struct.CollectionTypeSchema {
  collectionName: 'pages';
  info: {
    displayName: 'Page';
    pluralName: 'pages';
    singularName: 'page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.RichText;
    contentBg: Schema.Attribute.RichText;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::page.page'> &
      Schema.Attribute.Private;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<''> & Schema.Attribute.Required;
    template: Schema.Attribute.Enumeration<
      ['default', 'contact', 'about', 'faq']
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleBg: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPcBuildTemplatePcBuildTemplate
  extends Struct.CollectionTypeSchema {
  collectionName: 'pc_build_templates';
  info: {
    displayName: 'pc build template';
    pluralName: 'pc-build-templates';
    singularName: 'pc-build-template';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    active: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    basePrice: Schema.Attribute.Decimal & Schema.Attribute.Required;
    build_component: Schema.Attribute.Relation<
      'manyToOne',
      'api::build-component.build-component'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    descriptionBg: Schema.Attribute.Text;
    gallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    image: Schema.Attribute.Media<'images'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::pc-build-template.pc-build-template'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    nameBg: Schema.Attribute.String & Schema.Attribute.Required;
    platform: Schema.Attribute.Enumeration<['AMD', 'Intel']>;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<'name'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiProductProduct extends Struct.CollectionTypeSchema {
  collectionName: 'products';
  info: {
    displayName: 'Product';
    pluralName: 'products';
    singularName: 'product';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    badge: Schema.Attribute.Enumeration<
      ['none', 'new', 'hot', 'sale', 'limited']
    >;
    brand: Schema.Attribute.Relation<'manyToOne', 'api::brand.brand'>;
    case_specification: Schema.Attribute.Relation<
      'oneToOne',
      'api::case-specification.case-specification'
    >;
    category: Schema.Attribute.Relation<'manyToOne', 'api::category.category'>;
    costPrice: Schema.Attribute.Decimal;
    cpu_specification: Schema.Attribute.Relation<
      'oneToOne',
      'api::cpu-specification.cpu-specification'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Blocks;
    descriptionBg: Schema.Attribute.Blocks;
    featured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    gallery: Schema.Attribute.Media<'images', true>;
    gpuSpecification: Schema.Attribute.Relation<
      'oneToOne',
      'api::gpu-specification.gpu-specification'
    >;
    headset_specification: Schema.Attribute.Relation<
      'oneToOne',
      'api::headset-specification.headset-specification'
    >;
    image: Schema.Attribute.Media<'images'>;
    isNew: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    keyboard_specification: Schema.Attribute.Relation<
      'oneToOne',
      'api::keyboard-specification.keyboard-specification'
    >;
    laptop_specification: Schema.Attribute.Relation<
      'oneToOne',
      'api::laptop-specification.laptop-specification'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::product.product'
    > &
      Schema.Attribute.Private;
    lowStockThreshold: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<5>;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.DefaultTo<'SEO'>;
    metaTitle: Schema.Attribute.String & Schema.Attribute.DefaultTo<'seo'>;
    microphone_specification: Schema.Attribute.Relation<
      'oneToOne',
      'api::microphone-specification.microphone-specification'
    >;
    monitor_specification: Schema.Attribute.Relation<
      'oneToOne',
      'api::monitor-specification.monitor-specification'
    >;
    motherboard_specification: Schema.Attribute.Relation<
      'oneToOne',
      'api::motherboard-specification.motherboard-specification'
    >;
    mouse_specification: Schema.Attribute.Relation<
      'oneToOne',
      'api::mouse-specification.mouse-specification'
    >;
    mousepad_specification: Schema.Attribute.Relation<
      'oneToOne',
      'api::mousepad-specification.mousepad-specification'
    >;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    nameBg: Schema.Attribute.String & Schema.Attribute.Required;
    oldPrice: Schema.Attribute.Decimal;
    onSale: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    price: Schema.Attribute.Decimal & Schema.Attribute.Required;
    Product: Schema.Attribute.Relation<'oneToMany', 'api::review.review'>;
    psu_specification: Schema.Attribute.Relation<
      'oneToOne',
      'api::psu-specification.psu-specification'
    >;
    publishedAt: Schema.Attribute.DateTime;
    ram_specification: Schema.Attribute.Relation<
      'oneToOne',
      'api::ram-specification.ram-specification'
    >;
    rating: Schema.Attribute.Decimal & Schema.Attribute.DefaultTo<0>;
    reviewCount: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    reviews: Schema.Attribute.Relation<'oneToMany', 'api::category.category'>;
    shortDescription: Schema.Attribute.Text;
    shortDescriptionBg: Schema.Attribute.String;
    sku: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    slug: Schema.Attribute.UID<'name'>;
    specifications: Schema.Attribute.JSON;
    stock: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    storage_specification: Schema.Attribute.Relation<
      'oneToOne',
      'api::storage-specification.storage-specification'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    webcam_specification: Schema.Attribute.Relation<
      'oneToOne',
      'api::webcam-specification.webcam-specification'
    >;
    weight: Schema.Attribute.Decimal;
  };
}

export interface ApiPromoCodePromoCode extends Struct.CollectionTypeSchema {
  collectionName: 'promo_codes';
  info: {
    displayName: 'Promo Code';
    pluralName: 'promo-codes';
    singularName: 'promo-code';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    discountPercentage: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 100;
          min: 0;
        },
        number
      >;
    expirationDate: Schema.Attribute.DateTime & Schema.Attribute.Required;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::promo-code.promo-code'
    > &
      Schema.Attribute.Private;
    minimumOrderAmount: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    usageLimit: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    usedCount: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
  };
}

export interface ApiPsuSpecificationPsuSpecification
  extends Struct.CollectionTypeSchema {
  collectionName: 'psu_specifications';
  info: {
    displayName: 'PSU Specification';
    pluralName: 'psu-specifications';
    singularName: 'psu-specification';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    atx30Compatible: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    atxConnector: Schema.Attribute.Enumeration<
      ['Pin_20', 'Pin_20_Plus_4', 'Pin_24']
    >;
    cableType: Schema.Attribute.Enumeration<
      [
        'Standard_Black',
        'Flat_Black',
        'Sleeved',
        'Individually_Sleeved',
        'Custom_CableMod',
        'Ribbon',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    efficiency: Schema.Attribute.Enumeration<
      [
        'Standard_80Plus',
        'Bronze_80Plus',
        'Silver_80Plus',
        'Gold_80Plus',
        'Platinum_80Plus',
        'Titanium_80Plus',
        'Cybenetics_Standard',
        'Cybenetics_Bronze',
        'Cybenetics_Silver',
        'Cybenetics_Gold',
        'Cybenetics_Platinum',
        'Cybenetics_Diamond',
      ]
    >;
    eps12VConnector: Schema.Attribute.Enumeration<
      [
        'EPS_None',
        'EPS_4pin',
        'EPS_8pin',
        'EPS_4_Plus_4pin',
        'EPS_8_Plus_4pin',
        'EPS_8_Plus_8pin',
        'EPS_8_Plus_8_Plus_4pin',
        'EPS_8_Plus_8_Plus_8pin',
      ]
    >;
    fanBearing: Schema.Attribute.Enumeration<
      [
        'Sleeve',
        'Rifle',
        'Hydraulic',
        'Fluid_Dynamic',
        'Magnetic_Levitation',
        'Double_Ball',
      ]
    >;
    fanSize: Schema.Attribute.Enumeration<
      ['Fan_80mm', 'Fan_92mm', 'Fan_120mm', 'Fan_135mm', 'Fan_140mm', 'Fanless']
    >;
    floppyConnector: Schema.Attribute.Enumeration<
      ['Connector_0', 'Connector_1', 'Connector_2']
    >;
    formFactor: Schema.Attribute.Enumeration<
      ['ATX', 'ATX_3_0', 'ATX_3_1', 'SFX', 'SFX_L', 'TFX', 'Flex_ATX', 'EPS']
    >;
    length: Schema.Attribute.Enumeration<
      [
        'Length_100mm',
        'Length_120mm',
        'Length_125mm',
        'Length_130mm',
        'Length_140mm',
        'Length_150mm',
        'Length_160mm',
        'Length_165mm',
        'Length_170mm',
        'Length_180mm',
        'Length_190mm',
        'Length_200mm',
        'Length_210mm',
        'Length_220mm',
        'Length_230mm',
      ]
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::psu-specification.psu-specification'
    > &
      Schema.Attribute.Private;
    manufacturer: Schema.Attribute.Enumeration<
      [
        'Corsair',
        'Seasonic',
        'EVGA',
        'be_quiet',
        'Cooler_Master',
        'Thermaltake',
        'NZXT',
        'MSI',
        'ASUS',
        'Gigabyte',
        'Silverstone',
        'Fractal_Design',
        'Lian_Li',
        'Super_Flower',
        'FSP',
        'Antec',
        'XPG',
        'Phanteks',
        'DeepCool',
        'Montech',
      ]
    >;
    modular: Schema.Attribute.Enumeration<
      ['Non_Modular', 'Semi_Modular', 'Fully_Modular']
    >;
    molexConnector: Schema.Attribute.Enumeration<
      [
        'Connector_0',
        'Connector_1',
        'Connector_2',
        'Connector_3',
        'Connector_4',
        'Connector_5',
        'Connector_6',
      ]
    >;
    pci6Plus2pinConnector: Schema.Attribute.Enumeration<
      [
        'Connector_0',
        'Connector_1',
        'Connector_2',
        'Connector_3',
        'Connector_4',
        'Connector_5',
        'Connector_6',
        'Connector_8',
        'Connector_10',
        'Connector_12',
      ]
    >;
    pcie12VHPWRConnector: Schema.Attribute.Enumeration<
      [
        'Connector_None',
        'Connector_12VHPWR_1',
        'Connector_12VHPWR_2',
        'Connector_12V2x6_1',
        'Connector_12V2x6_2',
        'Connector_12V2x6_3',
        'Connector_12V2x6_4',
      ]
    >;
    pcie50Ready: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    pcie8pinConnector: Schema.Attribute.Enumeration<
      [
        'Connector_0',
        'Connector_1',
        'Connector_2',
        'Connector_3',
        'Connector_4',
        'Connector_5',
        'Connector_6',
        'Connector_8',
        'Connector_10',
        'Connector_12',
      ]
    >;
    plus12VRail: Schema.Attribute.Enumeration<
      [
        'Amps_20A',
        'Amps_25A',
        'Amps_30A',
        'Amps_35A',
        'Amps_40A',
        'Amps_45A',
        'Amps_50A',
        'Amps_55A',
        'Amps_60A',
        'Amps_65A',
        'Amps_70A',
        'Amps_75A',
        'Amps_80A',
        'Amps_83A',
        'Amps_90A',
        'Amps_100A',
        'Amps_110A',
        'Amps_120A',
        'Amps_130A',
        'Amps_150A',
        'Amps_166A',
      ]
    >;
    product: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
    protections: Schema.Attribute.Enumeration<
      [
        'Basic_OVP_OCP_SCP',
        'Standard_OVP_OCP_SCP_OPP',
        'Full_OVP_OCP_SCP_OPP_UVP',
        'Premium_OVP_OCP_SCP_OPP_UVP_OTP',
        'Complete_OVP_OCP_SCP_OPP_UVP_OTP_SIP',
      ]
    >;
    publishedAt: Schema.Attribute.DateTime;
    railType: Schema.Attribute.Enumeration<['Single_Rail', 'Multi_Rail']>;
    rgb: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    sataConnector: Schema.Attribute.Enumeration<
      [
        'Connector_0',
        'Connector_2',
        'Connector_3',
        'Connector_4',
        'Connector_5',
        'Connector_6',
        'Connector_8',
        'Connector_10',
        'Connector_12',
        'Connector_14',
        'Connector_16',
      ]
    >;
    semiPassive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    warranty: Schema.Attribute.Enumeration<
      [
        'Years_1',
        'Years_2',
        'Years_3',
        'Years_5',
        'Years_7',
        'Years_10',
        'Years_12',
        'Years_15',
      ]
    >;
    wattage: Schema.Attribute.Enumeration<
      [
        'W_300',
        'W_350',
        'W_400',
        'W_450',
        'W_500',
        'W_550',
        'W_600',
        'W_650',
        'W_700',
        'W_750',
        'W_800',
        'W_850',
        'W_900',
        'W_1000',
        'W_1050',
        'W_1100',
        'W_1200',
        'W_1300',
        'W_1500',
        'W_1600',
        'W_1800',
        'W_2000',
      ]
    >;
  };
}

export interface ApiRamSpecificationRamSpecification
  extends Struct.CollectionTypeSchema {
  collectionName: 'ram_specifications';
  info: {
    displayName: 'RAM Specification';
    pluralName: 'ram-specifications';
    singularName: 'ram-specification';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    amdExpoCertified: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    capacity: Schema.Attribute.Enumeration<
      [
        'GB_4',
        'GB_8',
        'GB_16',
        'GB_24',
        'GB_32',
        'GB_48',
        'GB_64',
        'GB_96',
        'GB_128',
        'GB_192',
        'GB_256',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    eccSupport: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    formFactor: Schema.Attribute.Enumeration<['DIMM', 'SO_DIMM']>;
    heatspreader: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    height: Schema.Attribute.Enumeration<
      [
        'Height_Under30mm',
        'Height_30_35mm',
        'Height_35_40mm',
        'Height_40_45mm',
        'Height_45_50mm',
        'Height_50_55mm',
        'Height_Over55mm',
      ]
    >;
    intelXmpCertified: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    latency: Schema.Attribute.Enumeration<
      [
        'CL14',
        'CL15',
        'CL16',
        'CL17',
        'CL18',
        'CL19',
        'CL20',
        'CL22',
        'CL24',
        'CL26',
        'CL28',
        'CL30',
        'CL32',
        'CL34',
        'CL36',
        'CL38',
        'CL40',
        'CL42',
        'CL44',
        'CL46',
        'CL48',
      ]
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::ram-specification.ram-specification'
    > &
      Schema.Attribute.Private;
    manufacturer: Schema.Attribute.Enumeration<
      [
        'Corsair',
        'G_Skill',
        'Kingston',
        'Crucial',
        'TeamGroup',
        'ADATA',
        'Patriot',
        'PNY',
        'Samsung',
        'SK_Hynix',
        'Micron',
        'Lexar',
        'Silicon_Power',
      ]
    >;
    modules: Schema.Attribute.Enumeration<
      [
        'Kit_1x4GB',
        'Kit_1x8GB',
        'Kit_1x16GB',
        'Kit_1x24GB',
        'Kit_1x32GB',
        'Kit_1x48GB',
        'Kit_2x4GB',
        'Kit_2x8GB',
        'Kit_2x16GB',
        'Kit_2x24GB',
        'Kit_2x32GB',
        'Kit_2x48GB',
        'Kit_4x8GB',
        'Kit_4x16GB',
        'Kit_4x32GB',
        'Kit_4x48GB',
        'Kit_8x16GB',
        'Kit_8x32GB',
      ]
    >;
    onDieECC: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    product: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
    profile: Schema.Attribute.Enumeration<
      ['JEDEC', 'XMP_2_0', 'XMP_3_0', 'EXPO', 'XMP_EXPO', 'Intel_XMP_AMD_EXPO']
    >;
    publishedAt: Schema.Attribute.DateTime;
    registeredBuffered: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    rgb: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    rgbType: Schema.Attribute.Enumeration<
      [
        'None',
        'Static',
        'Addressable',
        'Sync_Aura',
        'Sync_Mystic',
        'Sync_Fusion',
        'Sync_Polychrome',
        'Sync_iCUE',
        'Sync_Universal',
      ]
    >;
    speed: Schema.Attribute.Enumeration<
      [
        'MTs_2133',
        'MTs_2400',
        'MTs_2666',
        'MTs_2933',
        'MTs_3000',
        'MTs_3200',
        'MTs_3600',
        'MTs_4000',
        'MTs_4400',
        'MTs_4800',
        'MTs_5200',
        'MTs_5600',
        'MTs_6000',
        'MTs_6200',
        'MTs_6400',
        'MTs_6600',
        'MTs_6800',
        'MTs_7000',
        'MTs_7200',
        'MTs_7400',
        'MTs_7600',
        'MTs_7800',
        'MTs_8000',
        'MTs_8200',
        'MTs_8400',
        'MTs_8600',
      ]
    >;
    timings: Schema.Attribute.Enumeration<
      [
        'T_14_14_14_34',
        'T_15_15_15_35',
        'T_16_16_16_36',
        'T_16_18_18_36',
        'T_16_18_18_38',
        'T_16_20_20_38',
        'T_18_18_18_38',
        'T_18_22_22_42',
        'T_19_19_19_39',
        'T_20_20_20_40',
        'T_22_22_22_52',
        'T_28_34_34_89',
        'T_30_36_36_76',
        'T_30_38_38_96',
        'T_32_38_38_96',
        'T_32_39_39_102',
        'T_34_42_42_108',
        'T_36_44_44_96',
        'T_36_48_48_96',
        'T_38_38_38_96',
        'T_40_40_40_76',
        'T_40_48_48_96',
        'T_42_42_42_84',
        'T_46_46_46_96',
        'T_48_48_48_96',
      ]
    >;
    type: Schema.Attribute.Enumeration<['DDR4', 'DDR5']>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    voltage: Schema.Attribute.Enumeration<
      [
        'V_1_10',
        'V_1_15',
        'V_1_20',
        'V_1_25',
        'V_1_30',
        'V_1_35',
        'V_1_40',
        'V_1_45',
        'V_1_50',
        'V_1_55',
        'V_1_60',
      ]
    >;
  };
}

export interface ApiReviewReview extends Struct.CollectionTypeSchema {
  collectionName: 'reviews';
  info: {
    displayName: 'Review';
    pluralName: 'reviews';
    singularName: 'review';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    adminReply: Schema.Attribute.Text;
    approved: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    authorEmail: Schema.Attribute.Email;
    authorName: Schema.Attribute.String;
    comment: Schema.Attribute.Text & Schema.Attribute.Required;
    cons: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    helpful: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    images: Schema.Attribute.Media<'images', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::review.review'
    > &
      Schema.Attribute.Private;
    product: Schema.Attribute.Relation<'manyToOne', 'api::product.product'>;
    pros: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    rating: Schema.Attribute.Integer & Schema.Attribute.Required;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users_permissions_user: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    verified: Schema.Attribute.Boolean;
  };
}

export interface ApiStorageSpecificationStorageSpecification
  extends Struct.CollectionTypeSchema {
  collectionName: 'storage_specifications';
  info: {
    displayName: 'Storage Specification';
    pluralName: 'storage-specifications';
    singularName: 'storage-specification';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    capacity: Schema.Attribute.Enumeration<
      [
        'GB_120',
        'GB_128',
        'GB_240',
        'GB_250',
        'GB_256',
        'GB_480',
        'GB_500',
        'GB_512',
        'GB_960',
        'GB_1000',
        'TB_1',
        'TB_2',
        'TB_4',
        'TB_8',
        'TB_10',
        'TB_12',
        'TB_14',
        'TB_16',
        'TB_18',
        'TB_20',
        'TB_22',
        'TB_24',
      ]
    >;
    controller: Schema.Attribute.Enumeration<
      [
        'Samsung_Pascal',
        'Samsung_Elpis',
        'Samsung_Phoenix',
        'Phison_E12',
        'Phison_E16',
        'Phison_E18',
        'Phison_E21T',
        'Phison_E26',
        'Phison_E31T',
        'Silicon_Motion_SM2259',
        'Silicon_Motion_SM2262EN',
        'Silicon_Motion_SM2263XT',
        'Silicon_Motion_SM2264',
        'Silicon_Motion_SM2267',
        'Silicon_Motion_SM2269XT',
        'Maxio_MAP1202',
        'Maxio_MAP1602',
        'Realtek_RTS5762',
        'Realtek_RTS5765DL',
        'InnoGrit_IG5220',
        'InnoGrit_IG5236',
        'InnoGrit_IG5666',
        'WD_Custom',
        'Seagate_Custom',
        'Marvell',
        'SanDisk',
        'Intel_Custom',
        'Solidigm_Custom',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    directStorageSupport: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    dreamCache: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    dreamCacheSize: Schema.Attribute.Enumeration<
      ['None', 'MB_256', 'MB_512', 'GB_1', 'GB_2', 'GB_4']
    >;
    encryption: Schema.Attribute.Enumeration<
      [
        'None',
        'AES_128bit',
        'AES_256bit',
        'TCG_Opal_2_0',
        'IEEE_1667',
        'BitLocker',
      ]
    >;
    formFactor: Schema.Attribute.Enumeration<
      [
        'M2_2280',
        'M2_2260',
        'M2_2242',
        'M2_2230',
        'Drive_2_5inch',
        'Drive_3_5inch',
        'mSATA',
        'U2',
        'Add_In_Card',
        'External',
      ]
    >;
    heatsink: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    hhdCache: Schema.Attribute.Enumeration<
      [
        'Not_Applicable',
        'MB_8',
        'MB_16',
        'MB_32',
        'MB_64',
        'MB_128',
        'MB_256',
        'MB_512',
      ]
    >;
    hhdRpm: Schema.Attribute.Enumeration<
      [
        'Not_Applicable',
        'RPM_5400',
        'RPM_5900',
        'RPM_7200',
        'RPM_10000',
        'RPM_15000',
      ]
    >;
    interface: Schema.Attribute.Enumeration<
      [
        'PCIe_5_0_x4',
        'PCIe_4_0_x4',
        'PCIe_3_0_x4',
        'PCIe_3_0_x2',
        'SATA_III',
        'SATA_II',
        'USB_3_2_Gen2x2',
        'USB_3_2_Gen2',
        'USB_3_2_Gen1',
        'USB_3_0',
        'Thunderbolt_4',
        'Thunderbolt_3',
      ]
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::storage-specification.storage-specification'
    > &
      Schema.Attribute.Private;
    manufacturer: Schema.Attribute.Enumeration<
      [
        'Samsung',
        'Western_Digital',
        'Seagate',
        'Crucial',
        'Kingston',
        'SK_Hynix',
        'Sabrent',
        'Corsair',
        'ADATA',
        'PNY',
        'Lexar',
        'TeamGroup',
        'Patriot',
        'Toshiba',
        'Intel',
        'Micron',
        'Solidigm',
        'Phison',
        'MSI',
        'Gigabyte',
        'Silicon_Power',
      ]
    >;
    mtbf: Schema.Attribute.Enumeration<
      ['Hours_1_5M', 'Hours_1_8M', 'Hours_2M', 'Hours_2_4M']
    >;
    nandType: Schema.Attribute.Enumeration<
      [
        'SLC',
        'MLC',
        'TLC',
        'QLC',
        'PLC',
        'V_NAND',
        'BiCS_NAND',
        'NAND_3D_96L',
        'NAND_3D_128L',
        'NAND_3D_162L',
        'NAND_3D_176L',
        'NAND_3D_200L',
        'NAND_3D_218L',
        'NAND_3D_232L',
        'NAND_3D_236L',
        'NAND_3D_280L',
      ]
    >;
    product: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
    ps5Compatible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    publishedAt: Schema.Attribute.DateTime;
    randomRead: Schema.Attribute.Enumeration<
      [
        'IOPS_50K',
        'IOPS_75K',
        'IOPS_90K',
        'IOPS_100K',
        'IOPS_200K',
        'IOPS_350K',
        'IOPS_400K',
        'IOPS_500K',
        'IOPS_600K',
        'IOPS_700K',
        'IOPS_800K',
        'IOPS_900K',
        'IOPS_1000K',
        'IOPS_1100K',
        'IOPS_1200K',
        'IOPS_1300K',
        'IOPS_1400K',
        'IOPS_1500K',
        'IOPS_1600K',
        'IOPS_1700K',
        'IOPS_1800K',
        'IOPS_2000K',
      ]
    >;
    randomWrite: Schema.Attribute.Enumeration<
      [
        'IOPS_50K',
        'IOPS_75K',
        'IOPS_90K',
        'IOPS_100K',
        'IOPS_200K',
        'IOPS_350K',
        'IOPS_400K',
        'IOPS_500K',
        'IOPS_600K',
        'IOPS_700K',
        'IOPS_800K',
        'IOPS_900K',
        'IOPS_1000K',
        'IOPS_1100K',
        'IOPS_1200K',
        'IOPS_1300K',
        'IOPS_1400K',
        'IOPS_1500K',
        'IOPS_1600K',
        'IOPS_1800K',
        'IOPS_2000K',
      ]
    >;
    readSpeed: Schema.Attribute.Enumeration<
      [
        'MBs_500',
        'MBs_550',
        'MBs_560',
        'MBs_1000',
        'MBs_1500',
        'MBs_2000',
        'MBs_2500',
        'MBs_3000',
        'MBs_3200',
        'MBs_3400',
        'MBs_3500',
        'MBs_4000',
        'MBs_4500',
        'MBs_5000',
        'MBs_5500',
        'MBs_6000',
        'MBs_6500',
        'MBs_7000',
        'MBs_7200',
        'MBs_7300',
        'MBs_7400',
        'MBs_7450',
        'MBs_9500',
        'MBs_10000',
        'MBs_10500',
        'MBs_11000',
        'MBs_12000',
        'MBs_12400',
        'MBs_14000',
        'MBs_14500',
      ]
    >;
    tbw: Schema.Attribute.Enumeration<
      [
        'TBW_100',
        'TBW_150',
        'TBW_200',
        'TBW_300',
        'TBW_400',
        'TBW_500',
        'TBW_600',
        'TBW_700',
        'TBW_800',
        'TBW_1000',
        'TBW_1200',
        'TBW_1400',
        'TBW_1500',
        'TBW_1800',
        'TBW_2000',
        'TBW_2400',
        'TBW_2800',
        'TBW_3000',
        'TBW_3600',
        'TBW_4000',
        'TBW_5000',
        'TBW_6000',
        'TBW_7000',
      ]
    >;
    type: Schema.Attribute.Enumeration<
      ['NVMe_SSD', 'SATA_SSD', 'HDD', 'External_SSD', 'External_HDD']
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    writeSpeed: Schema.Attribute.Enumeration<
      [
        'MBs_450',
        'MBs_500',
        'MBs_520',
        'MBs_530',
        'MBs_1000',
        'MBs_1500',
        'MBs_2000',
        'MBs_2500',
        'MBs_3000',
        'MBs_3200',
        'MBs_3400',
        'MBs_3500',
        'MBs_4000',
        'MBs_4500',
        'MBs_5000',
        'MBs_5500',
        'MBs_6000',
        'MBs_6500',
        'MBs_6850',
        'MBs_6900',
        'MBs_7000',
        'MBs_8500',
        'MBs_9000',
        'MBs_9500',
        'MBs_10000',
        'MBs_11000',
        'MBs_11800',
        'MBs_12000',
      ]
    >;
  };
}

export interface ApiTestimonialTestimonial extends Struct.CollectionTypeSchema {
  collectionName: 'testimonials';
  info: {
    displayName: 'Testimonial';
    pluralName: 'testimonials';
    singularName: 'testimonial';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images'>;
    company: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    featured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::testimonial.testimonial'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    publishedAt: Schema.Attribute.DateTime;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
    quoteBg: Schema.Attribute.Text;
    rating: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<5>;
    role: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiVendorProductVendorProduct
  extends Struct.CollectionTypeSchema {
  collectionName: 'vendor_products';
  info: {
    displayName: 'VendorProduct';
    pluralName: 'vendor-products';
    singularName: 'vendor-product';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imageUrls: Schema.Attribute.JSON;
    lastSynced: Schema.Attribute.DateTime;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::vendor-product.vendor-product'
    > &
      Schema.Attribute.Private;
    pricePartner: Schema.Attribute.Decimal;
    pricePromo: Schema.Attribute.Decimal;
    publishedAt: Schema.Attribute.DateTime;
    rawData: Schema.Attribute.JSON;
    stockStatus: Schema.Attribute.Enumeration<
      ['not_available', 'available', 'limited', 'on_route', 'on_demand']
    > &
      Schema.Attribute.DefaultTo<'not_available'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    vendor: Schema.Attribute.Relation<'manyToOne', 'api::vendor.vendor'>;
    vendorBrand: Schema.Attribute.String;
    vendorCategory: Schema.Attribute.String;
    vendorPrice: Schema.Attribute.Decimal & Schema.Attribute.Required;
    vendorProductId: Schema.Attribute.String & Schema.Attribute.Required;
    vendorSku: Schema.Attribute.String;
  };
}

export interface ApiVendorVendor extends Struct.CollectionTypeSchema {
  collectionName: 'vendors';
  info: {
    displayName: 'Vendor';
    pluralName: 'vendors';
    singularName: 'vendor';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    apiToken: Schema.Attribute.String & Schema.Attribute.Private;
    apiUrl: Schema.Attribute.String;
    code: Schema.Attribute.UID<'name'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    importFormat: Schema.Attribute.Enumeration<['api', 'xml', 'csv', 'xlsx']> &
      Schema.Attribute.DefaultTo<'api'>;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    lastSync: Schema.Attribute.DateTime;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::vendor.vendor'
    > &
      Schema.Attribute.Private;
    markupPercent: Schema.Attribute.Decimal & Schema.Attribute.DefaultTo<0>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiWebcamSpecificationWebcamSpecification
  extends Struct.CollectionTypeSchema {
  collectionName: 'webcam_specifications';
  info: {
    displayName: 'Webcam Specification';
    pluralName: 'webcam-specifications';
    singularName: 'webcam-specification';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    aiTracking: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    aiTrackingFeatures: Schema.Attribute.Enumeration<
      [
        'Not_Applicable',
        'Face_Tracking',
        'Upper_Body_Tracking',
        'Hand_Tracking',
        'Group_Tracking',
        'Gesture_Control',
        'Auto_Framing',
        'Object_Tracking',
        'Whiteboard_Mode',
      ]
    >;
    aperture: Schema.Attribute.Enumeration<
      [
        'f_1_4',
        'f_1_8',
        'f_2_0',
        'f_2_2',
        'f_2_4',
        'f_2_8',
        'f_3_2',
        'f_4_0',
        'Variable',
      ]
    >;
    autofocusType: Schema.Attribute.Enumeration<
      [
        'Not_Applicable',
        'Standard',
        'Fast',
        'Face_Tracking',
        'Eye_Tracking',
        'AI_Powered',
        'Phase_Detection',
        'Contrast_Detection',
        'Hybrid',
      ]
    >;
    backgroundRemoval: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    backgroundReplacement: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    beautyFilters: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    cableDetachable: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    cableLength: Schema.Attribute.Enumeration<
      [
        'm_1_0',
        'm_1_2',
        'm_1_5',
        'm_1_8',
        'm_2_0',
        'm_2_5',
        'm_3_0',
        'Detachable',
      ]
    >;
    color: Schema.Attribute.Enumeration<
      ['Black', 'White', 'Gray', 'Silver', 'Graphite', 'Pink', 'Blue']
    >;
    connectivity: Schema.Attribute.Enumeration<
      [
        'USB_A',
        'USB_C',
        'USB_A_USB_C',
        'Wireless',
        'Bluetooth',
        'WiFi',
        'Ethernet',
        'USB_HDMI',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    exposureControl: Schema.Attribute.Enumeration<
      ['Auto_Only', 'Auto_Manual', 'Full_Manual']
    >;
    fieldOfView: Schema.Attribute.Enumeration<
      [
        'FOV_60',
        'FOV_65',
        'FOV_70',
        'FOV_75',
        'FOV_78',
        'FOV_80',
        'FOV_82',
        'FOV_84',
        'FOV_87',
        'FOV_90',
        'FOV_95',
        'FOV_100',
        'FOV_110',
        'FOV_120',
        'FOV_Adjustable',
      ]
    >;
    focusType: Schema.Attribute.Enumeration<
      ['Fixed', 'Manual', 'Autofocus', 'Autofocus_Manual']
    >;
    fovAdjustable: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    gimbal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    gimbalAxes: Schema.Attribute.Enumeration<
      ['Not_Applicable', 'Axis_2', 'Axis_3']
    >;
    hdr: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    hdrType: Schema.Attribute.Enumeration<
      ['Not_Applicable', 'HDR', 'HDR10', 'Auto_HDR', 'WDR']
    >;
    indicatorLight: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::webcam-specification.webcam-specification'
    > &
      Schema.Attribute.Private;
    lowLightCorrection: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    lowLightType: Schema.Attribute.Enumeration<
      [
        'Not_Applicable',
        'Basic',
        'Advanced',
        'AI_Enhanced',
        'RightLight',
        'Starvis',
      ]
    >;
    manufacturer: Schema.Attribute.Enumeration<
      [
        'Logitech',
        'Razer',
        'Elgato',
        'ASUS',
        'AVerMedia',
        'Insta360',
        'Obsbot',
        'Sony',
        'Canon',
        'Panasonic',
        'Microsoft',
        'Dell',
        'HP',
        'Lenovo',
        'Creative',
        'NZXT',
        'Corsair',
        'HyperX',
        'Anker',
        'Poly',
        'Jabra',
        'Nexigo',
        'EMEET',
        'Hollyland',
      ]
    >;
    maxResolutionFramerate: Schema.Attribute.Enumeration<
      [
        'p720_30fps',
        'p720_60fps',
        'p1080_24fps',
        'p1080_30fps',
        'p1080_60fps',
        'p1080_120fps',
        'p1440_30fps',
        'p1440_60fps',
        'p4K_24fps',
        'p4K_30fps',
        'p4K_60fps',
      ]
    >;
    microphone: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    microphoneFrequency: Schema.Attribute.Enumeration<
      [
        'Not_Applicable',
        'Hz_100_8000',
        'Hz_100_10000',
        'Hz_90_16000',
        'Hz_80_20000',
        'Hz_50_20000',
      ]
    >;
    microphoneType: Schema.Attribute.Enumeration<
      [
        'None',
        'Mono',
        'Stereo',
        'Dual_Omnidirectional',
        'Beamforming',
        'Noise_Cancelling',
        'AI_Noise_Removal',
      ]
    >;
    monitorClip: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    mountType: Schema.Attribute.Enumeration<
      [
        'Clip_Only',
        'Clip_Tripod',
        'Tripod_Only',
        'Monitor_Mount',
        'Desktop_Stand',
        'Magnetic',
        'Universal',
      ]
    >;
    panTiltZoom: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    platformCompatibility: Schema.Attribute.Enumeration<
      [
        'Windows_Only',
        'Mac_Only',
        'Windows_Mac',
        'Windows_Mac_Chrome',
        'Windows_Mac_Linux',
        'Universal',
        'iOS_Android',
      ]
    >;
    privacyShutter: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    privacyShutterType: Schema.Attribute.Enumeration<
      [
        'Not_Applicable',
        'Physical_Slider',
        'Physical_Cover',
        'Magnetic_Cap',
        'Electronic',
        'Lens_Cap',
      ]
    >;
    product: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
    publishedAt: Schema.Attribute.DateTime;
    resolution: Schema.Attribute.Enumeration<
      ['HD_720p', 'FHD_1080p', 'QHD_1440p', 'UHD_4K', 'UHD_4K_HDR']
    >;
    ringLight: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    ringLightSettings: Schema.Attribute.Enumeration<
      [
        'Not_Applicable',
        'On_Off',
        'Brightness_Adjustable',
        'Brightness_Temperature',
        'Full_RGB',
      ]
    >;
    sensorSize: Schema.Attribute.Enumeration<
      [
        'Inch_1_4',
        'Inch_1_2_8',
        'Inch_1_2_5',
        'Inch_1_2_3',
        'Inch_1_2',
        'Inch_1_1_8',
        'Inch_1',
        'Inch_4_3',
        'APS_C',
        'Full_Frame',
      ]
    >;
    sensorType: Schema.Attribute.Enumeration<
      [
        'CMOS',
        'Sony_CMOS',
        'Sony_Starvis',
        'Sony_Exmor',
        'Sony_Exmor_R',
        'Custom_CMOS',
      ]
    >;
    series: Schema.Attribute.Enumeration<
      [
        'Brio',
        'StreamCam',
        'C_Series',
        'MX_Brio',
        'Kiyo',
        'Kiyo_Pro',
        'Kiyo_X',
        'Facecam',
        'Facecam_Pro',
        'Facecam_MK_2',
        'ROG_Eye',
        'ROG_Eye_S',
        'TUF_Gaming',
        'Live_Streamer',
        'PW_Series',
        'Link',
        'Tiny',
        'Tiny_2',
        'Tail_Air',
        'Meeting',
        'Meeting_Capsule',
        'ZV_Series',
        'EOS',
        'Lumix',
        'LifeCam',
        'Modern',
        'UltraSharp',
        'Poly_Studio',
      ]
    >;
    software: Schema.Attribute.Enumeration<
      [
        'None',
        'Logitech_Capture',
        'Logitech_G_Hub',
        'Razer_Synapse',
        'Elgato_Camera_Hub',
        'ASUS_Armoury_Crate',
        'AVerMedia_CamEngine',
        'Insta360_Link_Controller',
        'Obsbot_WebCam',
        'OBS_Studio_Compatible',
        'Streamlabs_Compatible',
      ]
    >;
    streamingOptimized: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    tripodThread: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    usbVersion: Schema.Attribute.Enumeration<
      ['USB_2_0', 'USB_3_0', 'USB_3_1', 'USB_3_2']
    >;
    weight: Schema.Attribute.Enumeration<
      [
        'g_Under_50',
        'g_50_75',
        'g_75_100',
        'g_100_125',
        'g_125_150',
        'g_150_200',
        'g_200_300',
        'g_Over_300',
      ]
    >;
    whiteBalanceControl: Schema.Attribute.Enumeration<
      ['Auto_Only', 'Auto_Manual', 'Full_Manual', 'Presets']
    >;
    windowsHello: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    zoomType: Schema.Attribute.Enumeration<
      [
        'None',
        'Digital_2x',
        'Digital_3x',
        'Digital_4x',
        'Digital_5x',
        'Digital_8x',
        'Optical',
        'Optical_Digital',
      ]
    >;
  };
}

export interface ApiWebsiteSettingsWebsiteSettings
  extends Struct.SingleTypeSchema {
  collectionName: 'site_settings';
  info: {
    displayName: 'Site Settings';
    pluralName: 'site-settings';
    singularName: 'website-settings';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contactAddress: Schema.Attribute.Text;
    contactEmail: Schema.Attribute.Email;
    contactPhone: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    currency: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Euro'>;
    currencySymbol: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u20AC'>;
    defaultLanguage: Schema.Attribute.Enumeration<['bg', 'en']>;
    defaultTheme: Schema.Attribute.Enumeration<['dark', 'light']>;
    favicon: Schema.Attribute.Media<'images' | 'files'>;
    freeShippingThreshold: Schema.Attribute.Decimal &
      Schema.Attribute.DefaultTo<150>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::website-settings.website-settings'
    > &
      Schema.Attribute.Private;
    logo: Schema.Attribute.Media<'images' | 'files'>;
    logoDark: Schema.Attribute.Media<'images' | 'files'>;
    maintenanceMode: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    primaryColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'#00B553'>;
    publishedAt: Schema.Attribute.DateTime;
    secondaryColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'#101720'>;
    showEuroPrices: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    siteDescription: Schema.Attribute.Text;
    siteName: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'TechHub.bg'>;
    socialFacebook: Schema.Attribute.String;
    socialInstagram: Schema.Attribute.String;
    socialTikTok: Schema.Attribute.String;
    socialTwitch: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.Text;
    caption: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.Text;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.Text & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    address: Schema.Attribute.String;
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    city: Schema.Attribute.String;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstName: Schema.Attribute.String;
    invoice_clients: Schema.Attribute.Relation<
      'oneToMany',
      'api::invoice-client.invoice-client'
    >;
    lastName: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    orders: Schema.Attribute.Relation<'oneToMany', 'api::order.order'>;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    phone: Schema.Attribute.String;
    postalCode: Schema.Attribute.String;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    reviews: Schema.Attribute.Relation<'oneToMany', 'api::review.review'>;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::session': AdminSession;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::brand.brand': ApiBrandBrand;
      'api::build-component.build-component': ApiBuildComponentBuildComponent;
      'api::case-specification.case-specification': ApiCaseSpecificationCaseSpecification;
      'api::category-markup.category-markup': ApiCategoryMarkupCategoryMarkup;
      'api::category.category': ApiCategoryCategory;
      'api::cpu-specification.cpu-specification': ApiCpuSpecificationCpuSpecification;
      'api::global-setting.global-setting': ApiGlobalSettingGlobalSetting;
      'api::gpu-specification.gpu-specification': ApiGpuSpecificationGpuSpecification;
      'api::headset-specification.headset-specification': ApiHeadsetSpecificationHeadsetSpecification;
      'api::hero-slide.hero-slide': ApiHeroSlideHeroSlide;
      'api::invoice-client.invoice-client': ApiInvoiceClientInvoiceClient;
      'api::keyboard-specification.keyboard-specification': ApiKeyboardSpecificationKeyboardSpecification;
      'api::laptop-specification.laptop-specification': ApiLaptopSpecificationLaptopSpecification;
      'api::microphone-specification.microphone-specification': ApiMicrophoneSpecificationMicrophoneSpecification;
      'api::module.module': ApiModuleModule;
      'api::monitor-specification.monitor-specification': ApiMonitorSpecificationMonitorSpecification;
      'api::motherboard-specification.motherboard-specification': ApiMotherboardSpecificationMotherboardSpecification;
      'api::mouse-specification.mouse-specification': ApiMouseSpecificationMouseSpecification;
      'api::mousepad-specification.mousepad-specification': ApiMousepadSpecificationMousepadSpecification;
      'api::newsletter-subscriber.newsletter-subscriber': ApiNewsletterSubscriberNewsletterSubscriber;
      'api::order.order': ApiOrderOrder;
      'api::organisation-detail.organisation-detail': ApiOrganisationDetailOrganisationDetail;
      'api::page.page': ApiPagePage;
      'api::pc-build-template.pc-build-template': ApiPcBuildTemplatePcBuildTemplate;
      'api::product.product': ApiProductProduct;
      'api::promo-code.promo-code': ApiPromoCodePromoCode;
      'api::psu-specification.psu-specification': ApiPsuSpecificationPsuSpecification;
      'api::ram-specification.ram-specification': ApiRamSpecificationRamSpecification;
      'api::review.review': ApiReviewReview;
      'api::storage-specification.storage-specification': ApiStorageSpecificationStorageSpecification;
      'api::testimonial.testimonial': ApiTestimonialTestimonial;
      'api::vendor-product.vendor-product': ApiVendorProductVendorProduct;
      'api::vendor.vendor': ApiVendorVendor;
      'api::webcam-specification.webcam-specification': ApiWebcamSpecificationWebcamSpecification;
      'api::website-settings.website-settings': ApiWebsiteSettingsWebsiteSettings;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
