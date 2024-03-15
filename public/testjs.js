

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