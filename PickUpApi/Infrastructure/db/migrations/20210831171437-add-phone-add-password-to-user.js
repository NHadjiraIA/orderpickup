'use strict';

const { DataType } = require("sequelize-typescript");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'users',
      'phone',
      {
        type: DataType.BIGINT,
        allownNull: false,
        defaultValue: '0000000000'
      }
    ),
    queryInterface.addColumn(
      'users',
      'password',
      {
        type: Sequelize.STRING,
        allownNull: false,
        defaultValue: '123'
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('users', 'phone'),
    queryInterface.removeColumn('users', 'password')
  }
};
