let container = document.querySelector(".boxContainer");

//define functions:
function addBox(){
    //create an element in JS world
    let paragraph = document.createElement('p');

    //manipulate / configure the element
    paragraph.innerText = "does this work?";

    //put the element onto the actual page
    document.body.append(paragraph);

}

function addBox(){
    let box = document.createElement("div");
    box.className = "box";

    //select the container wwhich the box should go into:
    // let container = document.querySelector(".boxContainer");

    //append box to container:
    container.append(box);

}

function removeAll(){
    // let container = document.querySelector(".boxContainer");
    container.remove("div");

}

function moveContainer(){
    // let container = document.querySelector(".boxContainer");

    let randomNumber = (Math.random()*200)-100;
    console.log(randomNumber);

    container.style.left = randomNumber + "px";

}



