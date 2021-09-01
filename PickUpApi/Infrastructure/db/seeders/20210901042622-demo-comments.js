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
     await queryInterface.bulkInsert('comments', [{
      userId: 1,
      restaurantId: 1,
      Comment: "Liked the packaging, (wouldn't mind free discounts!😋)",
      createdAt: new Date(),
      updatedAt: new Date()
     }]);

     await queryInterface.bulkInsert('comments', [{
      userId: 2,
      restaurantId: 2,
      Comment: "Very happy with the yummy food!",
      createdAt: new Date(),
      updatedAt: new Date()
     }]);

     await queryInterface.bulkInsert('comments', [{
      userId: 3,
      restaurantId: 3,
      Comment: "My new favourite place!",
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

     await queryInterface.bulkDelete('comments', null, {});
  }
};
