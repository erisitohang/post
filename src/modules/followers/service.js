const repository = require('./repository');

const getFollowedByUserId = async (userId, followedId) => {
  return await repository.getFollowedByUserId(userId, followedId);
};

const follow = async (userId, followedId) => {
  return await repository.insert(userId, followedId);
};

const unfollow = async (userId, followedId) => {
  return await repository.remove(userId, followedId);
};

module.exports = {
  getFollowedByUserId,
  follow,
  unfollow,
};
