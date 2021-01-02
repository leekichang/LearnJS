const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    // const hasClass = title.classList.contains(CLICKED_CLASS)
    // if(hasClass){
    //     title.classList.remove(CLICKED_CLASS);
    // }else{
    //     title.classList.add(CLICKED_CLASS);
    // }
    title.classList.toggle(CLICKED_CLASS) // 위랑 완전히 같은 기능
}

function init() {
    title.addEventListener("click", handleClick);
}

init();