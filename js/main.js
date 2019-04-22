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

var x,y,top,left,down;

$("#content").mousedown(function(e){
    e.preventDefault();
    down=true;
    x=e.pageX;
    y=e.pageY;
    top=$(this).scrollTop();
    left=$(this).scrollLeft();
});

$("main").mousemove(function(e){
    if(down){
        var newX=e.pageX;
        var newY=e.pageY;
        
        //console.log(y+", "+newY+", "+top+", "+(top+(newY-y)));
        
        $("#content").scrollTop(top-newY+y);    
        $("#content").scrollLeft(left-newX+x);    
    }
});

$("main").mouseup(function(e){down=false;});
