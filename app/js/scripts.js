

$('.telephone__numbers').hover(
    function () {
        $('.telephones__hidden').addClass('active')
    },
    function () {
        $('.telephones__hidden').removeClass('active')
    }
);
$('.back__catalog').click( () => {
        $('.mobile__hidden').removeClass('open')
        $('.back__catalog').removeClass('opened')
        $('.close').removeClass('op');
        $('.close').removeClass('op2');
        if (document.querySelector('#column-left')) {
            $('aside#column-left').removeClass('mob-visible');

        }
}

)

if (window.innerWidth < 1024) {

    $('.mob-catalog-btn').click(
        // function(){ $('.catalog__menu').removeClass('hidden-menu') },
        function () {

        },
        function (e) {
            e.preventDefault();
            $('.mobile__hidden').addClass('open');
            $('.catalog__menu').toggleClass('act1');
            $('.catalog__menu').addClass('open');
            $('.catalog__menu').removeClass('act1');
            $('.close').addClass('op');
            $('.back__catalog').addClass('opened');
            console.log('helwww')
        },
        function () {

        },
        function () {

        }
    );

    let mobCatalogBtns = [...document.querySelectorAll('.mob-catalog-btn')];
    mobCatalogBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            $('.catalog__menu').addClass('open');
        })
    })

    let subMenuMob3lvl = [...document.querySelectorAll('.catalog__submenu__item.has-sub3 > .catalog__submenu__link')];

    subMenuMob3lvl.forEach((sub) => {
        sub.addEventListener('click', (e) => {
            e.preventDefault();
            sub.closest('.has-sub3').classList.add('active');
        });
    });
    [...document.querySelectorAll('.submenu3-back')].forEach((sb3) => {
        sb3.addEventListener('click', () => {
            sb3.closest('.has-sub3').classList.remove('active');
        })
    });
    [...document.querySelectorAll('.submenu-back')].forEach((sb2) => {
        sb2.addEventListener('click', () => {
            sb2.closest('.catalog__submenu__list').classList.remove('active');
        })
    })

    // $('.has-submenu > a').click(
    //     function (e) {
    //         e.preventDefault();
    //         $(this).closest('.has-submenu').addClass('active')
    //     }
    // );

    let subMenusA = [...document.querySelectorAll('.has-submenu > a')];

    function subMenusOpeners() {
        if (!subMenusA.length) {

        } else {
            subMenusA.forEach((btn) => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    btn.closest('.has-submenu').classList.add('active');
                })
            })
        }
    }
    subMenusOpeners();
    // $('.has-sub3').click(
    //     function () {
    //         $(this).find('.submenu3__list').addClass('active')
    //     },
    //     function () {
    //         $(this).find('.catalog__submenu__list').removeClass('active')
    //     }
    // );

    $('.menu-back').click(
        function () {
            $(this).closest('.catalog__menu').removeClass('open')
        },
        function () {
            $(this).closest('.catalog__menu').removeClass('act1')
            $(this).closest('.catalog__menu').removeClass('open')
        },
    );
    $('.submenu-back').click(
        function () {
            $(this).addClass('active')
        },
        function () {
            $(this).closest('.has-submenu').removeClass('active')
        }
    );
    $('.submenu3-back').click(
        function () {
            $(this).closest('.submenu3__list').removeClass('active')
        }
    );

}
else {
    $('#catalog-button, .catalog__menu').hover(
        function () {
            $('.back__catalog').addClass('opened')
        },
        function () {
            $('.back__catalog').removeClass('opened')
        }
    );
    $('#catalog-button:not(.mob-catalog-btn), .catalog__menu:not(.mob-catalog-btn)').hover(
        function () {
            $('.new').addClass('act')
            console.log('hello')

        },
        function () {
            $('.new').removeClass('act')
            console.log('hello')
        },

        function () {
            $('.catalog__menu').addClass('act1')
            console.log('hello')
        },
        function () {
            $('.catalog__menu').removeClass('act1')
            console.log('hello')
        },
        function () {
            $('.catalog__menu').removeClass('open')
            console.log('hello')
        }
    );

    $('.catalog__menu:not(.mob-catalog), #catalog-button:not(.mob-catalog)').hover(
        function () {
            $('.catalog__menu').removeClass('hidden-menu')
            console.log('hello')
        },

        function () {
            $('.catalog__menu').addClass('hidden-menu')
            console.log('hello')
        },
        function () {
            $('.catalog__menu').addClass('act1')
            console.log('hello2')
        },
        function () {
            $('.catalog__menu').removeClass('act1')
            console.log('hello')
        },
        function () {
            $('.catalog__menu').removeClass('open')
            console.log('hello')
        }
    );
}

