// --- 滚动图片 ready:scrollpicture('sp*'); resize:rewh();
$(window).resize(function(){
    rewh();
});
$(document).ready(function(){
    scrollpicture('sp*');
});
// ---
var sparr = {"":[]};
var sparr0 = [];
var sparr1 = [];
var scrollimgs = [];
var sparr2 = [];
var scrollimgnum2 = {"":[]};
var scrollimgnum = {"":[]};
var spw = 0;
var spc = 10;
var spimgw = 0;
var spimgh = 0;
var spnum = 0;
var spshownum = 3;
var spdivlen = Math.ceil(spnum/spshownum);
var spith = 40;
function setscrollimgs(imgsarr){
    scrollimgs = imgsarr;
}
function scrollpicture(spid) {
    var sparr00 = [];
    var spshownum00 = true;//不足每页的需求
    var spshownum01 = true;
    sparr[spid] = [];
    spnum = 0;
    if(spdivlen < 3){
        spdivlen = 3;
    }
    var spw = $('body').width();
    if (spw <= 480) {
        spshownum = 1;
    } else if (spw <= 840) {
        spshownum = 2;
    } else {
        spshownum = 3;
    }
    var spc = 10;
    var spimgw = (spw - spc*(spshownum-1)) / spshownum;
    var spimgh = (spimgw / 16 * 9)+spith;
    scrollimgs.forEach(function(obj,i){
        spnum++;
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
        } else if (spshownum == 1){
            spdivlen = scrollimgs.length;
        }

        sparr00.push("<div class='" + spcss + "' style='width: " + spimgw + "px;height: " + (spimgh+spith) + "px;'><div class='spimgdiv' style = 'width: " + spimgw + "px;height: " + spimgh + "px;'><a href='" + obj[2] + "'><img src='" + obj[1] + "'/></a></div><div class='scrollpicturetitle pictitle2'>" + obj[0] + "</div></div>");
        if (spshownum == 3){
            if (i % spshownum == 2){
                var nowarr = sparr[spid];
                if (spshownum01){
                    nowarr.unshift(sparr00);
                    spshownum01 = false;
                }else{
                    nowarr.push(sparr00);
                }
                sparr[spid] = nowarr;
                sparr00 = [];
            }
        }else if (spshownum == 2){
            if (i % spshownum == 1){
                var nowarr = sparr[spid];
                if (spshownum01){
                    nowarr.unshift(sparr00);
                    spshownum01 = false;
                }else{
                    nowarr.push(sparr00);
                }
                sparr[spid] = nowarr;
                sparr00 = [];
            }
        }else if (spshownum == 1){
            if (i == (scrollimgs.length - 1)){
                sparr[spid] = sparr00;
                sparr00 = [];
            }
        }
        if (spnum == scrollimgs.length && ((i % (spshownum-1)) < (spshownum - 1)) && spnum % spshownum != 0){
            var nowarr = sparr[spid];
            var fori = spshownum-(i % (spshownum-1));
            for(var i = 0;i < fori;i++){
                if (spshownum == 3){
                    if (fori > 1 && i == 1) {
                        spcss += ' spCentercss';
                    }
                }else if (spshownum == 2){
                    spcss += ' sprightcss';
                }
                sparr00.push("<div class='" + spcss + "' style='width: " + spimgw + "px;height: " + (spimgh+spith) + "px;'><div class='spimgdiv' style = 'width: " + spimgw + "px;height: " + spimgh + "px;'></div></div>");
            }
            if (spshownum00){
                nowarr.unshift(sparr00);
                spshownum00 = false;
            }else{
                nowarr.push(sparr00);
            }
            sparr[spid] = nowarr;
            sparr00 = [];
        }
    });
    scrollimgnum[spid] = 1;
    // if(spshownum == 1){
    //     var nowarr = sparr[spid];
    //     sparr2[spid] = nowarr;
    //     scrollimgnum2 = true;
    // }
    switch(sparr[spid].length){
        case 1:
            var nowarr = sparr[spid];
            nowarr.push(sparr[spid][0],sparr[spid][0]);
            sparr[spid] = nowarr;
            scrollimgnum2[spid] = false;
            break;
        case 2:
            var nowarr = sparr[spid];
            sparr2[spid] = nowarr;
            scrollimgnum2[spid] = true;
            nowarr.push(sparr[spid][0]);
            sparr[spid] = nowarr;
            break;
        default:
        scrollimgnum2[spid] = false;
            break;
    }
    
    sparr[spid].forEach(function(obj,i){
        $('#' + spid + ' .scrollpicture').append(sparr[spid][i]);
    });
    
    
    $('.sp').height($('.spDIV').height());
    $('.scrollpicturetitle').width(spimgw);
    $('.scrollpicturetitle').height(40);
    $('.scrollpicture').width(spdivlen * spw);
    $('.scrollpicture').height($('.spDIV').height());
    $(".scrollpicture").css({'left': -spw + 'px'});
    $('.spimgdiv img').bind('load',function(){
        var imgwidth = this.width;
        if (!imgwidth){
            imgwidth = $('.spimgdiv').width();
        }
        if(this.height > $('.spimgdiv').height()){
            $(this).css({'top': -(this.height - $('.spimgdiv').height())/2 + 'px'});
        }else if(this.height < $('.spimgdiv').height()){
            $(this).width('auto');
            $(this).height($('.spimgdiv').height());
            $(this).css({'left': -(this.width - $('.spimgdiv').width())/2 + 'px'});
        }
    });
    $(".spbutton").height($('.spDIV').height());
}
function rewh(){
    spw = $('body').width();
    var oldspshownum = spshownum;
    if (spw <= 480) {
        spshownum = 1;
    } else if (spw <= 840) {
        spshownum = 2;
    } else {
        spshownum = 3;
    }
    if (oldspshownum != spshownum) {
        sparr = {"":[]};
        $(".spfatherDIV").each(function() {
            var spid = $(this).attr("id");
            sparr[spid] = [];
            var sparr00 = [];
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
                sparr00.push("<div class='" + spcss + "' style = 'width: " + spimgw + "px;height: " + spimgh + "px;'><a href='" + obj[2] + "'><div></div><img src='" + obj[1] + "'/></a></div>");
                if (spshownum == 3){
                    if (i % spshownum == 2){
                        var nowarr = sparr[spid];
                        nowarr.push(sparr00);
                        sparr[spid] = nowarr;
                        sparr00 = [];
                    }
                }else if (spshownum == 2){
                    if (i % spshownum == 1){
                        var nowarr = sparr[spid];
                        nowarr.push(sparr00);
                        sparr[spid] = nowarr;
                        sparr00 = [];
                    }
                }else if (spshownum == 1){
                    if (i == (scrollimgs.length - 1)){
                        sparr[spid] = sparr00;
                        sparr00 = [];
                    }
                }
            });
            switch(sparr[spid].length){
                case 1:
                    var nowarr = sparr[spid];
                    nowarr.push(sparr[spid][0],sparr[spid][0]);
                    sparr[spid] = nowarr;
                    break;
                case 2:
                    var nowarr = sparr[spid];
                    sparr2[spid] = nowarr;
                    scrollimgnum2[spid] = true;
                    nowarr.push(sparr[spid][0]);
                    sparr[spid] = nowarr;
                    break;
                default:
                    break;
            }
        });
    }
    $('.scrollpicture').html("");
    $(".spfatherDIV").each(function() {
        var spid = $(this).attr("id");
        sparr[spid].forEach(function(obj,j){
            $('#' + spid + ' .scrollpicture').append(sparr[spid][j]);
        });
    });
    var spimgw = (spw - spc*(spshownum-1)) / spshownum;
    spimgh = spimgw / 16 * 9+spith;
    $(".spDIV").width(spimgw);
    $(".spDIV").height(spimgh);
    $('.sp').height($('.spDIV').height());
    $('.scrollpicture').width(spdivlen * spw);
    $('.scrollpicture').height($('.spDIV').height());
    $(".scrollpicture").css({'left': -spw + 'px'});
    // if (oldspshownum != spshownum) {
        $('.spimgdiv img').each(function(){            
            if(this.height > $('.spimgdiv').height()){
                $(this).css({'top': -(this.height - $('.spimgdiv').height())/2 + 'px'});
            }else if(this.height < $('.spimgdiv').height()){
                $(this).width('auto');
                $(this).height($('.spimgdiv').height());
                $(this).css({'left': -(this.width - $('.spimgdiv').width())/2 + 'px'});
            }
        });
    // }
}
function leftbutton(spid){
    $('#' + spid + ' .spleft').removeAttr("onclick");
    var spw = $('#' + spid + ' .scrollpicture').position().left + $('body').width();
    $('#' + spid + ' .scrollpicture').animate({left: spw + "px"},500,function(){
        $('#' + spid + ' .spleft').attr("onclick","leftbutton('" + spid + "');");
        $('.scrollpicture').css({'left': -$('body').width() + 'px'});
        $('#' + spid + ' .scrollpicture').html("");
        sparr[spid].forEach(function(obj, i){
            if (scrollimgnum2[spid]){
                sparr1.push(sparr2[spid][scrollimgnum[spid]]);
                if(scrollimgnum[spid] == 0){
                    scrollimgnum[spid]++;
                }else if(scrollimgnum[spid] == 1){
                    scrollimgnum[spid]--;
                }
            }else{
                if (i < (sparr[spid].length - 1)){
                    sparr1.push(obj);
                }else{
                    sparr1.unshift(obj);
                }
            }
        });
        sparr1.forEach(function(obj,i){
            $('#' + spid + ' .scrollpicture').append(obj);
        });
        // rewh();
        $('.spimgdiv img').each(function(){
            if(this.height > $('.spimgdiv').height()){
                $(this).css({'top': -(this.height - $('.spimgdiv').height())/2 + 'px'});
            }else if(this.height < $('.spimgdiv').height()){
                $(this).width('auto');
                $(this).height($('.spimgdiv').height());
                spw = $('body').width();
                var spimgw = (spw - spc*(spshownum-1)) / spshownum;
                spimgh = spimgw / 16 * 9 + spith;
                $(".spimgdiv").height(spimgh);
                $(".spimgdiv").width(spimgw);
                $(this).css({'left': -($(this).width - $('.spimgdiv').width())/2 + 'px'});
            }
        });
        sparr[spid] = sparr1;
        sparr1 = [];
    });
}
function disableautowidth() {
    $(".racing_single_single img").css({"width":"","height":""});
}
function rightbutton(spid){
    $('#' + spid + ' .spright').removeAttr("onclick");
    var spw = $('#' + spid + ' .scrollpicture').position().left - $('body').width();
    $('#' + spid + ' .scrollpicture').animate({left: spw + "px"},500,function(){
        $('#' + spid + ' .spright').attr("onclick","rightbutton('" + spid + "');");
        $('.scrollpicture').css({'left': -$('body').width() + 'px'});
        $('#' + spid + ' .scrollpicture').html("");
        sparr[spid].forEach(function(obj, i){
            if (scrollimgnum2[spid]){
                sparr1.push(sparr2[spid][scrollimgnum[spid]]);
                if(scrollimgnum[spid] == 0){
                    scrollimgnum[spid]++;
                }else if(scrollimgnum[spid] == 1){
                    scrollimgnum[spid]--;
                }
            }else{
                if (i == 0){
                    sparr1.push(obj);
                }else{
                    sparr1.splice(i-1,0,obj);
                }
            }
        });
        sparr1.forEach(function(obj,i){
            $('#' + spid + ' .scrollpicture').append(obj);
        });
        $('.spimgdiv img').each(function(){
            if(this.height > $('.spimgdiv').height()){
                $(this).css({'top': -(this.height - $('.spimgdiv').height())/2 + 'px'});
            }else if(this.height < $('.spimgdiv').height()){
                $(this).width('auto');
                $(this).height($('.spimgdiv').height());
                spw = $('body').width();
                var spimgw = (spw - spc*(spshownum-1)) / spshownum;
                spimgh = spimgw / 16 * 9 + spith;
                $(".spimgdiv").height(spimgh);
                $(".spimgdiv").width(spimgw);
                $(this).css({'left': -(this.width - $('.spimgdiv').width())/2 + 'px'});
            }
        });
        sparr[spid] = sparr1;
        sparr1 = [];
    });
}