$(document).ready(function() {
    $('.header__navigation__contact-phone').appendTo($(".header__navigation-list"));
})

$(document).ready(function() {
    $('.header__burger').click(function() {
        $('.header__burger').toggleClass('open-menu');
        $('.header__navigation').toggleClass('open-menu');
    });
});

$(document).ready(function() {
	$('.phone').click(function() {
        $('#phone-1').toggleClass('_active');
        $('#phone-2').toggleClass('_active');
	});
});

$(document).ready(function() {
	$('.phone').click(function() {
        $('#phone-1-foot').toggleClass('_active');
        $('#phone-2-foot').toggleClass('_active');
	});
});


lightGallery(document.querySelector('.gallery__wrapper'));