$('.pr__slide').hover(
    function () {
        $('.pr__info-hover').addClass('active')
    },
    function () {
        $('.pr__info-hover').removeClass('active')
    }
);


let headerHeightFromLoad = $('header.mobile').outerHeight();
function checkHeaderPosition() {
    // console.log('started')
    if (window.innerWidth > 1023) {
        if ($(this).scrollTop() > $('header').height()) {
            $('header .bottom-line').addClass('fixed');
            $('main').css('padding-top', $('header .bottom-line').height());
            $('header .catalog__menu').addClass('new');
            $('header .catalog__menu').addClass('hidden-menu');
            // console.log($('header').height());
        } else {
            $('header .bottom-line').removeClass('fixed');
            $('header .catalog__menu').removeClass('new');
            $('header .catalog__menu').add('hidden-menu');
            $('main').css('padding-top', 0);
        }

    } else {
        // console.log(headerHeightFromLoad);
        // console.log($(this).scrollTop() + ' scroll')
        if ($(this).scrollTop() > headerHeightFromLoad) {
            $('header.mobile').addClass('fixed1');
            $('main').css('padding-top', headerHeightFromLoad);
        } else {
            $('header.mobile').removeClass('fixed1');
            $('main').css('padding-top', 0);
        }

    }
}
$(window).scroll(checkHeaderPosition);
checkHeaderPosition();

$('.slider1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    lazyLoad: 'ondemand',
    appendArrows: $('.appendArrows1'),
    appendDots: $('.appendDots1'),
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]

});

$('.product-add').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    lazyLoad: 'ondemand',
    appendArrows: $('.appendArrowsAdd'),
    appendDots: false,
});


$('.product__slide1').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    fade: false,
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: false,
    appendArrows: $('.appendArrows2'),
    settings: "unslick",
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                arrows: true,
                dots: false
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                arrows: true,
                dots: false
            }
        },
        {
          breakpoint: 1023,
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]

});



$('.product__slide2').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    fade: false,
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: false,
    appendArrows: $('.appendArrows3'),
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                arrows: true,
                dots: false
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                arrows: true,
                dots: false
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]

});

$('.product__slide3').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    fade: false,
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: false,
    appendArrows: $('.appendArrows4'),
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                arrows: true,
                dots: false
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                arrows: true,
                dots: false
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]

});

$('.product__slide4').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    fade: false,
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: false,
    appendArrows: $('.appendArrows5'),
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                arrows: true,
                dots: false
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                arrows: true,
                dots: false
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]

});
//
// $('.section__blog__row').slick({
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     fade: false,
//     dots: false,
//     arrows: false,
//     infinite: true,
//     autoplay: false,
//     variableWidth: true,
//     responsive: [
//         {
//             breakpoint: 1440,
//             settings: {
//                 slidesToShow: 4,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 arrows: false,
//                 dots: false
//             }
//         },
//         {
//             breakpoint: 1200,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 arrows: false,
//                 dots: false
//             }
//         },
//         {
//             breakpoint: 992,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 arrows: false,
//                 dots: false
//             }
//         },
//         {
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         }
//         // You can unslick at a given breakpoint now by adding:
//         // settings: "unslick"
//         // instead of a settings object
//     ]
//
// });


// $('.mob_cat').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     fade: false,
//     dots: false,
//     arrows: false,
//     infinite: true,
//     autoplay: false,
//     responsive: [
//
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1
//             }
//         }
//         // You can unslick at a given breakpoint now by adding:
//         // settings: "unslick"
//         // instead of a settings object
//     ]
//
// });

function checkWidthWindowSliders() {
    if (window.innerWidth < 1024) {

        $('.product__slide1').slick('unslick');
        $('.product__slide2').slick('unslick');
        $('.product__slide3').slick('unslick');
        $('.product__slide4').slick('unslick');
        // $('.section__blog__row').slick('unslick');




    } else {
        if (window.innerWidth > 1200) {
            // $('.section__blog__row').slick('unslick');
        }
    }
}
checkWidthWindowSliders();
// Mobile menu
$(document).ready(function () {

    $('.burger').click(function (event) {
        $('.mobile__hidden').toggleClass('open');
        $('.close').addClass('op');
        $('.back__catalog').addClass('opened');
        // $('.mob-catalog').addClass('opened');


    });

    $('.close').click(function (event) {
        $('.mobile__hidden').removeClass('open');
        $('.close').removeClass('op');
        $('.back__catalog').removeClass('opened');
        $('.mob-catalog').removeClass('opened');

        if (document.querySelector('#column-left')) {
            $('aside#column-left').removeClass('mob-visible');
            $('.close').removeClass('op2');

        }

    });

});

