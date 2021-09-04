'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'orders',
      'completed',
      {
        type: Sequelize.BOOLEAN,
        allownNull: false,
        defaultValue: false
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('orders', 'completed');
  }
};
