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
    await queryInterface.bulkInsert("restaurants", [
      {
        title: "Bakery la joie",
        thumbnail_url:
          "https://images.unsplash.com/photo-1509482560494-4126f8225994?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Bakery & Bistro",
        address: "420 Pineapple St",
        email: "goodvibes@baked.com",
        phone: 4455009,
        city: "Markham",
        prov_state: "Ontario",
        postal: "P3G H8A",
        open_time: "09:00",
        close_time: "20:00",
        lat: 43.897442371992796,
        lng: -79.27875994348136,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert("orders", [
      {
        userId: 1,
        restaurantId: 1,
        done: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("restaurants", [
      {
        title: "Outback",
        thumbnail_url:
          "https://images.unsplash.com/photo-1606502281004-f86cf1282af5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNoZWZ8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Lunch & Dinner",
        address: "13 Stephen St",
        email: "outback@outback.com",
        phone: 277669,
        city: "Markham",
        prov_state: "Ontario",
        postal: "P34 H89",
        open_time: "11:00",
        close_time: "21:00",
        lat: 43.89667763035046,
        lng: -79.26638230855174,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("restaurants", [
      {
        title: "Regina Phalange",
        thumbnail_url:
          "https://images.unsplash.com/photo-1625937712159-e305336cbf4b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=844&q=80",
        description: "Breakfast",
        address: "420 pineapple St",
        email: "Phellange@gmail.com",
        phone: 9455009,
        city: "Markham",
        prov_state: "Ontario",
        postal: "P30 H8A",
        open_time: "11:00",
        close_time: "21:30",
        lat: 43.89567763035046,
        lng: -79.26538230855174,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("restaurants", [
      {
        title: "Tony Romas",
        thumbnail_url:
          "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Lunch & Dinner",
        address: "191 Burgerville",
        email: "Tonys@hotmail.com",
        phone: 4455019,
        city: "Markham",
        prov_state: "Ontario",
        postal: "P3G H8A",
        open_time: "17:30",
        close_time: "23:30",
        lat: 43.886471264237926,
        lng: -79.27779635908396,
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
    await queryInterface.bulkDelete("orders", null, {});
    await queryInterface.bulkDelete("restaurants", null, {});
  },
};
