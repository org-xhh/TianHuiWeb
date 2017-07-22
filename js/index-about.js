/**
 * Created by Administrator on 2016/5/15.
 */
function Scroll(id,speend,time){
    var speed=speed||'slow';
    var time=time||2500;
    var li_height=$('#'+id+' ul li:last').height();
    setInterval(function(){
        $('#'+id+' ul').prepend(
            $('#'+id+' ul li:last').css('height','0px').animate({'height':li_height+'px'},speed)
        )
    },time);
}
Scroll('hot1');
Scroll('hot2');

//文字无缝滚动
var ul_width1=0;
var ul_width2=0;
$('.wufeng .wufeng_right ul.list1 li').each(function(){
    ul_width1=ul_width1+$(this).width();
});
$('.wufeng .wufeng_right ul.list2 li').each(function(){
    ul_width2=ul_width2+$(this).width();
});
$('.wufeng .wufeng_right ul.list1').css('width',(ul_width1+300)+'px');
$('.wufeng .wufeng_right ul.list2').css('width',(ul_width2+300)+'px');
$('.wufeng .wufeng_right ul.list2').css('left',ul_width1+'px');
var change_left=-(ul_width1+ul_width2-1160);//负的
function wufeng(obj){/*Chrome*/
    setInterval(function(){
        var old_left=obj.position().left;//获得obj现有的left(不带px)
        var new_left=old_left-1;
        if(new_left<change_left){
            obj.css('left','1160px');
            new_left=1160;
        }
        obj.css('left',new_left+'px');
    },20)
}
wufeng($('.wufeng .wufeng_right ul.list1'));
wufeng($('.wufeng .wufeng_right ul.list2'));

$('.content2-left ul li').hover(function(){
    $(this).addClass('active');
    $(this).children('.information').css('display','block');
},function(){
    $(this).removeClass('active');
    $(this).children('.information').css('display','none');
}) ;

//日历提示
(function (){
    var aSpan = $('.calendar p span');
    var aImg = $('.calendar .img');
    var oPrompt = $('.today_info');
    var oImg = oPrompt.find('img');
    var oStrong = oPrompt.find('strong');
    var oP = oPrompt.find('p');

    aImg.hover(function (){
        var iTop = $(this).parent().position().top - 30;
        var iLeft = $(this).parent().position().left + 55;
        //var index = $(this).parent().index()%aSpan.length;
        var index = $(this).parent().index()%aSpan.size();

        //console.log( $(this).parent().index()%aSpan.size() );

        oPrompt.show().css({ 'left': iLeft, 'top': iTop });
        oP.text($(this).attr('info'));
        oImg.attr('src', $(this).attr('src'));
        oStrong.text( aSpan.eq(index).text() );
    }, function (){
        oPrompt.hide();
    });
})();

//切换
$('.switch ul li').hover(function() {
    $(this).addClass('hover');
    $(this).siblings().removeClass('hover');
    var index = $(this).index();
    $('.switch .animal').eq(index).show().siblings('.animal').hide();
});

//图片轮播

var oHide = document.getElementById('hide1');
var oPre = document.getElementById('pre');
var oNext = document.getElementById('next');
var oUl = oHide.getElementsByTagName('ul')[0];
var aLi = oUl.getElementsByTagName('li');
var iLiW = aLi[0].offsetWidth;
for(var i=0;i<4;i++){
    var obj = aLi[i].cloneNode(true);
    oUl.appendChild(obj);
}
var site = iLiW*4;
oUl.style.width = (aLi.length*iLiW+2)+ 'px';
//alert(aLi.length);//16

var iNow=0;
oPre.onclick=function(){
    iNow--;
    if(iNow == -4){
        oUl.style.left = 0 +'px';
        iNow = -1;
    }
    move();
};
/*
oNext.onclick=function(){
    iNow++;
    if(iNow == 1){
        oUl.style.left = site-aLi.length*iLiW  +'px';
        iNow = -1;
    }
    move();
};
*/
oNext.onclick=function(){
    iNow++;
    if(iNow == 1){
        oUl.style.left =site-aLi.length*iLiW  +'px';
        iNow = -2;
    }
    move();
};
function move(){
    //oUl.style.left=site*iNow-100+'px';
    $(oUl).stop().animate({
        left:site*iNow-14
    })
}






