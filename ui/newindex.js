document.addEventListener("DOMContentLoaded", function(){
    var scrollingContent = document.querySelector(".now-playing-content");
    if (scrollingContent.scrollWidth > scrollingContent.clientWidth) {
        scrollingContent.classList.add("autoscroll");
    }
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


function play(){
    document.getElementById("audio").play();
    
    var elem = document.getElementById("play");
    setAttributes(elem, {
        "onclick": "pause()",
        "class": "fa fa-pause",
        "id": "pause"
    });
}
function pause(){
    document.getElementById("audio").pause();
    var elem = document.getElementById("pause");
    setAttributes(elem, {
        "onclick": "play()",
        "class": "fa fa-play",
        "id": "play"
    });

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
