const functions = require("../functions/functions");

// routes
module.exports = (app) => {
  app.post("/newsletter", functions.newsletter);
};
