console.log('this is loaded');

// Get Spotify API credentials by following these steps:
// Step One: Visit https://developer.spotify.com/my-applications/#!/
// Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.
// Step Three: Once logged in, navigate to https://developer.spotify.com/my-applications/#!/applications/create to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.
// Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down below, you'll need them to use the Spotify API and the node-spotify-api package.

// so i think the SPOTIFY_ID and SPOTIFY_SECRET is going to imported from the .env which is privated because it is ignored.
// that is why we need this keys.js files because it wont be ignored. (at first i thught it was redundant to have two files with keys)
exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};