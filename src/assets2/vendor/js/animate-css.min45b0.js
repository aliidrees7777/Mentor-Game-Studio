(function ($) {
    $.fn.animated = function (inEffect,delay,offSet) {
        $(this).css("opacity", "0").css("animation-delay", delay).addClass("animated").waypoint(function (dir) {
            if (dir === "down") {
                $(this).addClass(inEffect).css("opacity", "1");
            }
        }, {
            offset: offSet
        }).waypoint(function (dir) {
            if (dir !== "down") {
                $(this).addClass(inEffect).css("opacity", "1");
            }
            ;
        }, {
            offset: -$(window).height()
        });
    };
})(jQuery);
