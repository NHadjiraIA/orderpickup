'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ratings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: sequelize.INTEGER,
        allowNull: false,
      },
      restaurantId: {
        type: sequelize.INTEGER,
        allowNull: false,
      },
      rating: {
        type: sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    queryInterface.addColumn(
      'orders',
      'done',
      {
        type: sequelize.BOOLEAN,
        allownNull: false,
        defaultValue: false
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ratings');
    queryInterface.removeColumn('orders', 'done')
  }
};