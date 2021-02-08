
//全局
let scrollTop;
let visibleWidth = document.documentElement.clientWidth;//浏览器可用宽度
let visibleHeight = document.documentElement.clientHeight;//浏览器可用高度

//渐渐出现/退出动画效果
let commonFadeInOut = $(".common_fade_inout");
let commonFadeInOutLen = commonFadeInOut.length;

//滑动移动动画效果
let commonSlideMove = $(".common_slide_move");
let commonSlideMoveLen = commonSlideMove.length;

//缩放移动动画效果
let commonZoomMove = $(".common_zoom_move");
let commonZoomMoveLen = commonZoomMove.length;

//视频缩放动画效果
let commonVideoBox = $(".common_video_box");//存放视频的盒子
let commonVideoBoxLen = commonVideoBox.length;
let commonVideoModel = $(".common_video_model");//视频上面的蒙版

//浏览器大小变化时重新获取宽高
window.addEventListener('resize', () => {
    visibleWidth = document.documentElement.clientWidth;
    visibleHeight = document.documentElement.clientHeight;

    //绑定公共动画
    commonAnimationAll();

});

//页面滚动
window.addEventListener('scroll', () => {
    //绑定公共动画
    commonAnimationAll();

});

function commonAnimationAll() {

    //渐渐出现/退出动画效果
    for (let i = 0; i < commonFadeInOutLen; i++) {
        fadeInOut(commonFadeInOut[i]);
    }

    //滑动移动动画效果
    for (let i = 0; i < commonSlideMoveLen; i++) {
        slideMove(commonSlideMove[i]);
    }

    //缩放移动动画效果
    for (let i = 0; i < commonZoomMoveLen; i++) {
        zoomMove(commonZoomMove[i]);
    }

    //添加视频缩放动画效果
    for (let i = 0; i < commonVideoBoxLen; i++) {
        videoZoom(commonVideoBox[i], commonVideoModel[i]);
    }

}

//渐渐出现/退出动画效果
function fadeInOut(dom) {
    let top = dom.getBoundingClientRect().top;
    let rank = dom.dataset.rank?Number(dom.dataset.rank):0.8;
    if (top < visibleHeight * rank) {
        dom.style.opacity = "1";
        dom.style.transform = 'translateY(0)';
    }
    else {
        dom.style.opacity = "0";
        dom.style.transform = 'translateY(100px)';
    }
}

//滑动移动
function slideMove(dom) {
    let speed = dom.dataset.speed?Number(dom.dataset.speed):30;
    let top = dom.getBoundingClientRect().top;
    if (top <= visibleHeight * 0.8) {
        dom.style.opacity = "1";
        dom.style.transform = 'translate(0,' + (-Math.abs(top - visibleHeight) / speed) + 'px)';
    }
    else {
        dom.style.opacity = "0";
        dom.style.transform = 'translate(0,0)';
    }
}

//缩放移动
function zoomMove(dom) {
    let speed = dom.dataset.speed?Number(dom.dataset.speed):30;
    let top = dom.getBoundingClientRect().top;
    if (top <= visibleHeight * 0.8) {
        dom.style.transform = 'scale(1) translate(0,' + (-Math.abs(top - visibleHeight) / speed) + 'px)';
    }
    else {
        dom.style.transform = 'scale(0) translate(0,0)';
    }
}


//视频缩放
function videoZoom(box, model) {
    let distance = box.dataset.type?Number(box.dataset.type):-0.2;
    let top = box.getBoundingClientRect().top;
    if (top / visibleHeight <= distance) {
        model.style.clipPath = 'polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%, 100% 100%, 100% 0%)';
    }
    else {
        model.style.clipPath = 'polygon(0% 0%, 0% 100%, 12% 100%, 12% 12%, 88% 12%, 88% 88%, 12% 88%, 12% 100%, 100% 100%, 100% 0%)';
    }
}

//文字颜色渐变
function wordsGradient(dom, FC, SC, TC, EC) {
    let top = dom.getBoundingClientRect().top;

    // 三色渐变
    if (top / visibleHeight < 0.2) {
        dom.style.backgroundImage = 'linear-gradient(-45deg, ' + FC + ' ' + (-200) + '%, ' + SC + ' ' + (-100) + '%, ' + TC + ' ' + (0) + '%)';
    }
    else if (top / visibleHeight >= 0.2 && top / visibleHeight <= 0.8) {
        dom.style.backgroundImage = 'linear-gradient(-45deg, ' + FC + ' ' + (100 - (400 - 5 * (top / visibleHeight * 100))) + '%, ' + SC + ' ' + (200 - (400 - 5 * (top / visibleHeight * 100))) + '%, ' + TC + ' ' + (300 - (400 - 5 * (top / visibleHeight * 100))) + '%)';
    }
    else if (top / visibleHeight > 0.8) {
        dom.style.backgroundImage = 'linear-gradient(-45deg, ' + FC + ' ' + (100) + '%, ' + SC + ' ' + (200) + '%, ' + TC + ' ' + (300) + '%)';
    }

    //四色渐变
    // if (top / visibleHeight < 0.2) {
    // 	dom.style.backgroundImage = 'linear-gradient(-45deg, ' + FC + ' ' + (-300) + '%, ' + SC + ' ' + (-200) +
    // 		'%, ' + TC + ' ' + (-100) + '%, ' + EC + ' ' + (0) + '%)';
    // } else if (top / visibleHeight >= 0.2 && top / visibleHeight <= 0.8) {
    // 	dom.style.backgroundImage = 'linear-gradient(-45deg, ' + FC + ' ' + (100 - (533.3333 - 6.6666 * (top /
    // 			visibleHeight * 100))) + '%, ' + SC + ' ' + (200 - (533.3333 - 6.6666 * (top / visibleHeight *
    // 			100))) + '%, ' + TC + ' ' + (300 - (533.3333 - 6.6666 * (top / visibleHeight * 100))) +
    // 		'%, ' + EC + ' ' + (400 - (533.3333 - 6.6666 * (top / visibleHeight * 100))) + '%)';
    // } else if (top / visibleHeight > 0.8) {
    // 	dom.style.backgroundImage = 'linear-gradient(-45deg, ' + FC + ' ' + (100) + '%, ' + SC + ' ' + (200) + '%, ' +
    // 		TC + ' ' + (300) + '%, ' + EC + ' ' + (400) + '%)';
    // }

}

//背景图移动
function bgMove(dom) {
    let top = dom.getBoundingClientRect().top;
    if (top <= visibleHeight) {
        dom.style.backgroundPosition = '50% ' + 'calc(' + (-Math.abs(top - visibleHeight) / 15) + 'px + 50%)';
    } else {
        dom.style.backgroundPosition = '50% 50%';
    }
}

//获取滚动条高度
function getScrollTop() {
    let scrollTop = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
    } else if (document.body) {
        scrollTop = document.body.scrollTop;
    }
    return scrollTop;
}