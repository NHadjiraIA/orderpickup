'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('restaurants', [{
    title: "Restaurant la joie",
    thumbnail_url: "https://images.unsplash.com/photo-1509482560494-4126f8225994?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "sample restaurant for goood people",
    address: "420 pineapple street",
    email: 'angelsjoie@heaven.com',
    phone: 4455009,
    city: 'Markham',
    prov_state: 'Ontario',
    postal:'P3G H8A',
    open_time: "9",
    close_time: '8',
    lat: 43.89567763035046,
    lon: -79.26538230855174,
    createdAt: new Date(),
    updatedAt: new Date()
   }]);
   await queryInterface.bulkInsert('orders', [{
    userId: 1,
    restaurantId: 1,
    done: false,
    createdAt: new Date(),
    updatedAt: new Date()
   }]);
   
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('orders', null, {});
     await queryInterface.bulkDelete('restaurants', null, {});
  }
};
