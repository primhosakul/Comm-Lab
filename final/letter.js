document.getElementById("backBtn").addEventListener("click", function () {
  window.location.href = "bedroom.html";
});

const backBtn = document.getElementById("backBtn");
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

/* BACK BUTTON */

backBtn.addEventListener("click", () => {

    window.location.href = "bedroom.html";

});

/* MUSIC BUTTON */

let playing = false;

musicBtn.addEventListener("click", () => {

    if (!playing) {

        bgMusic.play();
        bgMusic.volume = 0.4;

        musicBtn.textContent = "Pause Music";

        playing = true;

    } else {

        bgMusic.pause();

        musicBtn.textContent = "Play Music";

        playing = false;
    }

});