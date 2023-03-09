// First argument - event
// Second argument - callback function
document.addEventListener('DOMContentLoaded', () => {
	const header = document.getElementById('greeting');

	console.log(header);

	const elements = document.getElementsByClassName('banner');

	console.log(elements.length);
});
