const { User, Task, User_Task } = require('../models');

const findAllWithTasks = async () => {
  const users = await User.findAll({
    include: [{
        model: Task,
        as: 'tasks',
        required: false,
        attributes: ['id', 'title'],
        through: {
          model: User_Task,
          as: 'userTasks',
          attributes: [],
        }
    }]
  });
  console.log("All users with their associated tasks:", JSON.stringify(users, null, 4))
};

const run = async () => {
    await findAllWithTasks()
    await process.exit()
}

run();


// This query mocks what you would write at an endpoint in order to query the database and send a response to the client.