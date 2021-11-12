'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Task.belongsToMany(models.User, {
        as: 'users',
        foreignKey: {
          name: 'taskId',
          allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        otherKey: {
          name: 'userId',
          allowNull: false
        },
        through: 'User_Tasks'
      });
    }
  };
  Task.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};