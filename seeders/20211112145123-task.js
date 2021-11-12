'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tasks', [
      {
        title: 'Mow the lawn',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Sweep the floor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Dust the furniture',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Clean the dishes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Weed the garden',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Vacuum the living room',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Disinfect the bathroom',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Make the bed',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Organize the office',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Fold the laundry',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Mend the curtains',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tasks', null, {});
  }
};
