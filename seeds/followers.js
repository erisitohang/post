exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('followers')
    .del()
    .then(function () {
      // Inserts seed entries
      const followers = [];
      let follower = {};
      for (let i = 1; i < 19; i += 1) {
        follower = {
          user_id: i + 1,
          followed_id: i,
        };
        followers.push(follower);
        follower = {
          user_id: i + 2,
          followed_id: i,
        };
        followers.push(follower);
      }
      return knex('followers').insert(followers);
    });
};