/* Открыть закрыть мобильный список */
$('.sub__parrent').hide();
$('.parrent').click(function () {
    $(this).find('.sub__parrent').slideToggle(300);
    $(this).find('.aft').toggleClass('minus');
});

/* Открыть закрыть частые ворпросы */
$('.info__hidden').hide();
$('.info__block').click(function () {
    $(this).siblings('.info__hidden').slideToggle(300);
    $(this).toggleClass('f__active');
});


$('.main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: true,
    dots: false,
    arrows: false,
});


$('.thumb-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: false,
    autoplay: false,
    asNavFor: '.main-slider',
    focusOnSelect: true,
    centerMode: false,
    vertical: true,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                centerMode: true,
                slidesToShow: 1,
                arrows: true,
                variableWidth: true,
                dots: true,
                vertical: false,
                asNavFor: false,
                infinite: false,
                appendDots: $('.appendDots1'),
                appendArrows: $('.appendArrowsThumb'),
            }
        }
    ]
});

$(document).ready(function() {
    if (document.querySelector('.sort-select')) {
        $('.sort-select').niceSelect();
    }

});

$('.filter-mob-btn').click(()=> {
    $('aside#column-left').addClass('mob-visible');
    $('.close').addClass('op');
    $('.close').addClass('op2');
    $('.back__catalog').addClass('opened');
})
$('.show-all-filter').click(()=> {
    $('aside#column-left').removeClass('mob-visible');
    $('.close').removeClass('op');
    $('.close').removeClass('op2');
    $('.back__catalog').removeClass('opened');
})


// Получаем нужный элемент
var elementBtns = document.querySelector('.product .product__features');

var Visible = function (target) {
    if (!elementBtns) {

    } else {
        var targetPosition = {
                top: window.pageYOffset + target.getBoundingClientRect().top,
                left: window.pageXOffset + target.getBoundingClientRect().left,
                right: window.pageXOffset + target.getBoundingClientRect().right,
                bottom: window.pageYOffset + target.getBoundingClientRect().bottom
            },
            // Получаем позиции окна
            windowPosition = {
                top: window.pageYOffset + 80,
                left: window.pageXOffset,
                right: window.pageXOffset + document.documentElement.clientWidth,
                bottom: window.pageYOffset + document.documentElement.clientHeight
            };

        if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
            targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
            targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
            targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
            // Если элемент полностью видно, то запускаем следующий код
            document.querySelector('.product-banner-fix').classList.remove('visible');
        } else {
            // Если элемент не видно, то запускаем этот код
            document.querySelector('.product-banner-fix').classList.add('visible');
        };
    }
    // Все позиции элемента

};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function() {
    Visible (elementBtns);
});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
Visible (elementBtns);


$(".product-banner-fix__container .text ul li").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".tabs-section").offset().top
    }, 200);
});
$(".brands-alphabet__item").click(function() {

    $([document.documentElement, document.body]).animate({
        scrollTop: $(`.brands__letter[data-id='${this.dataset.id}']`).offset().top
    }, 200);
});

$(".product__features_head .rev__txt").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".tabs-section").offset().top,

    }, 200);
    $('#pills-rewiev-tab').click();
});


let liFixedHidden = [...document.querySelectorAll('.product-banner-fix__container .text ul li')];

function ifProdPage() {
    if (!liFixedHidden.length) {

    } else {
        let tabSectionBtn = [...document.querySelectorAll('.tabs-section .nav-link')];
        liFixedHidden.forEach((btn, k) => {
            btn.addEventListener('click', () => {
                if (document.querySelector('.product-banner-fix__container .text ul li.active')) {
                    document.querySelector('.product-banner-fix__container .text ul li.active').classList.remove('active');
                }
                btn.classList.add('active');
                tabSectionBtn[k].click();
            })
        })
    }
}
ifProdPage();
$('.product__preview .actions-right a').click((e) => {
    e.preventDefault();
})


$('.prof-open-btn').click(()=> {
    $('.column-left__profile').toggleClass('opens');
})