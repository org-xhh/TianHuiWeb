/**
 * Created by Administrator on 2016/5/18.
 */
var data=[
    {
        top:50,
        left:650,
    },
    {
        top:100,
        left:800,
    },
    {
        top:320,
        left:750,
    },
    {
        top:300,
        left:400,
    },
    {
        top:400,
        left:450,
    },
];
var meitus=$('.meitu');
//alert(meitus.length);//5
$.each(data,function(i,value){
    meitus.eq(i).stop().animate(data[i],500);
});
$('.meitu').draggable({
    cursor:'move',
});
/*
 $('.meitu1').draggable({
    cursor:'move',
    stop:function(){
        $(this).css('transform','rotate(10deg)');
    }
});  */
var audio=document.getElementById('myAudio');
$('.meikuang').droppable({
    accept:'.meitu',
    drop:function(event,ui){
        audio.play();
        //$('audio')[0].play();
        //$('#myAudio').get(0).play();

        //ui.draggable.css('transform','rotate(0)');
        ui.helper.css('transform','rotate(0)');
    }
})



