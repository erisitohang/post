const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const routes = require('../src/routes');
app.use(bodyParser.json());
routes(app);
app.listen(port, function () {
  console.log(`Express app started on port :${port}`);
});

module.exports = app;
