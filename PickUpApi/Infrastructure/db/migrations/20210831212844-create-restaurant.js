'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('restaurants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: sequelize.STRING(128),
        allowNull: false,
      },
      thumbnail_url: {
        type: sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: sequelize.BIGINT,
        allowNull: false,
      },
      city: {
        type: sequelize.STRING,
        allowNull: false,
      },
      prov_state: {
        type: sequelize.STRING,
        allowNull: false,
      },
      postal: {
        type: sequelize.STRING,
        allowNull: false,
      },
      open_time: {
        type: sequelize.STRING,
        allowNull: false,
      },
      close_time: {
        type: sequelize.STRING,
        allowNull: false,
      },
      lat: {
        type: sequelize.DECIMAL,
        allowNull: false,
      },
      lng: {
        type: sequelize.DECIMAL,
        allowNull: false,
      },
      updatedAt: {
        type: sequelize.DATE,
        allowNull: false,
      },
      createdAt: {
        type: sequelize.DATE,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('restaurants');
  }
};