let winheight; // 获取屏幕可视区域高度
let commonWordTitle = $('.ui_common_word .title'); // 介绍文字title
let commonWordTxt = $('.ui_common_word .txt'); // 介绍文字txt

let commonLeftInout = $('.ui_common_left_inout'); // 左侧出现公共方法
let commonRightInout = $('.ui_common_right_inout'); // 左侧出现公共方法

let commonOpacityInout = $('.ui_common_opacity_inout'); // 淡入公共方法
let commonScaleInout = $('.ui_common_scale_inout'); // 缩放公共方法

function animationAllEvent() {
    textAnimationDomData(commonWordTitle);
    textAnimationDomData(commonWordTxt);
    leftInoutDomData(commonLeftInout); // 左侧进入动效
    rightInoutDomData(commonRightInout); // 右侧进入动效
    opacityInoutDomData(commonOpacityInout); // 淡入动效
    scaleInoutDomData(commonScaleInout); // 缩放进入动效
}
// 滚动事件监听
window.addEventListener('scroll', () => {
    winheight = window.innerHeight; // 获取屏幕可视区域高度
    animationAllEvent();
});
// 监听窗体变化、重新执行动画、获取高度
window.addEventListener('resize', () => {
    winheight = window.innerHeight; // 获取屏幕可视区域高度
    animationAllEvent();
});
/**
 *  文字动效数据处理
 * 同类型文字添加动效
 * @param {*} domListData dom List 相同类名数据
 */
function textAnimationDomData(domListData) {
    for (let j = 0; j < domListData.length; j++) {
        const item = domListData[j];
        setTextTransFormY(item);
    }
}
/**
 * 文字添加动效 上移
 * 单个文字添加动效
 * @param {*} domNode 需要添加动效的节点dom
 */
function setTextTransFormY(domNode) {
    let domTopHei = domNode.getBoundingClientRect().top;
    if (domTopHei <= winheight && domTopHei > 0) {
        domNode.style.transform = 'translateY(0)';
        domNode.style.opacity = 1;
    } else if (domTopHei > winheight) {
        domNode.style.transform = 'translateY(100px)';
        domNode.style.opacity = 0;
    }
}


/**
 * 同类型左侧出现动效
 * @param {*} commonleftInoutDom dom List 相同类名数据
 */
function leftInoutDomData(commonleftInoutDom) {
    for (let j = 0; j < commonleftInoutDom.length; j++) {
        const item = commonleftInoutDom[j];
        leftInOut(item);
    }
}
/**
 * 左侧移入移除动效
 * @param {*} dom 节点
 */
function leftInOut(dom) {
    let top = dom.getBoundingClientRect().top;
    if (top < winheight * 0.8) {
        dom.style.opacity = 1;
        dom.style.transform = 'translate(0,0)';
    } else {
        dom.style.opacity = 0;
        dom.style.transform = 'translate(-100px,0)';
    }
}

/**
 * 同类型右侧出现动效
 * @param {*} commonRightInoutDom dom List 相同类名数据
 */
function rightInoutDomData(commonRightInoutDom) {
    for (let j = 0; j < commonRightInoutDom.length; j++) {
        const item = commonRightInoutDom[j];
        rightInOut(item);
    }
}

/**
 * 右侧移入移除动效
 * @param {*} dom 节点
 */
function rightInOut(dom) {
    let top = dom.getBoundingClientRect().top;
    if (top < winheight * 0.8) {
        dom.style.opacity = 1;
        dom.style.transform = 'translate(0,0)';
    } else {
        dom.style.opacity = 0;
        dom.style.transform = 'translate(100px,0)';
    }
}

/**
 * 同类型淡入淡出动效
 * @param {*} commonOpacityInoutDom dom List 相同类名数据
 */
function opacityInoutDomData(commonOpacityInoutDom) {
    for (let j = 0; j < commonOpacityInoutDom.length; j++) {
        const item = commonOpacityInoutDom[j];
        opacityInOut(item);
    }
}
/**
 * 淡入淡出效果
 * @param {*} dom 节点
 */
function opacityInOut(dom) {
    let top = dom.getBoundingClientRect().top;
    if (top < winheight * 0.8) {
        dom.style.opacity = 1;
    } else {
        dom.style.opacity = 0;
    }
}

/**
 * 同类型放大缩小动效
 * @param {*} commonScaleInoutDom dom List 相同类名数据
 */
function scaleInoutDomData(commonScaleInoutDom) {
    for (let j = 0; j < commonScaleInoutDom.length; j++) {
        const item = commonScaleInoutDom[j];
        scaleInOut(item);
    }
}
/**
 * 放大缩小效果
 * @param {*} dom 节点
 */
function scaleInOut(dom) {
    let top = dom.getBoundingClientRect().top;
    if (top < winheight * 0.8) {
        dom.style.transform = 'scale(1)';
    } else {
        dom.style.transform = 'scale(0)';
    }
}