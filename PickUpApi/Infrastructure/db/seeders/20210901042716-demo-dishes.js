"use strict";

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
    await queryInterface.bulkInsert("dishes", [
      {
        restaurantId: 1,
        name: "Blackberry pie",
        img_url:
          "https://images.unsplash.com/photo-1525151498231-bc059cfafa2b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmxhY2tiZXJyeSUyMHBpZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 7.5,
        calories: 400,
        description:
          "Filled with huge, sweet blackberries bursting with juice and baked in the most perfect, flaky, cannabis infused buttery pie crust.",
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
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("dishes", [
      {
        restaurantId: 1,
        name: "Strawberry pie",
        img_url:
          "https://images.unsplash.com/photo-1585034722868-115328443114?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
        price: 8.5,
        calories: 490,
        description:
          "Topped with huge, sweet strawberries harvested in Ontario without pesticides. The crust is hand kneaded the day of with CBD oil, and the pie is baked with to perfect to the sounds of Gregorian Hymns.",
        size: "Medium",
        vegan: false,
        gluten: true,
        halal: false,
        dairy: false,
        nuts: true,
        available: true,
        marijuana: true,
        type: "Dessert",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("dishes", [
      {
        restaurantId: 1,
        name: "Chocolate Cake",
        img_url:
          "https://images.unsplash.com/photo-1617455559706-fa196228c05d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        price: 12.5,
        calories: 610,
        description:
          "This cake is moist and has the perfect crumb. It has cocoa from Costa Rica, hand harvested by children.",
        size: "Medium",
        vegan: false,
        gluten: true,
        halal: false,
        dairy: false,
        nuts: true,
        available: true,
        marijuana: true,
        type: "Dessert",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("dishes", [
      {
        restaurantId: 1,
        name: "Beef and Bacon Hamburger",
        img_url:
          "https://images.unsplash.com/photo-1551360021-0ff7982d13dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=826&q=80",
        price: 15.5,
        calories: 1250,
        description:
          "This healthy burger uses a bagel instead of buns, and uses real, 55 year old American Cheddar shipped from Texas. The bacon is cooked to crispy perfection.",
        size: "Large",
        vegan: false,
        gluten: false,
        halal: false,
        dairy: false,
        nuts: true,
        available: true,
        marijuana: false,
        type: "Main",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("dishes", [
      {
        restaurantId: 1,
        name: "Pan Fried Noodles",
        img_url:
          "https://images.unsplash.com/photo-1630257527668-c27eb6a427a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        price: 14.76,
        calories: 810,
        description:
          "Overflowing with green beans and broccoli, stirfried in sesame oil and topped with chicken booked in black bean sauce. All of the fiber and protein you want, and none of the guilt.",
        size: "Medium",
        vegan: false,
        gluten: true,
        halal: false,
        dairy: true,
        nuts: true,
        available: true,
        marijuana: false,
        type: "Main",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("dishes", [
      {
        restaurantId: 1,
        name: "Avocado Toast",
        img_url:
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        price: 9.48,
        calories: 610,
        description:
          "Notorious among Millennials but the perfect for any generation -- be it old or young. We season our egg with raw marijuana leaves for an extra kick.",
        size: "Small",
        vegan: false,
        gluten: true,
        halal: false,
        dairy: false,
        nuts: true,
        available: true,
        marijuana: true,
        type: "Appetizer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Dishes", null, {});
  },
};
