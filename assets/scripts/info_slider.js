





function CheckAndSlick(){
    var $windowWidth = $(window).width();
    if ($windowWidth <= 500) {
        $('.we-content-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: false,
            dots: false,
            pauseOnHover: false,
        });
    }
}
CheckAndSlick();

