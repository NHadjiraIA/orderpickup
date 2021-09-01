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
    thumbnail_url: 'image.jpg',
    description: "sample restaurant for goood people",
    address: "Heaven",
    email: 'angels@heaven.com',
    phone: 4455009,
    city: 'Ottawa',
    prov_state: 'Ontario',
    postal:' string',
    open_time: "string",
    close_time: 'string',
    lat: 0,
    lon: 0,
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
