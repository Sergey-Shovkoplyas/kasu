$(document).ready(function () {

  let mySwiper = new Swiper('.kasu__community-slider', {
		slidesPerView: 2,
		spaceBetween: 20,
		breakpoints: {
			768: {
        slidesPerView: 4,
				spaceBetween: 40
			}
		}
  });

  mySwiper.slideTo(1, 0, false);

});

