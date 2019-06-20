'use strict';;
(function() {

        $(document).ready(function() {

            //slider
            $('.item__slider-bg').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: true,
                adaptiveHeight: true,
                infinite: true,
                useTransform: true,
                loop: true
            });

            $('.item__slider-sm')
                .on('init', function(event, slick) {
                    $('.item__slider-sm .slick-slide.slick-current').addClass('is-active');
                })
                .slick({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                    focusOnSelect: false,
                    infinite: false,
                    loop: true
                });

            $('.item__slider-bg').on('afterChange', function(event, slick, currentSlide) {
                $('.item__slider-sm').slick('slickGoTo', currentSlide);
                let currrentNavSlideElem = '.item__slider-sm .slick-slide[data-slick-index="' + currentSlide + '"]';
                $('.item__slider-sm .slick-slide.is-active').removeClass('is-active');
                $(currrentNavSlideElem).addClass('is-active');
            });

            $('.item__slider-sm').on('click', '.slick-slide', function(event) {
                event.preventDefault();
                let goToSingleSlide = $(this).data('slick-index');

                $('.item__slider-bg').slick('slickGoTo', goToSingleSlide);
            });

         
            });
        }());