const express = require('express');
const router = express.Router();
const verifyToken = require('./middleware/authenticate');

const auth = require('./modules/auth/controller');
const posts = require('./modules/posts/controller');
const followers = require('./modules/followers/controller');
const likes = require('./modules/likes/controller');

module.exports = (app) => {
  app.use('/api', router);
  router.post('/auth/login', auth.login);
  router.post('/auth/register', auth.register);
  router.get('/posts', verifyToken, posts.list);
  router.get('/posts/followed', verifyToken, posts.followed);
  router.post('/posts', verifyToken, posts.store);
  router.get('/posts/:id', verifyToken, posts.read);
  router.put('/posts', verifyToken, posts.update);
  router.delete('/posts/:id', verifyToken, posts.remove);
  router.post('/followers', verifyToken, followers.store);
  router.delete('/followers/:id', verifyToken, followers.remove);
  router.post('/likes', verifyToken, likes.store);
  router.delete('/likes/:id', verifyToken, likes.remove);
};
