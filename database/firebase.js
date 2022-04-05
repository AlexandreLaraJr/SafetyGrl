const firebase = require('firebase');

var config = {
    apiKey: "AIzaSyDeKH1rmMEDM-YpbuGeIV0LaH3bJxcR95Q",
    authDomain: "safetygrl-4e842.firebaseapp.com",
    databaseURL: "https://safetygrl-4e842-default-rtdb.firebaseio.com/",
    storageBucket: "safetygrl-4e842.appspot.com"
};

firebase.initializeApp(config);

// Get a reference to the database service
var db = firebase.database();

module.exports = db;
