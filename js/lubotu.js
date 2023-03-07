var contain = document.getElementById("lunbotu1")
var imageList = document.getElementById("lunbotu2");  // 容器
var imageWidth = imageList.children[0].clientWidth;  //  
var imageLength = imageList.children.length;
var nextBtn = document.getElementsByClassName("next")[0];
var prevBtn = document.getElementsByClassName("prev")[0];
var imageNavbarBtn = document.getElementsByClassName("num-ul")[0].getElementsByTagName("li")

var currentIndex = 0;  //  预设当前图片索引为0
var timer = null;      //  设置定时器
imageNavbarBtn[currentIndex].style.backgroundColor = "#ff6900";  //  预设第一个导航栏样式

// 上一张
nextBtn.addEventListener("click", nextPic)
function prevPic() {
    imageNavbarBtn[currentIndex].style.backgroundColor = "";
    imageList.style.transition = "0.5s";
    if (currentIndex === 0) {
        imageList.style.transition = "0s";
        currentIndex = 4;
    } else {
        currentIndex -= 1;
    }
    imageNavbarBtn[currentIndex].style.backgroundColor = "#ff6900";
    imageList.style.marginLeft = -imageWidth * currentIndex + 'px';
}

// 下一张
prevBtn.addEventListener("click", prevPic)
function nextPic() {
    imageNavbarBtn[currentIndex].style.backgroundColor = "";
    imageList.style.transition = "0.5s";
    if (currentIndex === 4) {
        imageList.style.transition = "0s";
        currentIndex = 0;
    } else {
        currentIndex += 1;
    }
    imageNavbarBtn[currentIndex].style.backgroundColor = "#ff6900";
    imageList.style.marginLeft = -imageWidth * currentIndex + 'px';
}

// 自动播放
contain.addEventListener("mouseleave", autoPlay)
function autoPlay() {
    timer = setInterval(nextPic, 3000);
}

// 关闭自动播放
contain.addEventListener("mouseenter", stopAutoPlay)
function stopAutoPlay() {
    clearInterval(timer);
}
