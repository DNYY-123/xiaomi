var btn1 = document.getElementsByClassName("mi-nav__item")[0];
var btn2 = btn1.getElementsByTagName("svg")
var btn3 = document.getElementsByClassName("mi-nav_drop")[0];

btn1.addEventListener("mouseenter", changeColor1);
btn1.addEventListener("mouseleave", changeColor2);

function changeColor1() { 
  btn1.style.color = "#fe7945";
  btn2[0].style.display = "none";
  btn2[1].style.transition = "5s";
  btn2[1].style.display = "initial";
  btn2[1].style.transform = "rotate(0deg)";
  btn3.style.display = "initial";
}
function changeColor2() { 
  btn1.style.color = "#000";
  btn2[0].style.display = "initial";
  btn2[1].style.display = "none";
  btn3.style.display = "none";
 }

