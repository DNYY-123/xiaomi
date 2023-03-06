var imageList = document.getElementById("lunbotu2");  // 容器
var imageWidth = imageList.children[0].clientWidth;  //  
var imageLength = imageList.children.length;
var left = 0;
var currentIndex = 0;  // 预设当前图片索引为0
var timer = null;
var speed;
// 获取显示器窗口变化大小
window.addEventListener("resize", () => {
    oldImageWidth = imageWidth
    imageWidth = window.innerWidth
})
// run();
// // 自动播放
// function run() {
//     if (left <= -imageWidth * imageLength) {
//         left = 0;
//     }
//     imageList.style.marginLeft = left + 'px';
//     var n;
//     if ((left + step * oldImageWidth) == -imageWidth) {
//         n = 3000;
//         step += 1;
//         console.log(left, step, oldImageWidth)
//     } else {
//         n = imageWidth / 16;
//     }
//     left -= imageWidth / 16;
//     timer = setTimeout(run, n)
// }

// 下一张
function nextPic() {
    if (left <= -imageWidth * imageLength) {
        left = 0;
    }
    if (currentIndex <= 4) {
        currentIndex += 1;
        imageList.style.marginLeft = left + 'px';
    } else {
        currentIndex = 0;
    }
    if (left % imageWidth == 0) {
        speed = 3000;
    }
        left -= imageWidth / 16;
}

// 自动播放
function autoPlay() {
    speed = imageWidth / 16;
    timer = setInterval(nextPic, speed);
}
autoPlay()
