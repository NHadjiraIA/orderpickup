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
     await queryInterface.bulkInsert('orderdetails', [{
      dishId: 1,
      orderId: 1,
      quantity: 2,
      createdAt: new Date(),
      updatedAt: new Date()
     }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('orderdetails', null, {});
     */

     await queryInterface.bulkDelete('orderdetails', null, {});
  }
};
