const knex = require('knex')(require('../../configs/db'));
const table = require('../../constants/table');

const getLikeByUserId = async (userId, postId) => {
  return await knex
    .select('user_id', 'post_id')
    .from(table.LIKES)
    .where('user_id', userId)
    .andWhere('post_id', postId)
    .first();
};

const insert = async (userId, postId) => {
  return await knex(table.LIKES).insert({
    user_id: userId,
    post_id: postId,
  });
};

const remove = async (userId, postId) => {
  return knex(table.LIKES)
    .where('user_id', userId)
    .andWhere('post_id', postId)
    .del();
};

module.exports = {
  getLikeByUserId,
  insert,
  remove,
};
