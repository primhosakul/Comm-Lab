const overlay = document.getElementById("overlay");
const video = document.getElementById("bgVideo");

const audio = document.getElementById("bgMusic");
const audioBtn = document.getElementById("audioBtn");

const backBtn = document.getElementById("backBtn");

let playing = false;

/* START EXPERIENCE */

overlay.addEventListener("click", () => {

    overlay.classList.add("fade-out");

    video.play();

    setTimeout(() => {
        overlay.style.display = "none";
    }, 1000);

});

/* AUDIO BUTTON */

audioBtn.addEventListener("click", () => {

    if (!playing) {

        audio.play();
        audio.volume = 0.4;

        audioBtn.textContent = "Pause Audio";

        playing = true;

    } else {

        audio.pause();

        audioBtn.textContent = "Play Audio";

        playing = false;
    }

});

/* BACK BUTTON */

backBtn.addEventListener("click", () => {

    window.location.href = "bedroom.html";

});