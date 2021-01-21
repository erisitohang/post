const knex = require('knex')(require('../../configs/db'));
const table = require('../../constants/table');

const fethByUserId = async (userId) => {
  return knex
    .select('id', 'post')
    .from(table.POSTS)
    .where('user_id', userId)
    .orWhereIn(
      'id',
      knex.raw(`SELECT post_id FROM ${table.LIKES} WHERE user_id = ?`, [userId])
    );
};

const fetcByUserFollowed = async (userId) => {
  return knex
    .select('id', 'post')
    .from(table.POSTS)
    .orWhereIn(
      'user_id',
      knex.raw(`SELECT followed_id FROM ${table.FOLLOWERS} WHERE user_id = ?`, [
        userId,
      ])
    );
};

const insert = async (userId, post) => {
  return await knex(table.POSTS).insert({ user_id: userId, post });
};

const fetchMineById = async (userId, id) => {
  return knex
    .select('id', 'post')
    .from(table.POSTS)
    .where('id', id)
    .andWhere('user_id', userId)
    .first();
};

const updateById = async (userId, id, post) => {
  return knex(table.POSTS)
    .where('id', id)
    .andWhere('user_id', userId)
    .update({ post })
    .decrement({
      balance: 50,
    })
    .clearCounters();
};

const deleteById = async (userId, id) => {
  return knex(table.POSTS).where('id', id).andWhere('user_id', userId).del();
};

module.exports = {
  fethByUserId,
  fetcByUserFollowed,
  insert,
  fetchMineById,
  updateById,
  deleteById,
};
