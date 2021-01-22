const knex = require('knex')(require('../../configs/db'));
const table = require('../../constants/table');

const getFollowedByUserId = async (userId, followedId) => {
  return await knex
    .select('user_id', 'followed_id')
    .from(table.FOLLOWERS)
    .where('user_id', userId)
    .andWhere('followed_id', followedId)
    .first();
};

const insert = async (userId, followedId) => {
  return await knex(table.FOLLOWERS).insert({
    user_id: userId,
    followed_id: followedId,
  });
};

const remove = async (userId, followedId) => {
  return knex(table.FOLLOWERS)
    .where('user_id', userId)
    .andWhere('followed_id', followedId)
    .del();
};

module.exports = {
  getFollowedByUserId,
  insert,
  remove,
};
