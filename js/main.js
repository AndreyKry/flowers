$(document).ready(function () {
    const flowersSwiper = new Swiper('.flowers-slider', {
        // Optional parameters
        loop: true,
        slidesPerView: 6,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        //настройки адаптивной верстки
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,

            },
            // when window width is >= 480px
            480: {
                slidesPerView: 3,

            },
            // // when window width is >= 768px
            // 768: {
            //     slidesPerView: 4,

            // },
            // when window width is >= 992px
            992: {
                slidesPerView: 6,

            }
        }
    });



    const reviewsSlider = new Swiper('.reviews-slider', {
        // Optional parameters
        loop: true,
        slidesPerView: 1,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    /* Прокручивает страницу вверх при нажатии на кнопку */
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        if (height > 100) {
            $('#back2Top').fadeIn();
        } else {
            $('#back2Top').fadeOut();
        }
    });
    $(document).ready(function () {
        $("#back2Top").click(function (event) {
            event.preventDefault();
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
            return false;
        });

    });


    $("#review-1").on('click', function () {

        $.fancybox.open([{
                src: 'https://c.wallhere.com/photos/14/9e/gerbera_calla_lilies_lily_flowers_bouquet_decoration_close_up-1082339.jpg!d',
                opts: {
                    caption: 'First caption',
                    // thumb: 'https://source.unsplash.com/IvfoDk30JnI/240x160'
                }
            },
            {
                src: 'https://i.artfile.ru/1917x1440_635977_[www.ArtFile.ru].jpg',
                opts: {
                    caption: 'Second caption',
                    // thumb: 'https://source.unsplash.com/0JYgd2QuMfw/240x160'
                }
            }
        ], {
            loop: true,
            thumbs: {
                autoStart: true
            }
        });

    });

    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

});