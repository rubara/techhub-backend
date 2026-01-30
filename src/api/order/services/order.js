module.exports = {
  async beforeCreate(event) {
    console.log('=== ORDER SERVICE: beforeCreate triggered ===');
    
    const { data } = event.params;
    
    if (event.state && event.state.user) {
      console.log('✅ User found:', event.state.user.id);
      
      data.users_permissions_user = {
        connect: [event.state.user.id]
      };
      
      console.log('✅ User connected to order');
    } else {
      console.log('❌ No user in state');
    }
  },
  
  async afterCreate(event) {
    console.log('=== ORDER SERVICE: afterCreate ===');
    console.log('Order:', event.result.id, event.result.documentId);
  },
};
