// Checks if the device is mobile or desktop
function hoverRemove() {
	var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
	if (isMobile) {
		//Removes class drop on mobile
		var classRemove = document.querySelectorAll(".drop");
		for (var i = 0; i < classRemove.length; i++) {
			classRemove[i].classList.remove("drop");
		}

		//Closes drop down menu after selection has been made on mobile devices
		$(".navbar").on("click", ".dropdown-item", function () {
			$(".navbar-collapse").collapse("hide");
		});

		var menuIsVisible;
		//Checks if humberger button is clicked and menu is visible
		$(".navbar").on("click", ".navbar-toggler", function () {
			menuIsVisible = $("#navbarTogglerDemo02").is(":visible");

			if (!menuIsVisible) {
				$("main").addClass("fixedPosition");
			} else {
				$("main").removeClass("fixedPosition");
			}
		});

		//Checks if humberger button is clicked and Sub menu is visible
		$(".navbar").on("click", ".dropdown-item", function () {
			menuIsVisible = $("#navbarTogglerDemo02").is(":visible");

			if (!menuIsVisible) {
				$("main").addClass("fixedPosition");
			} else {
				$("main").removeClass("fixedPosition");
			}
		});
	}

	//removes drop class on desktop mode to deactivate hover future
	else {
		var dropClass = document.getElementById("remove-hover");
		$(".navbar").on("click", ".dropdown-item", function () {
			// removes drop class to disable hover
			dropClass.classList.remove("drop");
			//Waits 1 seconds and activates hover feauture again
			setTimeout(function () {
				dropClass.classList.add("drop");
			}, 100);
		});
	}
}
