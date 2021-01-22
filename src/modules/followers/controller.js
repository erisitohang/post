const catchAsync = require('../../utils/catchAsync');
const service = require('./service');

/**
 * Follow
 */
const store = catchAsync(async (req, res) => {
  const { followed_id } = req.body;
  const userId = req.user.id;
  const followed = await service.getFollowedByUserId(userId, followed_id);
  if (followed) {
    res.status(422).send();
    return;
  }
  await service.follow(userId, followed_id);
  res.send();
});

/**
 * Unfollow
 */
const remove = catchAsync(async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;
  await service.unfollow(userId, id);
  res.send();
});

module.exports = {
  store,
  remove,
};
