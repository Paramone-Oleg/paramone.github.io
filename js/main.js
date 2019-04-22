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

(function () {
  var scrollEl = document.querySelector('main')
  var scr = new ScrollBooster({
    viewport: document.querySelector('section#content'),
    emulateScroll: true,
    mode: 'x',
    onUpdate: function (data) {
      scrollEl.style.transform = 'translate(' + -data.position.x + 'px, ' + -data.position.y + 'px)'
    }
  })
  scr.setPosition({
    x: 100
  })

})()
