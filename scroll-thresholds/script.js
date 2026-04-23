//add event listener to the window
//the event we want to listen to is called scroll

window.addEventListener("scroll", windowWasScroll)

function getScrollPercentage() {

    let scrollAlready = window.scrollY;

    let pageHeight = document.body.scrollHeight;

    let windowHeight = window.innerHeight;

    let possibleScrollSpace = pageHeight - windowHeight;

    // console.log(scrollAlready, possibleScrollSpace);

    let percentage = (scrollAlready / possibleScrollSpace) * 100;

    return percentage;
}

function windowWasScroll() {
    let percentage = getScrollPercentage();
    console.log("percentage", percentage);

    if (percentage > 33) {
        console.log("paragraph appeared");
        document.querySelector(".one p").style.transform = "rotate(360deg)";
    } else {
        document.querySelector(".one p").style.transform = "rotate(0deg)";
    }

    if (percentage > 77) {
        console.log("paragraph 2 appeared");
        document.querySelector(".two p").style.transform = "scale(10)";
        document.querySelector(".two p").style.color = "yellow";
    } else {
        document.querySelector(".two p").style.transform = "scale(1)";
        document.querySelector(".two p").style.color = "black";
    }

    let windWidth = window.innerWidth;

    let starImg = document.getElementById("starImg");
    let star_x_max = windWidth - 100;
    let star_x = star_x_max * (percentage / 100);

    starImg.style.transform = "translate(" + star_x + "px, 50px)";
}