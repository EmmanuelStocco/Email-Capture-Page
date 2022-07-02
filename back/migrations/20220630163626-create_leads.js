'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('leads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: Sequelize.STRING,
      email: Sequelize.STRING,
      city: Sequelize.STRING,
      gender: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('leads');
  }
};
