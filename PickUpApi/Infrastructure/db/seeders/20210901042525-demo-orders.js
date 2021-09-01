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
     await queryInterface.bulkInsert('orders', [{
      userId: 2,
      restaurantId: 2,
      done: true,
      createdAt: new Date(),
      updatedAt: new Date()
     }]);
     await queryInterface.bulkInsert('orders', [{
      userId: 3,
      restaurantId: 3,
      done: true,
      createdAt: new Date(),
      updatedAt: new Date()
     }]);

     await queryInterface.bulkInsert('orders', [{
      userId: 4,
      restaurantId: 4,
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
     * await queryInterface.bulkDelete('orders', null, {});
     */

     await queryInterface.bulkDelete('orders', null, {})
  }
};
