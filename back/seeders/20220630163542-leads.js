'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('leads', [{
    username: 'João da Silva',
    email: 'joao@teste.com.br',
    city: 'Franca',
    gender: 'Masculino',
    createdAt: new Date(),
    updatedAt: new Date(),
   }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('leads', null, {});
  }
};
