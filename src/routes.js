const express = require('express');
const router = express.Router();
const auth = require('./modules/auth/controller');

module.exports = (app) => {
  app.use('/api', router);
  router.post('/auth/login', auth.login);
  router.post('/auth/register', auth.register);
};
