const jwt = require('jsonwebtoken');
const { APP_SECRET } = require('../configs/env');

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers['authorization'];
  if (!bearerHeader) {
    res.status(401).send();
  }
  const bearer = bearerHeader.split(' ');
  const bearerToken = bearer[1];
  req.token = bearerToken;

  try {
    req.user = jwt.verify(bearerToken, APP_SECRET);
  } catch (e) {
    res.status(401).send({ message: 'Error access user' });
  }

  next();
};

module.exports = verifyToken;
