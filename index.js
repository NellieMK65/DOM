// First argument - event
// Second argument - callback function
document.addEventListener('DOMContentLoaded', () => {
	const header = document.getElementById('greeting');

	console.log(header);

	const elements = document.getElementsByClassName('banner');

	console.log(elements.length);

	const main = document.getElementsByTagName('main')[0];

	const children = main.children;

	console.log(children);

	const li2 = document.querySelector('ul.ranked-list li ul li');

	console.log(li2);

	// Event listener
	const button = document.getElementById('my-button');

	button.addEventListener('click', function () {
		console.log('Clicked');
	});
});
