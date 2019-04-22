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
