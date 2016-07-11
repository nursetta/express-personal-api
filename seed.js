// // This file allows us to seed our application with data
// // simply run: `node seed.js` from the root of this project folder.

//var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })

var db = require('./models');

var movielist = [
  {
  movieTitle: "Step Brothers",
  director: "Adam McKay",
  genre: "Comedy",
  rottenTomatoeRating: "55%",
  link: "https://www.rottentomatoes.com/m/1193743-step_brothers/"
  },
  {
  movieTitle: "Anchorman",
  director: "Adam McKay",
  genre: "Comedy",
  rottenTomatoeRating: "66%",
  link: "https://www.rottentomatoes.com/m/anchorman/"
  },
    {
  movieTitle: "Austin Powers in Goldmember",
  director: "Jay Roach",
  genre: "Comedy",
  rottenTomatoeRating: "54%",
  link: "https://www.rottentomatoes.com/m/austin_powers_in_goldmember/"
  },
    {
  movieTitle: "Iron Man",
  director: "Jon Favreau",
  genre: "Action & Adventure",
  rottenTomatoeRating: "94%",
  link: "https://www.rottentomatoes.com/m/iron_man/"
  },
    {
  movieTitle: "Captain America: The Winter Soldier",
  director: "Joe Russo, Anthony Russo",
  genre: "Action & Adventure",
  rottenTomatoeRating: "89%",
  link: "https://www.rottentomatoes.com/m/captain_america_the_winter_soldier_2014/"
  }
];

db.Movie.remove({}, function(err, movies){
	if (err) { return console.log ('err', err); 
	} else {
		console.log('removed all movies');

	db.Movie.create(movielist, function (err, movies){
		if (err) { return console.log ('error:', err);
	}
		console.log("created", movies.length, "favorite movies");
		process.exit();
		});
	}
});

var profileList = [
  {
    name: 'Nick',
    github_link: 'https://github.com/nursetta',
    github_profile_image: 'https://avatars1.githubusercontent.com/u/19255188?v=3&s=460',
    current_city: 'Denver, CO',
    school: [
      {University: 'University of Colorado', Degree: 'Bachelors of Science', fieldOfStudy: 'Finance'},
      {University: 'General Assembly', Degree: 'Computer Programming', fieldOfStudy: 'JavaScript, HTML, CSS, Node.js'}
    ],
    family_members: [
      {name: 'Kim', relationship: 'Mother'},
      {name: 'Matt', relationship: 'Father'},
      {name: 'Lauri', relationship: 'Sister'},
      {name: 'Jake', relationship: 'Brother'}
    ]
  }
];

db.Profile.remove({}, function(err, profiles){
 if (err) { return console.log ('error:', err); 
 } else {
   console.log('removed all profile history');

 db.Profile.create(profileList, function (err, profiles){
   if (err) { return console.log ('error:', err);
 }
   console.log("created", profiles.length, "profile");
   process.exit();
   });
 }
});