// Fixed navbar
$(window).scroll(function() {
	if($(document).scrollTop() > 50) {
		$('header nav').addClass('fixed').slideDown()

	} 
	else{
		$('header nav').removeClass('fixed')
	}
});


const btnBurger = document.querySelector('.burger');
const nav = document.querySelector('#nav-links');

btnBurger.addEventListener('click', () => {
	
	nav.classList.toggle('active');
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});