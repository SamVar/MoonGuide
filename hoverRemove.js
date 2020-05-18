// Checks if the device is mobile or desktop
function hoverRemove() {
	var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
	if (isMobile) {
		var classRemove = document.querySelectorAll(".drop");
		for (var i = 0; i < classRemove.length; i++) {
			classRemove[i].classList.remove("drop");
		}
		//Closes drop down menu after selection has been made on mobile devices
		$(".navbar").on("click", ".dropdown-item", function () {
			$(".navbar-collapse").collapse("hide");
		});
	}
	
	
}
