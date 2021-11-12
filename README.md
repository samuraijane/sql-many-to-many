# sql-many-to-many

This demo shows a many-to-many relationship betweeen Users and Tasks.

## Steps to execute

- `git clone https://github.com/samuraijane/sql-many-to-many.git`
- `cd sql-many-to-many`
- `npm i`
- be sure that your postgresql server is running
- `npm run db:setup`
- `node ./utils/query.js`

## Steps to create from scratch

Following this demo from scratch is not necessary but may prove helpful in teaching you more deeply how this works

- `mkdir sql-many-to-many`
- `cd !$`
- `npm init -y`
- `npm install dotenv pg sequelize`
- `npm install -D sequelize-cli`
- `npx sequelize-cli init`
- Modify **config/config.json**

* Rename the file to be **config.js** (this makes it possible to user environment variables)
  – Add this code to the file

```
require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DEV_DB_USER,
    "password": process.env.DEV_DB_PASS,
    "database": process.env.DEV_DB_NAME,
    "host": process.env.DEV_DB_HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.TEST_DB_USER,
    "password": process.env.TEST_DB_PASS,
    "database": process.env.TEST_DB_NAME,
    "host": process.env.TEST_DB_HOST,
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.PROD_DB_USER,
    "password": process.env.PROD_DB_PASS,
    "database": process.env.PROD_DB_NAME,
    "host": process.env.PROD_DB_HOST,
    "dialect": "postgres",
    "dialectOptions": {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
  }
}
```

- `touch .env`
  – add this to **.env**

```
DEV_DB_USER=dev_admin
DEV_DB_PASS=admin
DEV_DB_NAME=sql_many_to_many_dev
DEV_DB_HOST=127.0.0.1
```

- In a separate terminal instance
  – `psql postgres`
- Add a new role

```
CREATE USER dev_admin WITH PASSWORD 'admin';
ALTER USER dev_admin WITH SUPERUSER;
```

- Add these scripts to **package.json**

```
    "db:create": "npx sequelize-cli db:create",
    "db:destroy": "npx sequelize-cli db:drop",
    "db:migrate": "npx sequelize-cli db:migrate",
    "db:reset": "npm run db:destroy; npm run db:setup",
    "db:setup": "npm run db:create && npm run db:migrate && npm run db:seed",
    "db:seed": "npx sequelize-cli db:seed:all",
```

- Back in zsh terminal, create models and their accompanying migration files (run each line below separately)

```
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string,password:string
npx sequelize-cli model:generate --name Task --attributes title:string
npx sequelize-cli model:create --name User_Tasks --attributes taskId:integer,userId:integer

```

- Update **/models/index.js**

```
// old
const config = require(__dirname + '/../config/config.json')[env];

// new
const config = require(__dirname + '/../config/config.js')[env];
```

- Create seed files for each (run each line below separately)

```
npx sequelize-cli seed:generate --name task
npx sequelize-cli seed:generate --name user
npx sequelize-cli seed:generate --name user-task
```

- Add data to seed files (WIP)
- Define associations in **/models/task.js** and **/models/user.js** (WIP)
- `npm run db:setup`
- `mkdir -p utils/query.js`
- Add this to **query.js**

```
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
```

- `node ./utils/query.js`
