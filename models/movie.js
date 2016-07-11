var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var MovieSchema = new Schema({
  movieTitle: String,
  director: String,
  genre: String,
  rottenTomatoeRating: String,
  link: String

});

var Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;
