$(window).on('load',function() {
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");

    $('.bxslider').bxSlider(
        {
            captions: true,
            controls: false,
            auto: true,
            infiniteLoop: true,
            useCSS: false

        });
    $('.navtab2S3,.navtab3S3').hide();

})


$(document).ready(function() {





    $('a.tab1').on('click', function(e){
        e.preventDefault();
        $('.sectionS3ContentLeft > div').hide()
            .eq(0).show();
    });

    $('a.tab2').on('click', function(e){
        e.preventDefault();
        $('.sectionS3ContentLeft > div').hide()
            .eq(1).show();
    });

    $('a.tab3').on('click', function(e){
        e.preventDefault();
        $('.sectionS3ContentLeft > div').hide()
            .eq(2).show();
    });




    $('#fullpage').fullpage(
        {
            menu: 'menu',
            anchors:['S1','S2','S3','S4','S5','S6','S7'],
            slidesNavigation: true,
            scrollOverflow: true,
            scrollOverflowOptions:{interactiveScrollbars: true},
            afterLoad: function(anchorLink, index){
                var loadedSection = $(this);

                //using index
                if(index == 2,3,4,5,6,7){
                    $('.mainHead').addClass('hidden');

                }
                if(index == 1){
                    $('.mainHead').removeClass('hidden');

                }
                if(index == 1){
                    $(".mainTitle h1").animated("fadeInDown", "fadeOutUp");
                    $(".mainTitle p").animated("fadeInDown", "fadeOutUp");
                }

                if(index == 2){
                    $(".S2SmallImg").animated("fadeInRight", "fadeOutRight");
                }

                if(index == 5){
                    $('#number1').animateNumber({ number: 1100 });
                    $('#number2').animateNumber({ number: 25 });
                    $('#number3').animateNumber({ number: 35 });
                    $('#number4').animateNumber({ number: 44 });
                    $('#number5').animateNumber({ number: 97 });
                    $('#number6').animateNumber({ number: 5 });
                }

                $('.popupYoutube').magnificPopup({
                    disableOn: 700,
                    type: 'iframe',
                    mainClass: 'mfp-fade',
                    removalDelay: 160,
                    preloader: false,

                    fixedContentPos: false
                });


                $('.popup-with-form').magnificPopup({
                    type: 'inline',
                    preloader: false,
                    focus: '#name',


                    callbacks: {
                        beforeOpen: function() {
                            if($(window).width() < 700) {
                                this.st.focus = false;
                            } else {
                                this.st.focus = '#name';
                            }
                        }
                    }
                });


            }

        });


    $(".toggleMnu").click(function() {
        $(".sandwich").toggleClass("active");
    });

    $(".topMnu ul a").click(function() {
        $(".topMnu").fadeOut(600);
        $(".sandwich").toggleClass("active");
        $(".textOpacityForMenu").css("opacity", "1");
    }).append("<span>");

    $(".toggleMnu").click(function() {
        if ($(".topMnu").is(":visible")) {
            $(".textOpacityForMenu").css("opacity", "1");
            $(".topMnu").fadeOut(600);
            $(".topMnu li a").removeClass("fadeInUp animated");
        } else {
            $(".textOpacityForMenu").css("opacity", ".1");
            $(".topMnu").fadeIn(600);
            $(".topMnu li a").addClass("fadeInUp animated");
        };
    });

});