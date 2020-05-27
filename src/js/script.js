$(window).scroll(function() {
	if($(document).scrollTop() > 50) {
		$('header nav').addClass('fixed').slideDown()

	} 
	else{
		$('header nav').removeClass('fixed')
	}
});

btnFilms = document.getElementById('viewfilms');

btnFilms.addEventListener('click', () => {
	window.scrollTo({
		top: 500,
		left: 0,
		behavior: 'smooth'
	})
});
