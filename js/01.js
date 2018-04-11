var sparr = [];
var sparr1 = [];
var scrollimgs = [
    ['F1澳大利亚站法拉利CP头像','http://dev.futureracing.com.cn/wp-content/uploads/2018/03/29088647_181805869210273_7541145432773099520_n.jpg','http://dev.futureracing.com.cn/?p=91'],
    ['F1巴西站：维斯塔潘做出新的赛道圈速纪录','http://dev.futureracing.com.cn/wp-content/uploads/2017/11/006IeHT4ly1flfte5uccmj31hw0uakjl-1024x575.jpg','http://dev.futureracing.com.cn/?p=39'],
    ['F1巴西站：奥康的完赛纪录被终结','http://dev.futureracing.com.cn/wp-content/uploads/2017/11/006IeHT4ly1flfr405w14j31hu0uc1kz-1024x577.jpg','http://dev.futureracing.com.cn/?p=36'],
    ['F1巴西站：排位赛博塔斯拿下杆位','http://dev.futureracing.com.cn/wp-content/uploads/2017/11/006IeHT4ly1flendxw8nsj30xc0irdi4-1024x576.jpg','http://dev.futureracing.com.cn/?p=29'],
    ['F1巴西站：排位赛Q3首轮冲刺','https://www.futureracing.com.cn/wp-content/uploads/2018/03/racinglogos-2018_03291310.gif','http://dev.futureracing.com.cn/?p=26'],
    ['F1巴西站：排位赛Q2成绩单','http://dev.futureracing.com.cn/wp-content/uploads/2017/11/006IeHT4ly1flems17txuj30sg0g0dj6-1024x576.jpg','http://dev.futureracing.com.cn/?p=19']
];
var spw = 0;
var spc = 10;
var spimgw = 0;
var spimgh = 0;
var spnum = 0;
var spshownum = 3;
var spdivlen = Math.ceil(spnum/spshownum);
$(document).ready(function(){
    scrollpicture('sp1');
});
$(window).resize(function(){
    rewh();
});

function scrollpicture(spid) {
    var sparr00 = [];

    
    if(spdivlen < 3){
        spdivlen = 3;
    }
    
    var spw = $('body').width();
    var spc = 10;
    var spimgw = (spw - spc*2) / 3;
    var spimgh = spimgw / 16 * 9;
    scrollimgs.forEach(function(obj,i){
        var spcss = 'spDIV';
        if (spshownum == 3){
            if (i % spshownum == 1) {
                spcss += ' spCentercss';
            }
        }else if (spshownum == 2){
            if (i % spshownum == 0) {
                spcss += ' spleftcss';
            }else{
                spcss += ' sprightcss';
            }
        }
        sparr00.push("<div class='" + spcss + "' style = 'width: " + spimgw + "px;height: " + spimgh + "px;'><a href='" + obj[3] + "'><div></div><img src='" + obj[2] + "'/></a></div>");
        if (spshownum == 3){
            if (i % spshownum == 2){
                sparr.push(sparr00);
                sparr00 = [];
            }
        }else if (spshownum == 2){
            if (i % spshownum == 1){
                sparr.push(sparr00);
                sparr00 = [];
            }
        }
        spnum++;
    });
    switch(sparr.length){
        case 1:
            sparr.push(sparr[0],sparr[0]);
            break;
        case 2:
            sparr.push(sparr[0]);
            break;
        default:
            break;
    }
    sparr.forEach(function(obj,i){
        $('#' + spid + ' .scrollpicture').append(sparr[i]);
    });
    
    
    $('.sp').height($('.spDIV').height());
    $('.scrollpicture').width(spdivlen * spw);
    $('.scrollpicture').height($('.spDIV').height());
    $(".scrollpicture").css({'left': -spw + 'px'});
    $('.spDIV img').bind('load',function(){
        if(this.height > $('.spDIV').height()){
            $(this).css({'top': -(this.height - $('.spDIV').height())/2 + 'px'});
        }else if(this.height < $('.spDIV').height()){
            $(this).width('auto');
            $(this).height($('.spDIV').height());
            $(this).css({'left': -(this.width - $('.spDIV').width())/2 + 'px'});
        }
    });
}

function rewh(){
    spw = $('body').width();
    console.log(spw);
    spimgw = (spw - spc*2) / 3;
    spimgh = spimgw / 16 * 9;
    $(".spDIV").width(spimgw);
    $(".spDIV").height(spimgh);
    $('.sp').height($('.spDIV').height());
    $('.scrollpicture').width(spdivlen * spw);
    $('.scrollpicture').height($('.spDIV').height());
    $(".scrollpicture").css({'left': -spw + 'px'});
}
function leftbutton(spid){
    $('#' + spid + ' .spleft').removeAttr("onclick");
    var spw = $('#' + spid + ' .scrollpicture').position().left + $('body').width();
    $('#' + spid + ' .scrollpicture').animate({left: spw + "px"},500,function(){
        $('#' + spid + ' .spleft').attr("onclick","leftbutton('" + spid + "');");
        $('.scrollpicture').css({'left': -$('body').width() + 'px'});
        $('.scrollpicture').html("");
        sparr.forEach(function(obj, i){
            if (i < (sparr.length - 1)){
                sparr1.push(obj);
            }else{
                sparr1.unshift(sparr[i]);
            }
        });
        sparr1.forEach(function(obj,i){
            $('#' + spid + ' .scrollpicture').append(obj);
        });
        rewh();
        $('.spDIV img').each(function(){
            if(this.height > $('.spDIV').height()){
                $(this).css({'top': -(this.height - $('.spDIV').height())/2 + 'px'});
            }else if(this.height < $('.spDIV').height()){
                $(this).width('auto');
                $(this).height($('.spDIV').height());
                $(this).css({'left': -(this.width - $('.spDIV').width())/2 + 'px'});
            }
        });
        sparr = sparr1;
        sparr1 = [];
    });
}
function rightbutton(spid){
    $('#' + spid + ' .spright').removeAttr("onclick");
    var spw = $('#' + spid + ' .scrollpicture').position().left - $('body').width();
    $('#' + spid + ' .scrollpicture').animate({left: spw + "px"},500,function(){
        $('#' + spid + ' .spright').attr("onclick","rightbutton('" + spid + "');");
        $('.scrollpicture').css({'left': -$('body').width() + 'px'});
        $('.scrollpicture').html("");
        sparr.forEach(function(obj, i){
            if (i == 0){
                sparr1.push(obj);
            }else{
                sparr1.splice(i-1,0,sparr[i]);
            }
        });
        sparr1.forEach(function(obj,i){
            $('#' + spid + ' .scrollpicture').append(obj);
        });
        rewh();
        $('.spDIV img').each(function(){
            if(this.height > $('.spDIV').height()){
                $(this).css({'top': -(this.height - $('.spDIV').height())/2 + 'px'});
            }else if(this.height < $('.spDIV').height()){
                $(this).width('auto');
                $(this).height($('.spDIV').height());
                $(this).css({'left': -(this.width - $('.spDIV').width())/2 + 'px'});
            }
        });
        sparr = sparr1;
        sparr1 = [];
    });
}