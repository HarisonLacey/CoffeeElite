require("dotenv").config();
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

// body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// database connection
require("./database/mongoDB")(mongoose);

// api routes
require("./routes/routes")(app);

// serve react build files
//app.use(express.static(path.join(__dirname, "build")));

//app.get("/*", (req, res) => {
  //res.sendFile(path.join(__dirname, "build", "index.html"));
//});

// server port
let PORT = process.env.PORT || 3001;
app.listen(PORT, (err) => {
  if (err) console.log(err.message);
  console.log(`listening on port ${PORT}`);
});
