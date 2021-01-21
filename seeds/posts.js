const faker = require('faker');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('posts')
    .del()
    .then(function () {
      // Inserts seed entries
      const posts = [];
      let post = {};
      for (let i = 1; i <= 20; i += 1) {
        post = {
          user_id: i,
          post: faker.lorem.sentence(),
        };
        posts.push(post);
        post = {
          user_id: i,
          post: faker.lorem.sentence(),
        };
        posts.push(post);
      }
      return knex('posts').insert(posts);
    });
};
