const title = document.querySelector("#title");

function handleResize(event){
    console.log(event);
    //console.log("I've been resized");
}

function handleClick(){
    title.style.color = "red";
    //console.log("I've been resized");
}

window.addEventListener("resize", handleResize)
title.addEventListener("click", handleClick)