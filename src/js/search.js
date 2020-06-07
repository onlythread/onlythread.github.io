const submitSearchFilm = document.querySelector('.searchFilms form');

submitSearchFilm.onsubmit = function (e) {
	e.preventDefault();
	const search = document.querySelector('#search-input').value;

	const withoutPrimaryLetter = search.slice(1);
	const camelCase = search.charAt(0).toUpperCase() + withoutPrimaryLetter; 

	const PATTERN = RegExp(camelCase);
	const filtered = films.filter((filmsFiltereds) => ( PATTERN.test(filmsFiltereds.name_film) ));

	if(filtered.length !== 0 ) {
		return insertInHTMLwithNameAndCategory(filtered);		
	} else {
		return alert('Não existe esse filme ou  você escreveu errado o nome do filme, aperte em (okay) e tente de novo :).');
	}

}