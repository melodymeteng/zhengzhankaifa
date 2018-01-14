/**
 * Created by 腾 on 2018/1/14.
 */
var oTab=document.getElementById('lunbo-tab');
var aLi=oTab.getElementsByTagName('li');
var oImg=document.getElementsByClassName('img-box')[0];
var aImg=oImg.getElementsByTagName('a');
var oPrev=document.getElementsByClassName('prev')[0];
var oNext=document.getElementsByClassName('next')[0];
var iNow=0;
var timer;
console.log(aImg);
for(var i=0 ;i<aLi.length; i++) {
    aLi[i].index = i;
    aLi[i].onmouseover = function () {
        iNow = this.index;
        changeImg(this.index);
    }
}
oNext.onclick=function () {
    iNow++;
    if(iNow>=aImg.length){
        iNow=0;
    }
    changeImg(iNow);
};
oPrev.onclick=function () {
    iNow--;
    if(iNow==-1){
        iNow=aImg.length-1;
    }
    changeImg(iNow);
};
function changeImg(idx) {
    for (var j = 0; j < aLi.length; j++) {
        aImg[j].className = '';
        aLi[j].className = '';
    }
    aLi[idx].className = 'selected';
    aImg[idx].className = 'lunbo-active';
}
run();
oImg.onmouseover=function () {
    clearInterval(timer);
};
oImg.onmouseout=function () {
    run();
};
function run() {
    timer=setInterval(function () {
        oNext.onclick();
    },1000);
}
// var oSponsor=document.getElementsByClassName('sponsorlist')[0];
// var oUl=oSponsor.getElementsByTagName('ul');
var oList=document.getElementsByClassName('list')[0];
var oPrevBtn=document.getElementsByClassName('prev-btn')[0];
var oNextBtn=document.getElementsByClassName('next-btn')[0];
console.log(oList,oNextBtn );
oNextBtn.onclick=function () {
    oList.style.left='-945'+'px';
};
oPrevBtn.onclick=function () {
    oList.style.left='0'+'px';
};
