$(function(){

    var wd = $(window).width();

    //컨텐트 2번

    if(wd > 780){

        var flag = false;
        $('.cnt02 .btn').click(function(){
            var txt = $(this).text();
            if(txt == '+ more'){
                $('.cnt02 section').animate({
                    height: '1560px'
                },500,function(){
                    $('.cnt02 .btn').text('- close');
                })
            }else{
                $('.cnt02 section').animate({
                    height: '760px'
                },500,function(){
                    $('.cnt02 .btn').text('+ more');
                })
            } 
        });

    }else if(wd > 420 && wd <= 780){

        var flag = false;
        $('.cnt02 .btn').click(function(){
            var txt = $(this).text();
            if(txt == '+ more'){
                $('.cnt02 section').animate({
                    height: '1240px'
                },500,function(){
                    $('.cnt02 .btn').text('- close');
                })
            }else{
                $('.cnt02 section').animate({
                    height: '600px'
                },500,function(){
                    $('.cnt02 .btn').text('+ more');
                })
            } 
        });

    }else{

        var flag = false;
        $('.cnt02 .btn').click(function(){
            var txt = $(this).text();
            if(txt == '+ more'){
                $('.cnt02 section').animate({
                    height: '1240px'
                },500,function(){
                    $('.cnt02 .btn').text('- close');
                })
            }else{
                $('.cnt02 section').animate({
                    height: '600px'
                },500,function(){
                    $('.cnt02 .btn').text('+ more');
                })
            } 
        });

    }

    /*
    var flag = false;
    $('.cnt02 .btn').click(function(){
        var txt = $(this).text();
        if(txt == '+ more'){
            $('.cnt02 section').animate({
                height: '760px'
            },500,function(){
                $('.cnt02 .btn').text('- close');
            })
        }else{
            $('.cnt02 section').animate({
                height: '360px'
            },500,function(){
                 $('.cnt02 .btn').text('+ more');
            })
        } 
    });
    */
});