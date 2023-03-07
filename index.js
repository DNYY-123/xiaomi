window.addEventListener("wheel", function () {
    let nav = document.getElementById("content")
    let evt = window.scrollY;
    if (evt > 400) {
      nav.style.transition = "0.5s";
      nav.style.backgroundColor = "rgb(0, 0, 0, 0.8)";
    } else {
      nav.style.backgroundColor = "initial";
    }
  }, {
    passive: true
  })

var btn1 = document.getElementsByClassName("btn")[0];
var btn2 = btn1.getElementsByTagName("a")[0];
var btn3 =document.getElementsByClassName("iconfont-message1")[0];
var btn4 =document.getElementsByClassName("iconfont-message2")[0];

btn1.addEventListener("mouseenter", changeColor1);
btn1.addEventListener("mouseleave", changeColor2);

function changeColor1() {
    btn1.style.backgroundColor = "#fe7945";
    btn2.style.color = "#fff";
    btn3.style.display = "none";
    btn4.style.display = "initial";
}
function changeColor2() {
    btn1.style.backgroundColor = "#fff";
    btn2.style.color = "#fe7945";
    btn3.style.display = "initial";
    btn4.style.display = "none";
}