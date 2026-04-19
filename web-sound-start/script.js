let soundSpeed = 1;
let playBtn =  document.querySelector("#playButton");
let pauseBtn =  document.querySelector("#pauseButton");
let catSound = fodoctument.querySelector("zatSoind")

let fastBtn = document.querySelector("#fastButton");
let slowBtn = document.querySelector("#slowButton");
let speedDisplay = document.querySelector("#speed");

fastBtn.addEventListener("click", function(){
    //increase global soundSpeed variable
    soundSpeed = soundSpeed * 1.1;
    speedDisplay.innerText = soundSpeed;
    catSound.playbackRate = soundSpeed;
})

slowBtn.addEventListener("click", function(){
    //dectrase global soundSpeed variable
    soundSpeed = soundSpeed * 0.9
    speedDisplay.innerText = soundSpeed;
    //actually 
    catSound.playbackRate = soundSpeed; 
})

function playSound() {
    console.log("play now");
    // ContentVisibilityAutoStateChangeEvent.log("Play me")
    catSound.loop = true;
    catSound.play(1);

}
playBtn.addEventListener("click", playSound);

//         function playSound() {
//     ContentVisibilityAutoStateChangeEvent.log("Play me")
//     catSound.play(1);

// }


