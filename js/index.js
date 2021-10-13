$(function(){

    //메인배너

    //자동 실행

    var wd = $(window).width();

    var play = 0;
    var autoRolling = setInterval(function(){
        play++;
        play = play % 3;

        $('.mnWrap .paging div').removeClass('show');
        $('.mnWrap .paging div').eq(play).addClass('show');

        var pg = $(this).index();
        $('.mnWrap .mnImgGroup').css('margin-left',play * -100 + '%');
        $('.mnWrap .mnTitleGroup').css('margin-left',play * -100 + '%');
        $('.mnWrap .mnNoteGroup').css('margin-left',play * -100 + '%');
    },3500);

    
    $('.mnWrap .paging div').click(function(){
        $('.mnWrap .paging div').removeClass('show');
        $(this).addClass('show');

        var pg = $(this).index();
        $('.mnWrap .mnImgGroup').css('margin-left',pg * -100 + '%');
        $('.mnWrap .mnTitleGroup').css('margin-left',pg * -100 + '%');
        $('.mnWrap .mnNoteGroup').css('margin-left',pg * -100 + '%');

        clearInterval(autoRolling);
    });
    

    //컨텐트 1번


    $('.cnt01 .menu div').mouseover(function(){
        var cir = $(this).index();

        $('.cnt01 .menu .circle').css('left',cir * 27 + '%');
    });

    var artGroup = $('.cnt01 .artGroup');

    if(wd > 780){

        artGroup.children('article:last').prependTo(artGroup);
        artGroup.css('margin-left','-25%');

        $('.cnt01 .btn .left').click(function(){
            artGroup.animate({
                marginLeft: '0%'
            },500,function(){
                artGroup.children('article:last').prependTo(artGroup);
                artGroup.css('margin-left','-25%');
            });
        });

        $('.cnt01 .btn .right').click(function(){
            artGroup.animate({
                marginLeft: '-50%'
            },500,function(){
                artGroup.children('article:first').appendTo(artGroup);
                artGroup.css('margin-left','-25%');
            });
        });

    }else if(wd > 420 && wd <= 780){

        artGroup.children('article:last').prependTo(artGroup);
        artGroup.css('margin-left','-50%');

        $('.cnt01 .btn .left').click(function(){
            artGroup.animate({
                marginLeft: '0%'
            },500,function(){
                artGroup.children('article:last').prependTo(artGroup);
                artGroup.css('margin-left','-50%');
            });
        });

        $('.cnt01 .btn .right').click(function(){
            artGroup.animate({
                marginLeft: '-100%'
            },500,function(){
                artGroup.children('article:first').appendTo(artGroup);
                artGroup.css('margin-left','-50%');
            });
        });

    }else{

        artGroup.children('article:last').prependTo(artGroup);
        artGroup.css('margin-left','-100%');

        $('.cnt01 .btn .left').click(function(){
            artGroup.animate({
                marginLeft: '0%'
            },500,function(){
                artGroup.children('article:last').prependTo(artGroup);
                artGroup.css('margin-left','-100%');
            });
        });

        $('.cnt01 .btn .right').click(function(){
            artGroup.animate({
                marginLeft: '-200%'
            },500,function(){
                artGroup.children('article:first').appendTo(artGroup);
                artGroup.css('margin-left','-100%');
            });
        });

    }

    /*
    artGroup.children('article:last').prependTo(artGroup);
    artGroup.css('margin-left','-25%');

    $('.cnt01 .btn .left').click(function(){
        artGroup.animate({
            marginLeft: '0%'
        },500,function(){
            artGroup.children('article:last').prependTo(artGroup);
            artGroup.css('margin-left','-25%');
        });
    });

    $('.cnt01 .btn .right').click(function(){
        artGroup.animate({
            marginLeft: '-50%'
        },500,function(){
            artGroup.children('article:first').appendTo(artGroup);
            artGroup.css('margin-left','-25%');
        });
    });
    */

    //컨텐트 2번

    if(wd > 780){

        var imgThumbG = $('.cnt02 .imgThumbGroup');

        imgThumbG.children('div:last').prependTo(imgThumbG);
        imgThumbG.css('margin-left','-25%');

        $('.cnt02 .btn .left').click(function(){
            imgThumbG.animate({
                marginLeft: '0%'
            },500,function(){
                imgThumbG.children('div:last').prependTo(imgThumbG);
                imgThumbG.css('margin-left','-25%');
            });
        });

        $('.cnt02 .btn .right').click(function(){
            imgThumbG.animate({
                marginLeft: '-50%'
            },500,function(){
                imgThumbG.children('div:first').appendTo(imgThumbG);
                imgThumbG.css('margin-left','-25%');
            });
        });

    
        $('.cnt02 .imgThumbGroup .image').click(function(){
            var bglmg = $(this).css('background-image');

            $('.cnt02 .artRight .image').css('background-image',bglmg);
        });

    }else{

        var imgThumbG = $('.cnt02 .imgThumbGroup');

        imgThumbG.children('div:last').prependTo(imgThumbG);
        imgThumbG.css('margin-left','-50%');

        $('.cnt02 .btn .left').click(function(){
            imgThumbG.animate({
                marginLeft: '0%'
            },500,function(){
                imgThumbG.children('div:last').prependTo(imgThumbG);
                imgThumbG.css('margin-left','-50%');
            });
        });

        $('.cnt02 .btn .right').click(function(){
            imgThumbG.animate({
                marginLeft: '-100%'
            },500,function(){
                imgThumbG.children('div:first').appendTo(imgThumbG);
                imgThumbG.css('margin-left','-50%');
            });
        });

    
        $('.cnt02 .imgThumbGroup .image').click(function(){
            var bglmg = $(this).css('background-image');

            $('.cnt02 .artRight .image').css('background-image',bglmg);
        });

    }
    /*
    var imgThumbG = $('.cnt02 .imgThumbGroup');

    imgThumbG.children('div:last').prependTo(imgThumbG);
    imgThumbG.css('margin-left','-25%');

    $('.cnt02 .btn .left').click(function(){
        imgThumbG.animate({
            marginLeft: '0%'
        },500,function(){
            imgThumbG.children('div:last').prependTo(imgThumbG);
            imgThumbG.css('margin-left','-25%');
        });
    });

    $('.cnt02 .btn .right').click(function(){
        imgThumbG.animate({
            marginLeft: '-50%'
        },500,function(){
            imgThumbG.children('div:first').appendTo(imgThumbG);
            imgThumbG.css('margin-left','-25%');
        });
    });

   
    $('.cnt02 .imgThumbGroup .image').click(function(){
        var bglmg = $(this).css('background-image');

        $('.cnt02 .artRight .image').css('background-image',bglmg);
    });
    */

    //컨텐트 3번

    if(wd > 780){

        var flag = false;
        $('.cnt03 .btn').click(function(){
            var txt = $(this).text();
            if(txt == '+ more'){
                $('.cnt03 section').animate({
                    height: '760px'
                },500,function(){
                    $('.cnt03 .btn').text('- close');
                })
            }else{
                $('.cnt03 section').animate({
                    height: '360px'
                },500,function(){
                    $('.cnt03 .btn').text('+ more');
                })
            } 
        });

    }else if(wd > 420 && wd <= 780){

        var flag = false;
        $('.cnt03 .btn').click(function(){
            var txt = $(this).text();
            if(txt == '+ more'){
                $('.cnt03 section').animate({
                    height: '600px'
                },500,function(){
                    $('.cnt03 .btn').text('- close');
                })
            }else{
                $('.cnt03 section').animate({
                    height: '280px'
                },500,function(){
                    $('.cnt03 .btn').text('+ more');
                })
            } 
        });

    }else{

        var flag = false;
        $('.cnt03 .btn').click(function(){
            var txt = $(this).text();
            if(txt == '+ more'){
                $('.cnt03 section').animate({
                    height: '1240px'
                },500,function(){
                    $('.cnt03 .btn').text('- close');
                })
            }else{
                $('.cnt03 section').animate({
                    height: '600px'
                },500,function(){
                    $('.cnt03 .btn').text('+ more');
                })
            } 
        });

    }

    /*
    var flag = false;
    $('.cnt03 .btn').click(function(){
        var txt = $(this).text();
        if(txt == '+ more'){
            $('.cnt03 section').animate({
                height: '760px'
            },500,function(){
                $('.cnt03 .btn').text('- close');
            })
        }else{
            $('.cnt03 section').animate({
                height: '360px'
            },500,function(){
                $('.cnt03 .btn').text('+ more');
            })
        }
    });
    */
});