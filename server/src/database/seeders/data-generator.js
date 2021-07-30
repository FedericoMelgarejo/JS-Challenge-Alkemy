'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkInsert('operations', [{
        concept: 'market',
        amount: 2500,
        type: 'income',
        date: '2021/12/21'
      },
      {
        concept: 'work',
        amount: 2500,
        type: 'income',
        date: '2021/12/21'
      },
      {
        concept: 'family bussines',
        amount: 2500,
        type: 'income',
        date: '2021/12/21'
      },
      {
        concept: 'market',
        amount: 2500,
        type: 'income',
        date: '2021/12/21'
      },
      {
        concept: 'gas',
        amount: 2500,
        type: 'expense',
        date: '2021/12/21'
      },
      {
        concept: 'internet',
        amount: 4000,
        type: 'expense',
        date: '2021/12/21'
      },
      {
        concept: 'cinema',
        amount: 2500,
        type: 'expense',
        date: '2021/12/21'
      }], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
