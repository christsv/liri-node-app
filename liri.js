require("dotenv").config();

//Import node-spotify ap npm package
var Spotify = require("node-spotify-api");
//Import API keys. you use ./keys because it is a js file that you made and you have to find the directory
var keys = require("./keys");
//Import axios npm package
var axios = require("axios");
//Import the moment npm package
var moment = require("moment");
//Import the fs package for read/write.
var fs = require("fs");

// Initialize the spotify API client to access the keys
var spotify = new Spotify(keys.spotify);

// console.log(spotify.credentials.id); this is shows the "this is loaded" then the ID immediately

var nodeArgs = process.argv[2];
// this starts at the 3 node and "node(0) liri.s(1) concert-this(2) <artist>(3)" and takes artist joins every word after by a "space"
// then returns it as one node
var name = process.argv.slice(3).join("+");

var log = nodeArgs + "," + name + " = ";

var getBands = function(artist) {

    axios.get("https://rest.bandsintown.com/artists/" + artist + "?app_id=codingbootcamp").then(
        function(response){
            var data = response.data;
            console.log("For now: " + data.name);
        })
};

var getMovie = function(movie) {

    axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy").then(
        function(response){
            var data = response.data;

            console.log("Title: " + data.Title);
            console.log("Year: " + data.Year);
            console.log("Rated: " + data.Rated);
            console.log("IMDB Rating: " + data.imdbRating);
            console.log("Country: " + data.Country);
            console.log("Language: " + data.Language);
            console.log("Plot: " + data.Plot);
            console.log("Actors: " + data.Actors);
            console.log("Rotten Tomatoes Rating: " + data.Ratings[1].Value);
        })
};

var getSpotify = function(song){
    
    //here we are using a callback
    spotify.search({type: 'track', query: song}, function(err, data){
        if(err) { 
            return console.log("Error occured: " + err);
        }
       
        var songs = data.tracks.items;

        for (var i = 0; i < songs.length; i++) {
          console.log(i);
          //look up map or just do the old hardcode way
          console.log("artist(s): " + songs[i].artists[i].name);
          console.log("song name: " + songs[i].name);
          console.log("preview song: " + songs[i].preview_url);
          console.log("album: " + songs[i].album.name);
          console.log("-----------------------------------");
        }
    })

    fsAppAppend();
};

var fsAppRead = function(){

    fs.readFile("random.txt", "utf8", function(error, data){

        if(error){
            return console.log(error);
        }

// splits it to ['spotify-this-song', "I want it that Way"]
        var dataArr = data.split(",");
        pick(dataArr[0], dataArr[1]);
    })

    fsAppAppend();
}

var fsAppAppend = function(){
    fs.appendFile("log.txt", log, function(err){
        if(err){
            console.log(err);
        }
    })
}


//we made this switch case a function so that when we run the fs npm package we can use parameters to read the txt and make it dynamic
var pick = function(nodeArgs, name){
switch(nodeArgs) {
    case "concert-this":
        getBands(name);
        break;
    case "movie-this":
        getMovie(name);
        break;
    case "spotify-this-song":
        getSpotify(name);
        break;
    case "do-what-it-says":
        fsAppRead();
        break;
    default:
        console.log("LIRI cannot find");
}};

pick(nodeArgs,name);