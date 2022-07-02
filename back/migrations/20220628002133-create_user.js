'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('users', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    }); 
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('users'); 
  }
};
