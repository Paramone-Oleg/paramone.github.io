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

function handle_mousedown(e){
    window.my_dragging = {};
    my_dragging.pageX0 = e.pageX;
    my_dragging.pageY0 = e.pageY;
    my_dragging.elem = this;
    my_dragging.offset0 = $(this).offset();
    function handle_dragging(e){
        var left = my_dragging.offset0.left + (e.pageX - my_dragging.pageX0);
        var top = my_dragging.offset0.top + (e.pageY - my_dragging.pageY0);
        $(my_dragging.elem)
        .offset({top: top, left: left});
    }
    function handle_mouseup(e){
        $('body')
        .off('mousemove', handle_dragging)
        .off('mouseup', handle_mouseup);
    }
    $('body')
    .on('mouseup', handle_mouseup)
    .on('mousemove', handle_dragging);
}
$('#content').mousedown(handle_mousedown);
