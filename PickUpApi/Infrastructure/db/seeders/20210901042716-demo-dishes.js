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
     await queryInterface.bulkInsert('dishes', [{
      restaurantId: 1,
     name: "Blackberry pie",
     img_url: "https://images.unsplash.com/photo-1525151498231-bc059cfafa2b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmxhY2tiZXJyeSUyMHBpZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
     price: 7.50,
     calories: 400,
     description:"Filled with huge, sweet blackberries bursting with juice and baked in the most perfect, flaky, cannabis infused buttery pie crust",
     size: "Medium",
     vegan: false,
     gluten: false,
     halal: false,
     dairy: false,
     nuts: true,
     available: true,
     marijuana: true,
     type: "Dessert",
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

     await queryInterface.bulkDelete('Dishes', null, {});
  }
};
