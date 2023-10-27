
const owl = $('.owl-carousel');
owl.owlCarousel({
	loop: true,
	margin: 30,
	items: 2,
});

$('.slider-btn--prev').click(function() {
    owl.trigger('prev.owl.carousel');
})

$('.slider-btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})

