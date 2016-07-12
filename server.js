// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/************
 * DATABASE *
 ************/

var db = require('./models/');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */
app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/nursetta/express-personal-api", 
    base_url: "",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Displays information about me"}, 
      {method: "GET", path: "/api/movie/:id", description: "Find one favorite movie"},
      {method: "POST", path: "/api/movie", description: "Add a new favorite Movie"},
      {method: "PUT", path: "/api/movie/:id", description: "Update one of my favorite movies"},
      {method: "DELETE", path: "/api/movie/:id", description: "Deletes search an individual movie by ID"}
    ]
  });
});


//get all profile info
app.get('/api/profile', function (req, res) {
  // send all movies as JSON response
  db.Profile.find(function(err, profile){
    if (err) { return console.log("error: " + err); }
    res.json(profile);
  });
});


// INDEX
app.get('/api/movie', function (req, res) {
  // send all movies as JSON response
  db.Movie.find(function(err, movie){
    if (err) { return console.log("error: " + err); }
    res.json(movie);
  });
});

// SHOW method
app.get('/api/movie/:id', function(req, res) {
  var movieToShow = {"movieTitle": req.params.id};
  db.Movie.findOne(movieToShow, function(err, movie){
    if (err) { return console.log("error: " + err); }
    res.json(movie);
  });
});

//CREATE Method
app.post('/api/movie', function (req, res) {
var newMovie = new db.Movie({
  movieTitle: req.body.movieTitle,
  director: req.body.director,
  genre: req.body.genre,
  rottenTomatoeRating: req.body.rottenTomatoeRating,
  link: req.body.link,
});
    newMovie.save(function(err, movies){
      if (err) {
        return console.log("save error: " + err);
      }
      console.log("saved ", movies.movieTitle);
      res.json(movies);
    });
});

//DELETE Method
app.delete('/api/movie/:id', function (req, res) {
  // get movie id from url params (`req.params`)
  console.log('movie delete', req.params);
  var movieId = req.params.id;
  // find the index of the movie we want to remove
  db.Movie.findOneAndRemove({ _id: movieId }, function (err, deletedMovie) {
    res.json(deletedMovie);
  });
});

//PUT Method 
app.put('/api/movie/:id', function (req, res) {
 var movieId = req.params.id;
 var update = req.body;
 db.Movie.findOneAndUpdate({_id: movieId}, update, function(err, movie){
   if (err) { return console.log("create error: " + err); }
   res.json(movie);
 });
});
/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
