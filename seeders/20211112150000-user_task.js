'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('User_Tasks', [
      {
        taskId: 3,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        taskId: 4,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        taskId: 9,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        taskId: 11,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        taskId: 1,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        taskId: 2,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        taskId: 3,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        taskId: 10,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        taskId: 4,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        taskId: 3,
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        taskId: 5,
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        taskId: 4,
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        taskId: 11,
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User_Tasks', null, {});
  }
};
