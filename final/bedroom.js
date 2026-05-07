
const bed = document.getElementById("bed");
const cdPlayer = document.getElementById("cdPlayer");
const curtain = document.getElementById("curtain");
const desk = document.getElementById("desk")

bed.addEventListener("mouseenter", () => {
  bed.style.transform = "scale(1.12)";
});

bed.addEventListener("mouseleave", () => {
  bed.style.transform = "scale(1)";
});

cdPlayer.addEventListener("mouseenter", () => {
    cdPlayer.style.transform = "scale(1.12)";
});

cdPlayer.addEventListener("mouseleave", () => {
    cdPlayer.style.transform = "scale(1)";
});

curtain.addEventListener("mouseenter", () => {
    curtain.style.transform = "scale(1.12)";
});

curtain.addEventListener("mouseleave", () => {
    curtain.style.transform = "scale(1)";
});

desk.addEventListener("mouseenter", () => {
    desk.style.transform = "scale(1.12)";
});

desk.addEventListener("mouseleave", () =>{
    desk.style.transform = "scale(1)";
});

const bgMusicBedroom = document.getElementById("bgMusicBedroom");

// --- 1. Hover Effects (Simplified with a loop) ---
const interactiveItems = [bed, cdPlayer, curtain, desk];

interactiveItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
        item.style.transform = "scale(1.12)";
    });
    item.addEventListener("mouseleave", () => {
        item.style.transform = "scale(1)";
    });
});

// --- 2. Music Setup ---
bgMusicBedroom.volume = 0.4;

// Auto-play music on the first click anywhere on the page (browser requirement)
window.addEventListener("click", () => {
    if (bgMusicBedroom.paused) {
        bgMusicBedroom.play();
    }
}, { once: true });

// --- 3. Click Actions ---

// CD PLAYER → Toggle Play/Pause (Removed redirect)
cdPlayer.addEventListener("click", () => {
    if (bgMusicBedroom.paused) {
        bgMusicBedroom.play();
        console.log("Music playing");
    } else {
        bgMusicBedroom.pause();
        console.log("Music paused");
    }
});

// Other Navigation
bed.addEventListener("click", () => {
    window.location.href = "bed.html";
});

curtain.addEventListener("click", () => {
    window.location.href = "curtain.html";
});

desk.addEventListener("click", () => {
    window.location.href = "letter.html";
});