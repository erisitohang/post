const knex = require('knex')(require('../../configs/db'));
const table = require('../../constants/table');

const findByEmail = async (email) => {
  const user = await knex(table.USERS).where({ email }).first();
  return user;
};

const insert = async (name, email, password) => {
  return await knex(table.USERS).insert({ name, email, password });
};

module.exports = {
  findByEmail,
  insert,
};
