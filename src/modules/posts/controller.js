const catchAsync = require('../../utils/catchAsync');
const service = require('./service');
const validator = require('validator');

/**
 * List my post
 */
const list = catchAsync(async (req, res) => {
  const { id } = req.user;
  const posts = await service.getByUserId(id);
  res.send(posts);
});

/**
 * List my followed post
 */
const followed = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const posts = await service.getByUserFollowed(userId);
  res.send(posts);
});

/**
 * Add new post
 */
const store = catchAsync(async (req, res) => {
  const { post } = req.body;
  if (!post) {
    res.status(422).send();
    return;
  }
  const { id } = req.user;
  const newPost = await service.addPost(id, post);

  res.send({ post });
});

/**
 * Read post by id
 */
const read = catchAsync(async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;
  const post = await service.getMineById(userId, id);
  if (!post) {
    res.status(422).send();
    return;
  }
  res.send(post);
});

/**
 * update post
 */
const update = catchAsync(async (req, res) => {
  const { id, post } = req.body;
  console.log(id, post);
  const userId = req.user.id;
  if (!id || !post) {
    res.status(422).send();
    return;
  }

  await service.updateById(userId, id, post);
  res.send({ id, post });
});

/**
 * Remove post
 */
const remove = catchAsync(async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;
  await service.removeById(userId, id);
  res.send();
});

module.exports = {
  list,
  followed,
  store,
  read,
  update,
  remove,
};
