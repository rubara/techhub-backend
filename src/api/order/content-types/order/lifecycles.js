module.exports = {
  async beforeCreate(event) {
    console.log('=== ORDER LIFECYCLE: beforeCreate triggered ===');
    
    const { data } = event.params;
    
    // Get user from the authenticated context
    if (event.state && event.state.user) {
      console.log('✅ User found in state:', event.state.user.id);
      
      // For Strapi v5 with link tables, use connect syntax
      data.users_permissions_user = {
        connect: [event.state.user.id]
      };
      
      console.log('✅ User linked to order via connect');
    } else {
      console.log('❌ WARNING: No user found in event.state');
    }
  },
  
  async afterCreate(event) {
    console.log('=== ORDER LIFECYCLE: afterCreate triggered ===');
    const order = event.result;
    console.log('Order created:', order.id, order.documentId);
  },
};
