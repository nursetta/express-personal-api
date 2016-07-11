var mongoose = require("mongoose");
mongoose.connect( process.env.MONGOLAB_URI ||
                  process.env.MONGOHQ_URL ||
                  process.env.MONGODB_URI || 
                  "mongodb://localhost/personal-api");

module.exports.Movie= require("./movie.js");

module.exports.Profile= require("./profile.js");