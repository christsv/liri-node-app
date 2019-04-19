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