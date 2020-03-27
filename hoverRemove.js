function hoverRemove() {
	var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
	if (isMobile) {
		var classRemove = document.querySelectorAll(".drop");
		for (var i = 0; i < classRemove.length; i++) {
			classRemove[i].classList.remove("drop");
		}
	}
}
