const parser = require('body-parser');

const parseBody = (app) => {
  app.use(parser.json());
};

module.exports = parseBody;
