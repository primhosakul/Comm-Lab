
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

window.addEventListener("click", () => {
  bgMusicBedroom.volume = 0.4;
  bgMusicBedroom.play();
}, { once: true });

// BED → maybe sleep page
bed.addEventListener("click", () => {
  window.location.href = "bed.html";
});

// CD PLAYER → music page
cdPlayer.addEventListener("click", () => {
  window.location.href = "music.html";
});

// CURTAIN → window/outside page
curtain.addEventListener("click", () => {
  window.location.href = "curtain.html";
});

// DESK → letters page
desk.addEventListener("click", () => {
  window.location.href = "letter.html";
});