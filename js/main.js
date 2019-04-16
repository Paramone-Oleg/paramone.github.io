var toLoad;

function showNewContent() {
	$('.project-content').slideUp(700, function () {
		$('.project-content').slideDown(500, function () {
			$.waypoints('refresh')
		});
	});
}

function loadContent() {
	$('.project-content').load(toLoad, showNewContent());
}
$('.ajax-portfolio-link').click(function () {
	toLoad = $(this).attr('href');
	loadContent();
	$('html, body').animate({
		scrollTop: $('.project-content').position().top
	}, 500);
	return false;
});

const slider = document.querySelector('#content');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
	isDown = true;
	slider.classList.add('active');
	startX = e.pageX - slider.offsetLeft;
	scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
	isDown = false;
	slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
	isDown = false;
	slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
	if (!isDown) return;
	e.preventDefault();
	const x = e.pageX - slider.offsetLeft;
	const walk = (x - startX) * 3; //scroll-fast
	slider.scrollLeft = scrollLeft - walk;
	console.log(walk);
});
