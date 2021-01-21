const { join } = require('path');

const connection = {
  host: 'us-cdbr-east-03.cleardb.com',
  user: 'b14ea8853958c0',
  password: '89ba0fd4',
  database: 'heroku_2234a1f8da5e672',
};

const knex = {
  client: 'mysql',
  connection,
  migrations: {
    directory: join(__dirname, '../migrations'),
  },
  seeds: {
    directory: join(__dirname, '../seeds'),
  },
};

module.exports = knex;
