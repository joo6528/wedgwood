$(function(){

    var wd = $(window).width();

    // 모든 변수를 선언해주세요 
    var cnt01marginLeft = 0;
    var cnt02marginLeft = 0;


    if(wd > 780){
        cnt01marginLeft = -33.5;
        cnt02marginLeft = -25;
        
    }else if(wd > 420){
        cnt01marginLeft = -33.5;
        cnt02marginLeft = -33;
        
        
    }else{
        
        cnt01marginLeft = -50;
    }


        var thumbG = $('.cnt01 .thumbGroup');
        var i = 0;

        // 컨텐츠1번

        $('.cnt01 .btn .left').click(function(){
            if(i <= 0){
                i = 0;
            }else{
                i--;
            }
            thumbG.css('margin-left',i* cnt01marginLeft + '%');
        });

        $('.cnt01 .btn .right').click(function(){
            if(i >= 2){
                i = 2;
            }else{
                i++;
            }
            thumbG.css('margin-left',i* cnt01marginLeft + '%');
        });

        $('.cnt01 .thumbGroup .image').click(function(){
            var bgImg = $(this).css('background-image');

            $('.cnt01>section>article>.images>.image').css('background-image',bgImg);
        });

        $('.cnt01 li:even').click(function(){
            $(this).next().slideToggle(500);
        });


        //컨텐트 2번

        var artGroup = $('.cnt02 .artGroup');

        artGroup.children('article:last').prependTo(artGroup);
        artGroup.css('margin-left','-25%');

        $('.cnt02 .btn .left').click(function(){
            artGroup.animate({
                marginLeft: '0%'
            },500,function(){
                artGroup.children('article:last').prependTo(artGroup);
                artGroup.css('margin-left',cnt02marginLeft+'%');
            });
        });

        $('.cnt02 .btn .right').click(function(){
            artGroup.animate({
                marginLeft: cnt02marginLeft * 2 +'%'
            },500,function(){
                artGroup.children('article:first').appendTo(artGroup);
                artGroup.css('margin-left',cnt02marginLeft+'%');
            });
        });


        var goalBox = $('.goalBox i')
        goalBox.css('color','#ccc');
        goalBox.find('span').text(0);

        $('.goalBox i').mouseenter(function(){
            var ind = $(this).index();
            $('.goalBox').find('span').text(ind);
            goalBox.css('color','#ccc');
            for(var k=0; k<ind; k++){
                goalBox.eq(k).css('color',' #f4c81e');
            }
        });

});