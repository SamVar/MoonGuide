// Checks if the device is mobile or desktop
function hoverRemove() {
	var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
	if (isMobile) {
		var classRemove = document.querySelectorAll(".drop");
		for (var i = 0; i < classRemove.length; i++) {
			classRemove[i].classList.remove("drop");
		}

		$(".navbar-toggler").on('touchstart','.navbar-collapse.in',function(e) {

			if( $(e.target).is('a') && ( $(e.target).attr('class') != 'dropdown-toggle' ) ) {
				$(this).collapse('hide');
			}
		
		});
	}
}
