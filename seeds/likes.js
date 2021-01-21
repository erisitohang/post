exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('likes')
    .del()
    .then(function () {
      // Inserts seed entries
      const likes = [];
      let like = {};
      for (let i = 1; i < 19; i += 1) {
        like = {
          user_id: i + 1,
          post_id: i,
        };
        likes.push(like);
        like = {
          user_id: i + 2,
          post_id: i,
        };
        likes.push(like);
      }
      return knex('likes').insert(likes);
    });
};
