const repository = require('./repository');

const getByUserId = async (userId) => {
  return await repository.fethByUserId(userId);
};

const getByUserFollowed = async (userId) => {
  return await repository.fetcByUserFollowed(userId);
};

const addPost = async (userId, post) => {
  return await repository.insert(userId, post);
};

const getMineById = async (userId, id) => {
  return await repository.fetchMineById(userId, id);
};

const updateById = async (userId, id, post) => {
  return await repository.updateById(userId, id, post);
};

const removeById = async (userId, id) => {
  return await repository.deleteById(userId, id);
};

module.exports = {
  getByUserId,
  getByUserFollowed,
  addPost,
  getMineById,
  updateById,
  removeById,
};
