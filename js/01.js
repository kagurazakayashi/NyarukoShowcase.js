$(document).ready(function(e) {
    var spnum = 0;
    var spshownum = 3;
    var spc = 10
    $(".spDIV").each(function(){
        if (spnum % spshownum == 1) {
            this.className += " spCenter";
        }
        spnum++;
    });

    var spdivlen = Math.ceil(spnum/spshownum);
    $('.spDIV img').bind("load",function(){
        var spw = $('body').width();
        var spimgw = (spw - spc*2) / 3;
        if(spw > 0){
            $('.spDIV').width(spimgw + 'px');
            $('.sp').height($('.spDIV img').height());
            $('.scrollpicture').width(spdivlen * spw);
            $('.scrollpicture').height($('.spDIV img').height());
            $(".scrollpicture").css({'left': -spw + 'px'});
        }
    });
});

function leftbutton(spid){
    $('.spleft').removeAttr("onclick");
    var spw = $('.scrollpicture').position().left + $('body').width();
    $('.scrollpicture').animate({left: spw + "px"},500,function(){
        $('.spleft').attr("onclick","leftbutton(1);");
    });
}
function rightbutton(spid){
    $('.spright').removeAttr("onclick");
    var spw = $('.scrollpicture').position().left - $('body').width();
    $('.scrollpicture').animate({left: spw + "px"},500,function(){
        $('.spright').attr("onclick","rightbutton(1);");
    });
}