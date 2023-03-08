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
var btn7 =document.getElementsByClassName("ant-tab_title_login")[0];
var btn8 =document.getElementsByClassName("ant-tab_title_register")[0];


btn1.addEventListener("mouseenter", changeColor1);
btn1.addEventListener("mouseleave", changeColor2);
btn5.addEventListener("focus", changeColor3);
btn6.addEventListener("focus", changeColor3);
btn5.addEventListener("blur", changeColor4);
btn6.addEventListener("blur", changeColor4);

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
  var bom1 = e.target.parentNode.parentNode;
  bom.style.color = "#fe7945";
  bom.style.fontSize = "12px"
  bom.style.top = "-18px"
  bom.style.transition = "top .15s cubic-bezier(.4,0,.2,1),font-size 1s,color .5s";
  bom1.style.border = "1px solid #fe7945";
}

function changeColor4(e) {
  var bom1 = e.target.parentNode.parentNode;
  var bom = e.target.parentNode.children[0];
  if(e.target.value === ""){
    bom.style.color = "#000";
    bom.style.fontSize = "18px"
    bom.style.top = "0"
    bom.style.transition = "top .15s cubic-bezier(.4,0,.2,1),font-size 1s,color .5s";
  }
  bom1.style.border = "none";
}
