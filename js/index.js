$(document).ready(function() {
  AOS.init();
  $(".testimonials").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000
  });
});
