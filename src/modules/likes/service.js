const repository = require('./repository');

const getLikeByUserId = async (userId, followedId) => {
  return await repository.getLikeByUserId(userId, followedId);
};

const like = async (userId, followedId) => {
  return await repository.insert(userId, followedId);
};

const unlike = async (userId, followedId) => {
  return await repository.remove(userId, followedId);
};

module.exports = {
  getLikeByUserId,
  like,
  unlike,
};
