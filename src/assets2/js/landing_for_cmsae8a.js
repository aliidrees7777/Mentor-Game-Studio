$(document).ready(function () {

    //mfp
    $('.project-poupap-open').click(function() {
        var id = $(this).data('description-pid');
        $.magnificPopup.open({
            items: window['galleryItems_' + id ],
            removalDelay: 300,
            gallery: {
                enabled: true
            },
            type: 'image',
            mainClass: "mfp-fade",
            callbacks: {
                open: function () {
                    $.magnificPopup.instance.next = function () {
                        var self = this;
                        self.wrap.removeClass('mfp-image-loaded');
                        setTimeout(function () {
                            $.magnificPopup.proto.next.call(self);
                        }, 120);
                    };
                    $.magnificPopup.instance.prev = function () {
                        var self = this;
                        self.wrap.removeClass('mfp-image-loaded');
                        setTimeout(function () {
                            $.magnificPopup.proto.prev.call(self);
                        }, 120);
                    }
                },
                imageLoadComplete: function () {
                    var self = this;
                    setTimeout(function () {
                        self.wrap.addClass('mfp-image-loaded');
                    }, 16);
                }
            }
        });
    });
//scorer
    var counter_el_1 = document.querySelector('#scorer-item-1 .odometer');
    var counter_el_2 = document.querySelector('#scorer-item-2 .odometer');
    var counter_el_3 = document.querySelector('#scorer-item-3 .odometer');
    counter1 = new Odometer({
        el: counter_el_1,
        value: 0,
        theme: 'minimal',
        format: '',
        duration: 1000
    });
    counter2 = new Odometer({
        el: counter_el_2,
        value: 0,
        theme: 'minimal',
        format: '',
        duration: 3000
    });
    counter3 = new Odometer({
        el: counter_el_3,
        value: 0,
        theme: 'minimal',
        format: '',
        duration: 1000
    });
    $(function () {
        $('.scorer').waypoint(function (direction) {
            if (direction === 'down') {
                counter1.update(window.suc);
                counter2.update(window.hou);
                counter3.update(window.dev);
            }
        }, {
            offset: '65%'
        })
    });
// toolstipster
    $('.footer-form-input,.footer-form-textarea').tooltipster({ //find more options on the tooltipster page
        trigger: 'custom', // default is 'hover' which is no good here
        position: 'top',
        animation: 'grow',
        timer: 1000
    });
    $('#contactform').validate(
        {
            rules: {
                name: {required: true, maxlength: 32},
                email: {required: true, email: true, maxlength: 64},
                message: {required: true, maxlength: 1024}
            },
            messages: {
                "name": {
                    required: i18n('REQUIRED_FIELD'),
                    maxlength: i18n('LIMIT_SYMBOLS') + " 32"
                },
                "email": {
                    required: i18n('REQUIRED_FIELD'),
                    maxlength: i18n('LIMIT_SYMBOLS') + " 64",
                    email: i18n('INVALID_EMAIL')
                },
                "message": {
                    required: i18n('REQUIRED_FIELD'),
                    maxlength: i18n('LIMIT_SYMBOLS') + " 1024"
                }
            },
            errorPlacement: function (error, element) {
                var ele = $(element),
                    err = $(error),
                    msg = err.text();
                if (msg != null && msg !== "") {
                    ele.tooltipster('content', msg);
                    ele.tooltipster('open'); //open only if the error message is not blank. By default jquery-validate will return a label with no actual text in it so we have to check the innerHTML.
                }
            },
            unhighlight: function (element, errorClass, validClass) {
                $(element).removeClass(errorClass).addClass(validClass).tooltipster('close');
            },
// contact
            submitHandler: function (form) {
                $(form).ajaxSubmit({
                    type: "POST",
                    url: 'contact',
                    success: function () {
                        $("#contactform").trigger('reset');
                        $('.csm-wrapper').addClass("animated zoomIn").fadeIn(250);
                        $('.csm-block').addClass("animated fadeIn").fadeIn(500, function () {
                            setTimeout(function () {
                                $('.csm-block').addClass("fadeOut").fadeOut(500, function () {
                                    $('.csm-block').removeClass("animated fadeOut fadeIn");
                                });
                                $('.csm-wrapper').addClass("zoomOut").fadeOut(250, function () {
                                    $('.csm-wrapper').removeClass("animated zoomIn zoomOut");
                                });
                            }, 2000)
                        });
                    }
                });
            }
        });
});
