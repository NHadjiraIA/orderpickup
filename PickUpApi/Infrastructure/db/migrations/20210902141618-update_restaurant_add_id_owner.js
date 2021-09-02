'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'restaurants',
      'ownerId',
      {
        type: Sequelize.INTEGER,
        allownNull: false,
        defaultValue: '1'
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('restaurants', 'ownerId');
  }
};
