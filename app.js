const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const audioMetaData = require('audio-metadata');
const fs = require('fs');
// import { error } from "console";
// import { parseFile } from "music-metadata";
// import { inspect } from "util";

// (async()=>{
//     try {
//         const metadat = await parseFile(__dirname + "/public/audio/03-Davido-IN-THE-GARDEN-Ft-Morravey-(JustNaija.com).mp3")
//         console.log(inspect(metadat, {showHidden: false, depth: null}));
//     } catch (error) {
//         console.error(error.message);
//     }
// })();

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


let audioClicked = "";
let metadataArray = [];
let songDir = "";
let songClickedValue = 0;
var newSong;
app.get("/", function(req, res){
     songDir = fs.readdirSync("public/audio/");


songDir.forEach(function(song){
    var theSong = fs.readFileSync("public/audio/" + song);
    var metadata = audioMetaData.id3v2(theSong);
    
    metadataArray.push(metadata);
});

if (audioClicked == "") {
    audioClicked = metadataArray[0];
} 
    
   //console.log(audioClicked) 

 newSong = "./audio/" + songDir[songClickedValue];
    res.render("newindex", {songDir: songDir, metadataArray: metadataArray, audioClicked: audioClicked, newSong: newSong, songClickedValue: songClickedValue});
});

app.post("/", function(req, res){
    console.log("post request received")
    console.log(req.body.songClicked)
    songClickedValue = req.body.songClicked;
     audioClicked = metadataArray[req.body.songClicked];
    // console.log(songClicked)
//console.log(audioClicked);
    res.redirect("/")
})

app.post("/backward", function(req, res){
    
   var rewind =  req.body.back - 1;
   if (rewind < 0) {
    rewind = songDir.length
   }
   songClickedValue = rewind;
   audioClicked = metadataArray[rewind];
   console.log(rewind);
   res.redirect("/");
});

app.post("/forward", function(req, res){
    
    var skip =  parseInt(req.body.front) + 1;
    if (skip > songDir.length) {
     skip = 0;
    }
    songClickedValue = skip;
    audioClicked = metadataArray[skip];
    console.log(skip);
    res.redirect("/");
 });


app.listen(3000, function(){
    console.log("music app is ready on port 3000");
})



