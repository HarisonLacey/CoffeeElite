const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// newsletter schema
const Newsletter = new Schema({
  name: String,
  email: String,
});

module.exports = mongoose.model("newsletter", Newsletter);
