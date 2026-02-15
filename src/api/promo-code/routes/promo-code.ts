export default {
  routes: [
    // Custom validation route
    {
      method: 'POST',
      path: '/promo-codes/validate',
      handler: 'promo-code.validate',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
