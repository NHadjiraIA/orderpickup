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
     await queryInterface.bulkInsert('ratings', [{
      userId: 1,
      restaurantId: 1,
      rating: 4,
      createdAt: new Date(),
      updatedAt: new Date()
     }]);

     await queryInterface.bulkInsert('ratings', [{
      userId: 2,
      restaurantId: 2,
      rating: 5,
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

     await queryInterface.bulkDelete('ratings', null, {});
  }
};
