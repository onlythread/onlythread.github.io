// Function for modification id_film for HTML Iframe
function parseHttpfromIframe(film_url) {
	// const iframeItem = document.createElement('iframe');
	const httpForIframe = `https://drive.google.com/file/d/${film_url}/preview`;

	const iframe = `<iframe src="${httpForIframe}" frameborder="0" allowfullscreen="true"></iframe>`;

	// iframeItem.src = httpForIframe;
	// iframeItem.frameborder =`${0}`;
	// iframeItem.allowfullscreen =`${true}`;
	// console.log(iframeItem.allowfullscreen)

	// return iframeItem;

	return iframe;

}
