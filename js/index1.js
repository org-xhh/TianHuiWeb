/**
 * Created by Administrator on 2016/5/14.
 */
// JavaScript Document
$(function(){
    var slide=$(".slide");
    var lis=slide.find("li");
    console.log(lis.length);//5
    var timer=null;
    var speed=3000;

    slide.hover(function(){
        clearInterval(timer);//暂停定时器
        //console.log("鼠标经过了");
        $(this).children(".arrow").stop().fadeIn();

    },function(){
        clearInterval(timer);//清除定时器
        timer=setInterval(function(){//开启定时器前先清除定时器
            move(true);
        },speed);
        //console.log("鼠标离开了");
        $(this).children(".arrow").stop().fadeOut();

    })

    //核心语句块
    var json=[
        {//1
            width:400,
            top:20,
            left:50,
            opacity:0.2,
            z:2
        },
        {//2
            width:600,
            top:70,
            left:0,
            opacity:0.8,
            z:3
        },
        {//3
            width:800,
            top:0,
            left:200,
            opacity:1,
            z:4
        },
        {//4
            width:600,
            top:70,
            left:600,
            opacity:0.8,
            z:3
        },
        {//5
            width:400,
            top:20,
            left:800,
            opacity:0.2,
            z:2
        },

    ];

    move();//页面一加载就执行

    //当轮播图有动画的时候，点击按钮无效
    var flag=true;

    //按钮的点击
    $(".prev").on("click",function(){
        //alert("您点击了上一个");
        if(flag==true){
            move(false);
            flag=false;
        }

    })
    $(".next").on("click",function(){
        //alert("您点击了下一个");
        if(flag==true){
            move(true);
            flag=false;
        }
    })
    function move(obj){
        if(obj!=undefined){//如果move()没有参数，不执行
            if(obj){//下一个按钮，把json最后一个移除，添加到json的开头
                json.unshift(json.pop());
            }
            else{//上一个按钮,把json第一个移除，添加到json的末尾
                json.push(json.shift());
            }
        }
        $.each(json,function(i,value){
            //权重不能做动画
            lis.eq(i).css("zIndex",json[i].z).stop().animate(json[i],500,function(){
                flag=true;//动画执行完毕之后，flag=true
            })
        })

    }

    //定时器开始
    timer=setInterval(function(){
        move(true);
    },speed);


})
