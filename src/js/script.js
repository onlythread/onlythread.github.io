// Fixed navbar
$(window).scroll(function() {
	if($(document).scrollTop() > 50) {
		$('header nav').addClass('fixed').slideDown()

	} 
	else{
		$('header nav').removeClass('fixed')
	}
});

// Scroll down 
btnFilms = document.getElementById('viewfilms');

btnFilms.addEventListener('click', () => {
	window.scrollTo({
		top: 500,
		left: 0,
		behavior: 'smooth'
	})
});

const btnBurger = document.querySelector('.burger');
const nav = document.querySelector('#nav-links');

btnBurger.addEventListener('click', () => {
	
	nav.classList.toggle('active');
});