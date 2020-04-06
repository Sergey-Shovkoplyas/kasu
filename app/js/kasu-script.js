$(document).ready(function () {

  let mySwiper = new Swiper('.kasu__community-slider', {
		// initialSlide: 1,
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

