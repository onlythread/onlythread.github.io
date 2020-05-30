// VARIABLES
const btnFiltering = document.getElementById('filtering'),
ulFilms = document.getElementById('list-films'),
category = document.getElementById('category').value,
openFilmFullScreen = document.getElementById('view-film-full-screen');






// FUNCTIONS

function firstLoad() { // Function if category is random
	const filmsForUsedRandom = arrayRandomFilms(films);
	return insertInHTMLwithNameAndCategory(filmsForUsedRandom);
}


function whatFilmCategory() { // What Film Category for return
	const category = document.getElementById('category').value
	if(category !== 'random') {
		const AllfilmsFiltereds = films.filter(filmFiltered => filmFiltered.category.includes(category))
		return insertInHTMLwithNameAndCategory(AllfilmsFiltereds);
	} else {
		return firstLoad();	
	}
}

function transformArrayInString(array) {
	return array.join(', ');	
}

function insertInHTMLwithNameAndCategory(filmsFiltered) {
	ulFilms.innerHTML = '';

	filmsFiltered.map(film => {
		const liItem = document.createElement('li');
		const pNameFilm = document.createElement('p');
		const pCategoryFilm = document.createElement('p');
		const buttonWatch = document.createElement('button');
		
		pNameFilm.innerHTML = `<span>Name:</span>${film.name_film}`;
		pCategoryFilm.innerHTML = `<span>Categoria:</span>${
			transformArrayInString(film.category)
		}`;
		
		buttonWatch.onclick = () => watchFilmWithClick(film.link_film);
		buttonWatch.innerText = 'Assistir';

		liItem.appendChild(pNameFilm);
		liItem.appendChild(pCategoryFilm);
		liItem.appendChild(buttonWatch);

		return ulFilms.appendChild(liItem);
	});
}


function closeIframe() {
	openFilmFullScreen.classList.remove('open');
	document.body.style.overflowY = 'initial';
	openFilmFullScreen.children[1].remove();
	openFilmFullScreen.children[0].remove();
};



function watchFilmWithClick(link) {
	openFilmFullScreen.classList.add('open');
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
	});
	document.body.style.overflowY = 'hidden';



	const divClose = document.createElement('div');
	divClose.id = "close";
	divClose.innerText = '+';
	

	const iframeCompleted = parseHttpfromIframe(link);

	openFilmFullScreen.appendChild(divClose);
	openFilmFullScreen.innerHTML += iframeCompleted;
	openFilmFullScreen.children[0].onclick = closeIframe;
}	

// EVENTS
window.addEventListener("load", firstLoad);// Insert when loading page

btnFiltering.addEventListener('click' , whatFilmCategory);// Filtering Films with Category

