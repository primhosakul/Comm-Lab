const introMusic = document.getElementById("introMusic");
const doorSound = document.getElementById("doorSound");
const doorDiv = document.getElementById("sceneOne");
const startScreen = document.getElementById("startScreen");


startScreen.addEventListener("click", function() {
    introMusic.play();           // Intro music starts
    startScreen.style.display = "none"; // Start screen disappears
    
});


doorDiv.addEventListener("click", function() {
    introMusic.pause();         // Stop intro music
    doorSound.play();           // Play door sound
    
    
    doorSound.onended = function() {
        window.location.href = "bedroom.html";
    };
});
