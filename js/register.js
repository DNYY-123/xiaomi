var btn1 = document.getElementsByClassName("mi-nav__item")[0];
var btn2 = btn1.getElementsByTagName("svg")
var btn3 = document.getElementsByClassName("mi-nav_drop")[0];
var btn4 = btn1.getElementsByClassName("mi-nav_simple")[0];
var btn5 = document.getElementsByClassName("ant-tab_input-bgc")[1]
  .getElementsByClassName("ant-tab_input-phone-input")[0]
  .getElementsByTagName("input")[0];
var btn6 = document.getElementsByClassName("ant-tab_input-bgc")[2]
  .getElementsByClassName("ant-tab_input-code-input")[0]
  .getElementsByTagName("input")[0];
var btn7 = document.getElementsByClassName("ant-tab_input-bgc")[1]
  .getElementsByClassName("ant-tab_input-phone-input")[0]
  .getElementsByTagName("label")[0];
var btn8 = document.getElementsByClassName("ant-tab_input-bgc")[2]
  .getElementsByClassName("ant-tab_input-code-input")[0]
  .getElementsByTagName("label")[0];

btn1.addEventListener("mouseenter", changeColor1);
btn1.addEventListener("mouseleave", changeColor2);
btn5.addEventListener("focus", changeColor3);
btn6.addEventListener("focus", changeColor3);

function changeColor1() {
  btn4.style.color = "#fe7945";
  btn2[0].style.display = "none";
  btn2[1].style.transition = "5s";
  btn2[1].style.display = "initial";
  btn2[1].style.transform = "rotate(0deg)";
  btn3.style.display = "initial";
}
function changeColor2() {
  btn4.style.color = "#000";
  btn2[0].style.display = "initial";
  btn2[1].style.display = "none";
  btn3.style.display = "none";
}

function changeColor3(e) {
  var bom = e.target.parentNode.children[0];
  bom.style.transition = "0.5s"
  bom.style.color = "#fe7945";
  bom.style.transition = "0.5s"
  bom.style.fontSize = "20px"
  bom.style.transition = "0.5s"
  bom.style.top = "-15px"
}
