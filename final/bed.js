const draggables = document.querySelectorAll(".draggable");

let activeItem = null;
let offsetX = 0;
let offsetY = 0;

// items dragging

draggables.forEach((item) => {

  item.addEventListener("mousedown", function (e) {

    activeItem = item;

    offsetX = e.clientX - item.offsetLeft;
    offsetY = e.clientY - item.offsetTop;

    item.style.cursor = "grabbing";
  });

});

document.addEventListener("mousemove", function (e) {

  if (!activeItem) return;

  activeItem.style.left = e.clientX - offsetX + "px";
  activeItem.style.top = e.clientY - offsetY + "px";

});

document.addEventListener("mouseup", function () {

  if (activeItem) {
    activeItem.style.cursor = "grab";
  }

  activeItem = null;

});


// music and overlay

window.addEventListener("load", function () {

  const overlay = document.getElementById("overlay");
  const music = document.getElementById("bgMusic");

  overlay.addEventListener("click", function () {

    music.volume = 0.4;

    const playPromise = music.play();

    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.log("Audio blocked:", error);
      });
    }

    overlay.classList.add("fade-out");

    setTimeout(function () {
      overlay.style.display = "none";
    }, 1000);

  });

});