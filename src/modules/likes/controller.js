const catchAsync = require('../../utils/catchAsync');
const service = require('./service');

/**
 * User like post
 */
const store = catchAsync(async (req, res) => {
  const { post_id } = req.body;
  const userId = req.user.id;
  const liked = await service.getLikeByUserId(userId, post_id);
  if (liked) {
    res.status(422).send();
    return;
  }
  await service.like(userId, post_id);
  res.send();
});

/**
 * Unlike post
 */
const remove = catchAsync(async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;
  await service.unlike(userId, id);
  res.send();
});

module.exports = {
  store,
  remove,
};
