

document.addEventListener("DOMContentLoaded", function(){
    var scrollingContent = document.querySelectorAll(".now-playing-content");
    scrollingContent.forEach(function(element) {
        if (element.scrollWidth > element.clientWidth) {
            element.classList.add("autoscroll");
        }
    });
});


document.getElementById("menu1").addEventListener("click", function(){
    var menuButton = document.getElementsByClassName("add-zero");
    for (var i = 0; i < menuButton.length; i++){
        menuButton[i].classList.toggle("zero");
    }
});
document.getElementById("menu2").addEventListener("click", function(){
    var menuButton = document.getElementsByClassName("add-zero");
    for (var i = 0; i < menuButton.length; i++){
        menuButton[i].classList.toggle("zero");
    }
});


// function play(){
//     document.getElementById("audio").play();
    
//     var elem = document.getElementById("play");
//     setAttributes(elem, {
//         "onclick": "pause()",
//         "icon": "ph:pause-duotone",
//         // "class": "fa fa-pause",
//         "id": "pause"
//     });
// }
function play() {
    var audio = document.querySelector("#audio"); 
    audio.play();
    
    var elems = document.querySelectorAll(".play");
    for (var i = 0; i < elems.length; i++) {
        var elem = elems[i];
        elem.setAttribute("onclick", "pause()");
        elem.setAttribute("icon", "ph:pause-duotone");
        elem.classList.remove("play");
        elem.classList.add("pause");
    }
}

function pause() {
    var audio = document.querySelector("#audio"); 
    audio.pause();
    
    var elems = document.querySelectorAll(".pause");
    for (var i = 0; i < elems.length; i++) {
        var elem = elems[i];
        elem.setAttribute("onclick", "play()");
        elem.setAttribute("icon", "ph:play-duotone");
        elem.classList.remove("pause");
        elem.classList.add("play");
    }
}
    


document.getElementById("audio").onended = function(){
    document.getElementById("forward-submit-button").click()
}




function setAttributes(el, attrs){
    for (const key in attrs) {
       el.setAttribute(key, attrs[key])
    }

}
function backward(){

}

// document.getElementById("audio").duration();
// .currentTime
// .ended
var aud = document.getElementById("audio");
if (aud.ended == true) {
    forward();
}
// Get reference to the audio element and range input
const audio = document.getElementById('audio');
const seekBar = document.getElementById('seekBar');
const currentTimeDisplay = document.getElementById('currentTimeDisplay');
const durationDisplay = document.getElementById('durationDisplay');

// Wait for the metadata to be loaded
audio.addEventListener('loadedmetadata', function() {
    // Set the maximum value of the range input to the duration of the audio
    seekBar.max = audio.duration;

    // Convert duration to minutes and seconds
    const minutes = Math.floor(audio.duration / 60);
    const seconds = Math.floor(audio.duration % 60);
    durationDisplay.textContent = minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
});
// Update the value of the range input and current time display as the song progresses
audio.addEventListener('timeupdate', function() {
    seekBar.value = audio.currentTime;

    // Convert current time to minutes and seconds
    const currentMinutes = Math.floor(audio.currentTime / 60);
    const currentSeconds = Math.floor(audio.currentTime % 60);
    currentTimeDisplay.textContent = currentMinutes + ':' + (currentSeconds < 10 ? '0' : '') + currentSeconds;
});
// Update the value of the range input as the song progresses
audio.addEventListener('timeupdate', function() {
    seekBar.value = audio.currentTime;
});

// Update the display of the current time as the user interacts with the range input
seekBar.addEventListener('input', function() {
    audio.currentTime = seekBar.value;
});
