let hourWave = document.querySelector(".hour");
let minuteWave = document.querySelector(".minute");
let secondWave = document.querySelector(".second");

let timeDisplay = document.getElementById("timeDisplay");
let sound = document.getElementById("waveSound");
let soundBtn = document.getElementById("soundBtn");

let isPlaying = false;


soundBtn.addEventListener("click", function(){

  if(isPlaying === false){
    sound.play();
    soundBtn.textContent = "OFF";
    isPlaying = true;
  } else {
    sound.pause();
    soundBtn.textContent = "ON";
    isPlaying = false;
  }

});

function format(n){
  if(n < 10){
    return "0" + n;
  }
  return n;
}

function getTheTime(){
    let now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let ms = now.getMilliseconds();

   
    let secP = (s + ms / 1000) / 60;
    let minP = (m + secP) / 60;
    let hrP = (h + minP) / 24;

    
    let waveOffset = Math.sin(secP * Math.PI * 2) * 20;

    secondWave.style.transform =
      "translateX(" + (-(secP * 400 + waveOffset)) + "px)";

    minuteWave.style.transform =
      "translateX(" + (-(minP * 200 + waveOffset * 0.5)) + "px)";

    hourWave.style.transform =
      "translateX(" + (-(hrP * 80 + waveOffset * 0.2)) + "px)";

   
    let timeText = format(h) + ":" + format(m) + ":" + format(s);
    timeDisplay.textContent = timeText;
}

setInterval(getTheTime, 50);
getTheTime();