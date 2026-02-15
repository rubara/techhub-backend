import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::promo-code.promo-code', ({ strapi }) => ({
  async validate(ctx) {
    try {
      const { code, orderAmount } = ctx.request.body;

      if (!code) {
        return ctx.badRequest('Promo code is required');
      }

      if (!orderAmount || orderAmount <= 0) {
        return ctx.badRequest('Valid order amount is required');
      }

// Try direct database query first for debugging
console.log('🔍 Looking for code:', code);

const promoCodes = await strapi.db.query('api::promo-code.promo-code').findMany({
  where: {
    code: {
      $eqi: code,
    },
    publishedAt: {
      $notNull: true,
    },
  },
});

console.log('🔍 Search results:', JSON.stringify(promoCodes, null, 2));
console.log('🔍 Number of codes found:', promoCodes?.length || 0);

      if (!promoCodes || promoCodes.length === 0) {
        return ctx.send({
          valid: false,
          message: 'Invalid promo code',
        }, 400);
      }

      const promoCode = promoCodes[0];

      if (!promoCode.isActive) {
        return ctx.send({
          valid: false,
          message: 'This promo code is no longer active',
        }, 400);
      }

      const now = new Date();
      const expirationDate = new Date(promoCode.expirationDate);
      if (expirationDate < now) {
        return ctx.send({
          valid: false,
          message: 'This promo code has expired',
        }, 400);
      }

      if (promoCode.usageLimit > 0 && promoCode.usedCount >= promoCode.usageLimit) {
        return ctx.send({
          valid: false,
          message: 'This promo code has reached its usage limit',
        }, 400);
      }

      if (orderAmount < promoCode.minimumOrderAmount) {
        return ctx.send({
          valid: false,
          message: `Minimum order amount of ${promoCode.minimumOrderAmount.toFixed(2)} лв. required`,
        }, 400);
      }

      const discountAmount = (orderAmount * promoCode.discountPercentage) / 100;
      const finalAmount = orderAmount - discountAmount;

      return ctx.send({
        valid: true,
        promoCode: {
          id: promoCode.id,
          code: promoCode.code,
          discountPercentage: promoCode.discountPercentage,
          description: promoCode.description,
        },
        discount: {
          percentage: promoCode.discountPercentage,
          amount: parseFloat(discountAmount.toFixed(2)),
          originalAmount: parseFloat(orderAmount.toFixed(2)),
          finalAmount: parseFloat(finalAmount.toFixed(2)),
        },
      });
    } catch (error) {
      console.error('Promo code validation error:', error);
      return ctx.internalServerError('Error validating promo code');
    }
  },
}));
