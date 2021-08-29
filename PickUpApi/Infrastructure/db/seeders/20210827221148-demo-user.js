'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return await queryInterface.bulkInsert('users', [{
     name: 'Hadjira',
     email: 'bkh.hadjira@gmail.com',
     role: true,
     createdAt: new Date(),
     updatedAt: new Date()
   }])
  },

  down: async (queryInterface, Sequelize) => {
    return  queryInterface.bulkDelete('users', null, {});
  }
};
