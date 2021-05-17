function sliders_bild_callback(params) { }

let slider_about = new Swiper('.gallery__container', {
	
	// effect: 'fade',
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	// observer: true,
	// observeParents: true,
	slidesPerView: 4,
	spaceBetween: 15,
	// autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	// loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	//pagination: {
	//	el: '.slider-quality__pagging',
	//	clickable: true,
	//},
	// Arrows
	navigation: {
		nextEl: '.about__more .more__item_next',
		prevEl: '.about__more .more__item_prev',
	},

	 breakpoints: {
		 	320: {
	 		slidesPerView: 1,
			spaceBetween: 10,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1268: {
			slidesPerView: 3,
			spaceBetween: 10,
		},
	},

	// on: {
	// 	lazyImageReady: function () {
	// 		ibg();
	// 	},
	// }
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});
