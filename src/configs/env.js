const path = require('path');
const fs = require('fs');
const envFile = path.join(__dirname, '..', '..', '/.env');
if (fs.existsSync(envFile)) {
  require('dotenv').config({ path: envFile });
} else {
  require('dotenv').config();
}

module.exports = {
  APP_SECRET: process.env.APP_URL || 'super-secret-key-crate-api',
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_USERNAME: process.env.DB_USERNAME || 'root',
  DB_PASSWORD: process.env.DB_PASSWORD || '',
  DB_NAME: process.env.DB_NAME || 'gigi',
};
