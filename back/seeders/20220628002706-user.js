'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      username: 'Emmanuel',
      password: '$2a$08$SLzx5zsGWvHe0LTN3VYTJ.N0fIRDYf1NbujsnAxoLnp4jHGWcIDke',
      email: 'admin@admin.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {}); 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {}); 
  }
};
