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
        clearInterval(timer);//��ͣ��ʱ��
        //console.log("��꾭����");
        $(this).children(".arrow").stop().fadeIn();

    },function(){
        clearInterval(timer);//�����ʱ��
        timer=setInterval(function(){//������ʱ��ǰ�������ʱ��
            move(true);
        },speed);
        //console.log("����뿪��");
        $(this).children(".arrow").stop().fadeOut();

    })

    //��������
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

    move();//ҳ��һ���ؾ�ִ��

    //���ֲ�ͼ�ж�����ʱ�򣬵����ť��Ч
    var flag=true;

    //��ť�ĵ��
    $(".prev").on("click",function(){
        //alert("���������һ��");
        if(flag==true){
            move(false);
            flag=false;
        }

    })
    $(".next").on("click",function(){
        //alert("���������һ��");
        if(flag==true){
            move(true);
            flag=false;
        }
    })
    function move(obj){
        if(obj!=undefined){//���move()û�в�������ִ��
            if(obj){//��һ����ť����json���һ���Ƴ�����ӵ�json�Ŀ�ͷ
                json.unshift(json.pop());
            }
            else{//��һ����ť,��json��һ���Ƴ�����ӵ�json��ĩβ
                json.push(json.shift());
            }
        }
        $.each(json,function(i,value){
            //Ȩ�ز���������
            lis.eq(i).css("zIndex",json[i].z).stop().animate(json[i],500,function(){
                flag=true;//����ִ�����֮��flag=true
            })
        })

    }

    //��ʱ����ʼ
    timer=setInterval(function(){
        move(true);
    },speed);


})
