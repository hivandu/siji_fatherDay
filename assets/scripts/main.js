// Created by Hivan Du 2015(Siso brand interactive team).

"use strict";

var app = {
    create: function () {
        //  create slider
        var slidelen = $('.swiper-slide').length;

        app.mySwiper = new Swiper('.swiper-container', {
            direction: 'vertical',
            noSwiping: false,
            speed:900,
            // init
            onInit: function () {
                $('.scene').eq(0).addClass('active');
                $('.zindex2').show();
            },

            //  router
            onTransitionEnd: function (swiper) {
                var curIndex = swiper.activeIndex;
                if(curIndex == slidelen -1){
                    $("#iSlider-arrow").hide();
                }else{
                    $("#iSlider-arrow").show();
                }
                //  show bg
                $('.scene').eq(curIndex).addClass('active')

                //  show content
                setTimeout(function () {
                    $('.scene').eq(curIndex).addClass('active')
                        .siblings('.scene').removeClass('active');
                }, 250);
            }
        });

        $('.btn_l').click(function(){
            app.mySwiper.slideTo(0, 1000, false);
            $('.scene').eq(0).addClass('active');
        })

        $('.btn_r').click(function(){
            var dispaly = $('.alert').css("display");
            if( dispaly == "none"){
                $('.alert').fadeIn();
                $('.scene06bg').fadeIn();
            }else{
                $('.alert').fadeOut();
                $('.scene06bg').fadeOut();
            }
        })

        $('.scene06bg').click(function(){
            var dispaly = $('.alert').css("display");
            if( dispaly != "none"){
                $('.alert').fadeOut();
                $('.scene06bg').fadeOut();
            }
        })

        //  first time play BGM
        var initSound = function () {
            //  delay play
            $('#audio')[0].play();

            document.removeEventListener('touchstart', initSound, false);
        };
        document.addEventListener('touchstart', initSound, false);

    }
}
$(function (){
    // init app
    app.create();
});