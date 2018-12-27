
if (matchMedia) {
    var mq = window.matchMedia("(max-width: 959px),(orientation: portrait)");
    mq.addListener(WidthChange);
    WidthChange(mq);
}

PCTextsStart = function (pauseT,message) {
    window.MobTextsOn = false;
    var delay = 4000, fade = 1000;
    var dTexts = $('.drawer-text');
    var len = dTexts.length;
    window.pi = typeof window.pi == 'undefined' ? 1 : window.pi;
    clearTimeout(window.PCTextsTimeout);
    window.PCTextsTimeout = setTimeout(cycle, pauseT);
    function cycle() {
        $(dTexts[window.pi % len]).fadeOut(fade, function () {
            $(dTexts[++window.pi % len]).fadeIn(fade, function () {
                clearTimeout(window.PCTextsTimeout);
                window.PCTextsTimeout = setTimeout(cycle, delay);
            });
        });
    }
};


function WidthChange(mq) {
    clearTimeout(window.PCTextsTimeout);
    clearTimeout(window.MTextsTimeout);
    if (mq.matches) {
        /*** MOBILE ***/
        $(document).ready(function () {
            // PREALOADER
            $(window).on('load', function () {
                var $preloader = $('.preloader');
                $preloader.delay(350).fadeOut('slow', function () {
                });
                $('.left>.triangle').css("border-bottom-width",$('.bottom-side').innerHeight() +  'px');
                $('.left>.triangle').css("border-right-width",$('.bottom-side').innerHeight() + 'px');
                $('.right>.triangle').css("border-bottom-width",$('.bottom-side').innerHeight() +  'px');
                $('.right>.triangle').css("border-left-width",$('.bottom-side').innerHeight() + 'px');
                // MAP TEXTBOX POSITION
                $('#office-tb-3').css({left: $('#mapbox-item-3').position().left});
                $('#office-tb-3').css({top: $('#mapbox-item-3').position().top});

                $('#office-tb-2').css({left:$('#mapbox-item-2').position().left - $('#office-tb-2').innerWidth()});
                $('#office-tb-2').css({top:$('#mapbox-item-2').position().top});

                $('#office-tb-1').css({left:$('#mapbox-item-1').position().left - $('#office-tb-1').innerWidth()});
                $('#office-tb-1').css({top: $('#mapbox-item-1').position().top});

                window.OnLoadBe = true;
            });
            if(!window.MobTextsOn) {
                window.PCTextsOn = false;
                var delay = 4000, fade = 1000;
                var dTexts = $('.go-text');
                var len = dTexts.length;
                window.mi = typeof window.mi == 'undefined' ? 1 : window.mi;
                clearTimeout(window.MTextsTimeout);
                window.MTextsTimeout = setTimeout(cycleM, 250);
                function cycleM() {
                    $(dTexts[window.mi % len]).fadeOut(fade, function () {
                        $(".go-texts").css("max-height",$(dTexts[++window.mi % len]).innerHeight());
                        $(dTexts[window.mi % len]).fadeIn(fade, function () {
                            clearTimeout(window.MTextsTimeout);
                            window.MTextsTimeout = setTimeout(cycleM, delay);
                        });
                    });
                }
                window.MobTextsOn = true;
            }
            if(!window.mobJsLoad) {
                var options = [
                    {
                        selector: 'body,html,.page', // Mandatory, CSS selector
                        count: 100,
                        type: 'vh',// Mandatory, height in vh units
                        property: 'height'
                    },
                    {
                        selector: '.m-nav', // Mandatory, CSS selector
                        count: 10,
                        type: 'vh',// Mandatory, height in vh units
                        property: 'height'
                    },
                    {
                        selector: '.nav-mob-logo>img', // Mandatory, CSS selector
                        count: 6,
                        type: 'vh',// Mandatory, height in vh units
                        property: 'maxHeight'
                    },
                    {
                        selector: '.nav-mob-panel,.nav-mob-panel-shadow,.nav-mob-panel-view', // Mandatory, CSS selector
                        count: 120,
                        type: 'vh',// Mandatory, height in vh units
                        property: 'height'
                    },
                    {
                        selector: '.nav-mob-hamburger', // Mandatory, CSS selector
                        count: 7,
                        type: 'vmax',// Mandatory, height in vh units
                        property: 'maxWidth'
                    }
                ];

                var vhFix = new VHChromeFix(options);
                // PAGE BUTTONS NAVIGATION
                $("a.nav-mob-panel-view-item[href*='#']").mPageScroll2id();
                $("a.go-button[href*='#']").mPageScroll2id();
                $("a.footer-to-top-btn[href*='#']").mPageScroll2id();
                // NAV HAMBURGER PANEL SHOW AND CALC
                $('.nav-mob-panel-view').css("top",$('.m-nav').innerHeight() + 'px');
                //TODO: TEST закоментить нижнюю после теста
                $('.nav-mob-panel-view').css("height",'calc(100% -' + $('.m-nav').innerHeight() + 'px)');
                $(window).on('resize',function () {
                    $('.left>.triangle').css("border-bottom-width",$('.bottom-side').innerHeight() + 1 + 'px');
                    $('.left>.triangle').css("border-right-width",$('.bottom-side').innerHeight() + 1 + 'px');
                    $('.right>.triangle').css("border-bottom-width",$('.bottom-side').innerHeight() + 1 + 'px');
                    $('.right>.triangle').css("border-left-width",$('.bottom-side').innerHeight() + 1 + 'px');
                    $('.nav-mob-panel-view').css("top",$('.m-nav').innerHeight() + 'px');
                    $('.nav-mob-panel-view').css("height",'calc(100% -' + $('.m-nav').innerHeight() + 'px)');

                    $('#office-tb-3').css({left: $('#mapbox-item-3').position().left});
                    $('#office-tb-3').css({top: $('#mapbox-item-3').position().top});

                    $('#office-tb-2').css({left:$('#mapbox-item-2').position().left - $('#office-tb-2').innerWidth()});
                    $('#office-tb-2').css({top:$('#mapbox-item-2').position().top});

                    $('#office-tb-1').css({left:$('#mapbox-item-1').position().left - $('#office-tb-1').innerWidth()});
                    $('#office-tb-1').css({top: $('#mapbox-item-1').position().top});
                });
                // NAV LOAD
                (function () {
                $('#hamburger-10').on('click', function () {
                    if (!$('.nav-mob-panel-shadow').hasClass('active') && !$('.nav-mob-panel').hasClass('active')) {
                        $('.nav-mob-panel').addClass("active");
                        $('.nav-mob-panel-shadow').addClass("active");
                        $('.nav-mob-panel-view').addClass("active");
                        $(this).addClass("active");
                        //$("html").css("overflow-y", "hidden");
                    } else if ($('.nav-mob-panel-shadow').hasClass('active') && $('.nav-mob-panel').hasClass('active')) {
                        $('.nav-mob-panel-shadow').removeClass("active");
                        $(this).removeClass("active");
                        $('.nav-mob-panel-view').removeClass("active");
                        //$("html").css("overflow-y", "scroll");
                        setTimeout(function () {
                            $('.nav-mob-panel').removeClass("active");
                        }, 300);
                    }
                });
                })();
                // SLIDER
                window.MobSlider = $('.m-bx-slider').bxSlider({
                    //mode: 'fade',
                    adaptiveHeight: false,
                    controls: false,
                    pager: true,
                    captions: true,
                    touchEnabled: false,
                    speed: 1000,
                    pause: 8000,
                    nextText: '',
                    prevText: ''
                });
                window.mobJsLoad = true;
            }
            if(window.pcJsLoad) {
                $(".presentation-robot").removeClass("animated fadeInUp").css('opacity',1);
                $(".presentation-download-wrapper").removeClass("animated zoomIn").css('opacity',1);
                $('.presentation-text').removeClass('animated headShake').css('opacity',1);
                $('.presentation-col-left').removeClass('animated headShake').css('opacity',1);
                $(".pr-title").removeClass(" animated fadeInUp").css('opacity',1);
                $(".title-first").removeClass(" animated fadeInDown").css('opacity',1);
                $(".projects-row").removeClass(" animated fadeInUp").css('opacity',1);
                $(".scorer-center").removeClass(" animated zoomIn").css('opacity',1);
                $(".mapbox").removeClass(" animated fadeIn").css('opacity',1);
                $("#wein-button-wrapper-1").removeClass(" animated zoomIn ").css('opacity',1);
                $("#wein-button-wrapper-2").removeClass(" animated zoomIn ").css('opacity',1);
                $("#wein-button-wrapper-3").removeClass(" animated zoomIn ").css('opacity',1);
                $("#wein-button-wrapper-4").removeClass(" animated zoomIn ").css('opacity',1);
                $(".footer-wrapper").removeClass(" animated fadeInUp").css('opacity',1);
            }
            $("a.footer-to-top-btn").attr("href", "#m-home");
            window.MobSlider.reloadSlider();
        });
    } else {
        /*** PC ***/
        $(document).ready(function () {
            // PRELOADER
            $(window).on('load', function () {
                window.onLoad = true;
                var $preloader = $('.preloader');
                $preloader.delay(350).fadeOut('slow', function () {
                    $(function () {
                        $('.home-logo-wrapper').delay(3000).queue(function () {
                            $(this).addClass('active');
                            $('.home-drawer-wrapper').addClass('active');
                            $('.logo-flex').addClass('active');
                        });
                        $('.home-drawer-wrapper').delay(4000).queue(function () {
                            $('.drawer-r').css("display", "block").delay(500).queue(function () {
                                $(this).addClass('active');
                            });
                            PCTextsStart(500,'OnLoad Text');
                        });
                    });
                });
                window.DrawerPanelOn = true;
                window.OnLoadBe = true;
                window.PCOnLoadBe = true;
            });
            if(!window.DrawerPanelOn && window.OnLoadBe && !window.PCTextsOn) {
                $(function () {
                    $('.home-logo-wrapper').delay(3000).queue(function () {
                        $(this).addClass('active');
                        $('.home-drawer-wrapper').addClass('active');
                        $('.logo-flex').addClass('active');

                    });
                    $('.home-drawer-wrapper').delay(4000).queue(function () {
                        $('.drawer-r').css("display", "block").delay(500).queue(function () {
                            $(this).addClass('active');
                        });
                        PCTextsStart(500,'PostMobile Text');
                    });
                });
                window.DrawerPanelOn = true;
            }
            else if(!window.PCTextsOn && window.DrawerPanelOn) {
                PCTextsStart(250,'PostLoad Text');
            }
            if(window.pcJsLoad) {
                window.PCSlider.reloadSlider(); // из за этого происходил баг с слайдером предположительно
            }
            if(!window.pcJsLoad) {
                // PAGE BUTTONS NAVIGATION
                $("a.nav-button[href*='#']").mPageScroll2id();
                $("a.drawer-button[href*='#']").mPageScroll2id();
                $("a.footer-to-top-btn[href*='#']").mPageScroll2id();
                // NAV SCROLLING
                $navigationBar = $('.navigation');
                $(window).on('scroll', function () {
                    $topy = $(window).scrollTop() + ($(window).height() * 0.5);
                    if ($topy >= 1) {
                        $('#nav-button-1').addClass('active');
                    }
                    if ($topy >= $('.slider').offset().top) {
                        $('#nav-button-1').removeClass('active');
                    }
                });
                $(window).on('scroll', function () {
                    $topy = $(window).scrollTop() + ($(window).height() * 0.5);
                    if ($topy >= $('.slider').offset().top) {
                        $('#nav-button-2').addClass('active');
                    }
                    if ($topy >= $('.about').outerHeight(true) + $('.about').offset().top || $topy <= $('.slider').offset().top) {
                        $('#nav-button-2').removeClass('active');
                    }
                });
                $(window).on('scroll', function () {
                    $topy = $(window).scrollTop() + ($(window).height() * 0.5);
                    if ($topy >= $('.team').offset().top) {
                        $('#nav-button-3').addClass('active');
                    }
                    if ($topy >= $('.team').outerHeight(true) + $('.team').offset().top || $topy <= $('.team').offset().top) {
                        $('#nav-button-3').removeClass('active');
                    }
                });
                $(window).on('scroll', function () {
                    $topy = $(window).scrollTop() + ($(window).height() * 0.5);
                    if ($topy >= $('.clients').offset().top) {
                        $('#nav-button-4').addClass('active');
                    }
                    if ($topy >= $('.clients').outerHeight(true) + $('.clients').offset().top || $topy <= $('.clients').offset().top) {
                        $('#nav-button-4').removeClass('active');
                    }
                });
                $(window).on('scroll', function () {
                    $topy = $(window).scrollTop() + ($(window).height() * 0.5);
                    if ($topy >= $('.presentation').offset().top) {
                        $('#nav-button-5').addClass('active');
                    }
                    if ($topy >= $('.scorer').outerHeight(true) + $('.scorer').offset().top || $topy <= $('.presentation').offset().top) {
                        $('#nav-button-5').removeClass('active');
                    }
                });
                $(window).on('scroll', function () {
                    $topy = $(window).scrollTop() + ($(window).height() * 0.5);
                    if ($topy >= $('.map').offset().top) {
                        $('#nav-button-6').addClass('active');
                    }
                    if ($topy >= $('.footer').outerHeight(true) + $('.footer').offset().top || $topy <= $('.map').offset().top) {
                        $('#nav-button-6').removeClass('active');
                    }
                });
                // MAPBOXES
                (function () {
                    $('#mapbox-item-1').on('click', function () {
                        $('#office-tb-1').toggleClass('active');
                    })
                })();
                (function () {
                    $('#mapbox-item-2').on('click', function () {
                        $('#office-tb-2').toggleClass('active');
                    })
                })();
                (function () {
                    $('#mapbox-item-3').on('click', function () {
                        $('#office-tb-3').toggleClass('active');
                    })
                })();
                // SLIDER
                window.PCSlider = $('.bxslider').bxSlider({
                    adaptiveHeight: false,
                    controls: true,
                    pager: false,
                    captions: true,
                    speed: 500,
                    pause: 8000,
                    nextText: '',
                    prevText: ''
                });
                $(".owl-carousel").owlCarousel({
                    items:6,
                    autoWidth: false,
                    //dots:false,
                    autoplay:true,
                    autoplayTimeout:3500,
                    loop:true,
                    smartSpeed:2000,
                    autoplayHoverPause:true,
                    checkVisible: false
                });
                // ANIMATIONS
                $(".home-logo").animated("fadeIn", "0.5s", "80%");
                $(".title-first").animated("fadeInDown", "0.1s", "80%");
                $(".title-second").animated("zoomIn", "0.15s", "80%");
                $(".title-description").animated("zoomIn", "0.15s", "80%");
                $(".about-content-title-text").animated("zoomIn", "0.2s", "80%");
                $(".about-list").animated("fadeInUp", "0.3s", "80%");
                $("#team-portraits-item-1").animated("flipInX", "0.10s", "100%");
                $("#team-portraits-item-2").animated("flipInX", "0.30s", "100%");
                $("#team-portraits-item-3").animated("flipInX", "0.50s", "100%");
                $("#team-portraits-item-4").animated("flipInX", "0.10s", "100%");
                $("#team-portraits-item-5").animated("flipInX", "0.30s", "100%");
                $("#team-portraits-item-6").animated("flipInX", "0.50s", "100%");
                $(".clients-list-item").animated("rollIn", "0.1s", "80%");
                $(".presentation-robot").animated("fadeInUp", "0.8s", "80%");
                $(".presentation-download-wrapper").animated("zoomIn", "0.6s", "80%");
                (function () {
                    $('.presentation').hover(function () {
                        if((!mq.matches)) {
                            $('.presentation-text').toggleClass('animated ' + ' headShake');
                            $('.presentation-col-left').toggleClass('animated ' + ' headShake');
                        }
                    }, function () {
                    })
                })();
                $(".pr-title").animated("fadeInUp", "0.1s", "80%");
                $(".projects-row").animated("fadeInUp", "0.1s", "80%");
                $(".scorer-center").animated("zoomIn", "0.3s", "80%");
                $(".mapbox").animated("fadeIn", "0.3s", "80%");
                $("#wein-button-wrapper-1").animated("zoomIn", "0.6s", "80%");
                $("#wein-button-wrapper-2").animated("zoomIn", "0.3s", "80%");
                $("#wein-button-wrapper-3").animated("zoomIn", "0.3s", "80%");
                $("#wein-button-wrapper-4").animated("zoomIn", "0.6s", "80%");
                $(".footer-wrapper").animated("fadeInUp", "0.3s", "80%");
                window.pcJsLoad = true;
            }
            $("a.footer-to-top-btn").attr("href", "#home");
        });

    }
    /*** ALL ***/
}
$(document).ready(function () {
    // PROJECT CATEGORY
    (function () {
        $('.pr-button').on('click', function () {
            var o = $(this).parent().parent().children(".pr-slide");
            var i = $(this).parent().parent().children(".pr-slide").children(".pr-slide-container");
            var button = $(this);
            if (o.hasClass('collapsed')) {
                button.fadeTo("slow", 0.0, function () {
                    button.removeClass("pr-button-slideup");
                    button.addClass("pr-button-slidedown");
                    button.fadeTo("slow", 1, function () {
                    });
                });
                o.css({"max-height": i.outerHeight() + 'px'});

            } else {
                button.fadeTo("slow", 0.0, function () {
                    button.removeClass("pr-button-slidedown");
                    button.addClass("pr-button-slideup");
                    button.fadeTo("slow", 1, function () {
                    });
                });
                o.css({"max-height": "0px"});
            }
            o.toggleClass('collapsed');

            $('html, body').animate({
                scrollTop: $(this).parent().parent().offset().top - 50
            }, 500);
        })
    })();
    $('html, body').bind('mousewheel DOMMouseScroll', function (event) {
        $('html, body').stop(true);
    });
    //NAVIGATION, NAVIGATOION STATE
    $navigationBar = $('.navigation');
    $homeHeight = $('.home').height();
    $(window).on('scroll', function () {
        if (window.scrollY >= 1 || document.documentElement.scrollTop >= 1) {
            /*** NAVIGATION ACTIVATE ***/
            /*** MOBILE ***/
            if(mq.matches){
                $('.m-nav').addClass('active');
            }
            /*** PC ***/
            else{
                $navigationBar.addClass('active');
            }
        } else {
            /*** NAVIGATION DEACTIVATE ***/
            /*** MOBILE ***/
            if(mq.matches){
                $('.m-nav').removeClass('active');
                if ($('.nav-mob-panel-shadow').hasClass('active') && $('.nav-mob-panel').hasClass('active')) {
                    $('.nav-mob-panel-shadow').removeClass("active");
                    $('.hamburger').removeClass("active");
                    $('.nav-mob-panel-view').removeClass("active");
                    //$("html").css("overflow-y", "scroll");
                    setTimeout(function () {
                        $('.nav-mob-panel').removeClass("active");
                    }, 300);
                }
            }
            /*** PC ***/
            else{
                $navigationBar.removeClass('active');
            }
        }
    });
    /*** READY END ***/
});
