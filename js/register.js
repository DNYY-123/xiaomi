var btn1 = document.getElementsByClassName("mi-nav__item")[0];
var btn2 = btn1.getElementsByTagName("svg")
var btn3 = document.getElementsByClassName("mi-nav_drop")[0];4
var btn4 = btn1.getElementsByClassName("mi-nav_simple")[0];
var btn5 = document.getElementsByClassName("ant-tab_input_item");
// var btn6 = document.getElementsByClassName("ant-tab_input-bgc")[2]
//   .getElementsByClassName("ant-tab_input-code-input")[0]
//   .getElementsByTagName("input")[0];
var btn7 = document.getElementsByClassName("ant-tab_title_login")[0];
var btn8 = document.getElementsByClassName("ant-tab_title_register")[0];
var btn9 = document.getElementsByClassName("ant-tab_bar")[0];
var btn10 = document.getElementsByClassName("mi-register_code")[0];
var btn11 = document.getElementsByClassName("tankuang")[0];
var btn12 =document.getElementsByClassName("mi-register_card_item")[0];

btn9.style.borderBottom = "3px solid #fe7945";
btn9.style.left = "96px";
btn11.style.display = "none";

btn12.style.left = "-370px";

btn1.addEventListener("mouseenter", changeColor1);
btn1.addEventListener("mouseleave", changeColor2);
btn5[0].addEventListener("focus", changeColor3);
btn5[1].addEventListener("focus", changeColor3);
btn5[2].addEventListener("focus", changeColor3);
btn5[3].addEventListener("focus", changeColor3);
btn5[0].addEventListener("blur", changeColor4);
btn5[1].addEventListener("blur", changeColor4);
btn5[2].addEventListener("blur", changeColor4);
btn5[3].addEventListener("blur", changeColor4);
btn7.addEventListener("click", changeColor5);
btn8.addEventListener("click", changeColor5);
btn10.addEventListener("mouseenter", changeColor6);
btn10.addEventListener("mouseleave", changeColor7);

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
  let bom = e.target.parentNode.children[1];
  let bom1 = e.target.parentNode.parentNode;
  bom.style.transition = "top .15s cubic-bezier(.4,0,.2,1),font-size 1s,color .5s";
  bom.style.color = "#fe7945";
  bom.style.fontSize = "12px"
  bom.style.top = "-18px"
  bom1.style.border = "1px solid #fe7945";
}

function changeColor4(e) {
  let bom = e.target.parentNode.children[1];
  let bom1 = e.target.parentNode.parentNode;
  if (e.target.value === "") {
    bom.style.transition = "top .15s cubic-bezier(.4,0,.2,1),font-size 1s,color .5s";
    bom.style.color = "#000";
    bom.style.fontSize = "18px"
    bom.style.top = "0";
  }
  bom1.style.border = "none";
}

function changeColor5(e) {
  let index = e.target.dataset.index;
  btn9.style.transition = "0.5s";
  btn12.style.transition = "0.5s";
  if (index === '0') {
    btn9.style.left = "40px";
    btn12.style.left = "40px";
  } else {
    btn9.style.left = "96px";
    btn12.style.left = "-370px"
  }
}

function changeColor6(){
  btn11.style.transition = "1s";
  btn11.style.display = "initial";
  btn11.style.width = "80px";
  btn11.style.height = "30px";
}
function changeColor7(){
  btn11.style.transition = "0.5s";
  btn11.style.display = "none";
  btn11.style.width = "0px";
  btn11.style.height = "0px";
}