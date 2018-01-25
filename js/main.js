$('a').attr('href', 'https://www.google.com');
$('a').attr('target', '_blank');


//------------------------toggle

var toggleCheck = true;
$('.header__toggleCircle').click(function () {
    if (toggleCheck == true) {
        $('.header__toggle').css('justify-content', 'flex-end');
        toggleCheck = false;
    } else {
        $('.header__toggle').css('justify-content', 'flex-start');
        toggleCheck = true;
    }
});


//------------------------stars

var checkRate = false;


$('.content__rate img').mouseover(function () {
    var imgIndex = $(this).attr('title');
    if (checkRate == false) {
        for (var i = 0; i <= imgIndex; i++) {
            $('.content__rate img:eq(' + i + ')').attr('src', 'img/star.png');
        };
    };
});

$('.content__rate img').mouseout(function () {
    if (checkRate == false) {
        $('.content__rate img').attr('src', 'img/starToRate.png');
    };
});

$('.content__rate img').click(function () {
    if (checkRate == false) {
        checkRate = true;
        var imgIndex = $(this).attr('title');
        for (var i = 0; i <= imgIndex; i++) {
            $('.content__rate img:eq(' + i + ')').attr('src', 'img/star.png');
        }
    } else {
        $('.content__rate img').attr('src', 'img/starToRate.png');
        checkRate = false;
    };
});


//-------------------------slider

$('.content__pic').click(function () {
    var img = $(this).attr('src');
    var title = $(this).attr('title');
    $('.content__image img:eq(0)').attr('src', img);
    $('.content__image img:eq(0)').attr('title', title);
});

$('.content__slideLeft').click(function () {
    var title = $('.content__image img:eq(0)').attr('title');
    if(title > 0){
        $('.content__image img:eq(0)').attr('src', 'img/camera' + (title - 1) + '.png');
        $('.content__image img:eq(0)').attr('title', (title - 1));
    }
});

$('.content__slideRight').click(function () {
    var title = $('.content__image img:eq(0)').attr('title');
    if(title < 2){
        if(title == 0){
            var x = 1
        }else{
            var x = 2
        }
        $('.content__image img:eq(0)').attr('src', 'img/camera' + x + '.png');
        $('.content__image img:eq(0)').attr('title', x);
    }
});