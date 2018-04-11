$(document).ready(function(){
    var imgw = 0;
    $('.menuimgdiv img').bind('load',function(){
        imgw += this.width;
        $('.menudiv').width(imgw);
        $('.md').height($('.menudiv').height());
    });
// console.log($(".menudiv").width());
    
    $('.menuframeDiv').bind('mousewheel', function(event, delta) {
        var dir = delta > 0 ? 'Up' : 'Down';
        if (dir == 'Up') {
            // var ml = $('.menudiv').position().left + 20;
            // if(ml <= 0){
            //     $('.menudiv').css({'left': ml  + 'px'});
            // }
            var ml = $('.menuframeDiv').scrollLeft() - 20;
            $('.menuframeDiv').scrollLeft(ml);
        } else {
            // var ml = $('.menudiv').position().left - 20;
            // if(ml >= ($('body').width() - $('.menudiv').width())){
            //     $('.menudiv').css({'left': ml  + 'px'});
            // }
            var ml = $('.menuframeDiv').scrollLeft() + 20;
            $('.menuframeDiv').scrollLeft(ml);
        }
        return false;
    });
    // var cont=$(".menudiv");    
    // var contW=$(".menudiv").width();
    // var contH=$(".menudiv").height();          
    // var startX,startY,sX,sY,moveX,moveY, disX, disY;        
    // var winW=$('.menuframeDiv').width();    
    // var winH=$('.menuframeDiv').height();
    // cont.on({//绑定事件
    //     touchstart:function(e){             
    //         startX = e.originalEvent.targetTouches[0].pageX;    //获取点击点的X坐标 
    //         startY = e.originalEvent.targetTouches[0].pageY;    //获取点击点的Y坐标
    //         //console.log("startX="+startX+"************startY="+startY);
    //         sX=$(this).offset().left;//相对于当前窗口X轴的偏移量
    //         sY=$(this).offset().top;//相对于当前窗口Y轴的偏移量
    //         // console.log("sX="+sX+"***************sY="+sY);
    //         console.log("***************************");
    //         console.log("startX="+startX);
    //         console.log("sX="+sX);
    //         leftX=startX-sX;//鼠标所能移动的最左端是当前鼠标距div左边距的位置
    //         console.log("***************************");
    //         console.log("leftX="+leftX);
    //         rightX=winW-contW+leftX;//鼠标所能移动的最右端是当前窗口距离减去鼠标距div最右端位置
    //         console.log("***************************");
    //         console.log("winW="+winW);
    //         console.log("contW="+contW);
    //         console.log("leftX="+leftX);
    //         console.log("***************************");
    //         console.log("rightX="+rightX);
    //         // topY=startY-sY;//鼠标所能移动最上端是当前鼠标距div上边距的位置
    //         // bottomY=winH-contH+topY;//鼠标所能移动最下端是当前窗口距离减去鼠标距div最下端位置
    //         },
    //     touchmove:function(e){              
    //         e.preventDefault();
    //         moveX=e.originalEvent.targetTouches[0].pageX;//移动过程中X轴的坐标
    //         moveY=e.originalEvent.targetTouches[0].pageY;//移动过程中Y轴的坐标
    //         //console.log("moveX="+moveX+"************moveY="+moveY);
    //         if(moveX<leftX){moveX=leftX;}                               
    //         if(moveX>rightX){moveX=rightX;}
    //         // if(moveY<topY){moveY=topY;}
    //         // if(moveY>bottomY){moveY=bottomY;}
    //         $(this).css({
    //             "left":moveX+sX-startX,
    //             // "top":moveY+sY-startY,                  
    //         });
    //     },
    //     mousedown: function(ev){
    //         var patch = parseInt($(this).css("height"))/2;
    //         //console.log(patch);
    //         $(this).mousemove(function(ev){
    //             var oEvent = ev || event;
    //             //console.log(oEvent.target);
    //             var oX = oEvent.clientX;
    //             var oY = oEvent.clientY;
    //             var t = oY - patch;
    //             var l = oX - patch;
    //             var w = $(window).width() - $(this).width();
    //             var h = $(window).height() - $(this).height();
    //             if(t<0){t = 0}
    //             if(l<0){l=0}
    //             if(t>h){t=h}
    //             if(l>w){l=w}
    //             $(this).css({top:t,left:l})
    //         });
    //         $(this).mouseup(function(){
    //             $(this).unbind('mousemove');
    //         });
    //     }
    // });
});
$(window).resize(function(){
    
});