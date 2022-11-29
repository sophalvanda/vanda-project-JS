//================light============
function changeToDark(){
    document.body.style.background="#1b2a41";

    document.querySelector(".dark").style.display = "none"
    document.querySelector(".light").style.display = "block"
    document.querySelector(".footer").style.color = "white"
    document.querySelector(".footer").style.backgroundColor = "#1b2a41"

    document.querySelector("nav").style.backgroundColor = "#1b2a41"
    document.querySelector(".container").style.color = "white"
    document.querySelector(".aside").style.color = "white"
    document.querySelector(".contact").style.color = "white"
    document.querySelector("#bg-img").style.backgroundColor = "white"
    document.querySelector("#ig-img").style.backgroundColor = "white"
    document.querySelector("#in-img").style.backgroundColor = "white"

    document.querySelector(".detail").style.color = "white"
 


    // document.querySelector(".logo").style.backgroundColor = "#1b2a41"



}
function changeToLight(){

    document.body.style.background = "#fff";

    document.querySelector(".dark").style.display = "block";
    document.querySelector(".light").style.display = "none";
    document.querySelector(".footer").style.color = "black"
    document.querySelector(".footer").style.backgroundColor = "#D9D9D9"
    document.querySelector("nav").style.backgroundColor = "#D9D9D9"
    document.querySelector(".material-icons").style.color = "white"

    document.querySelector(".container").style.color = "black"
    document.querySelector(".aside").style.color = "black"
    document.querySelector(".contact").style.color = "black"

    document.querySelector(".detail").style.color = "black"
  
}

// 