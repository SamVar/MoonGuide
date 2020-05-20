//Controls light box options
function lightBoxOption() {
	lightbox.option({
		resizeDuration: 100,
		fadeDuration: 100,
		wrapAround: true,
		disableScrolling: true,
		alwaysShowNavOnTouchDevices: true,
	});

	//Checks if device is mobile or desktop
	let isMobile = navigator.userAgent.match(
		/(iPhone|iPod|iPad|Android|webOS|BlackBerry|IEMobile|Opera Mini)/i
	);

	//If device is mobile position 200px from top
	if (isMobile) {
		lightbox.option({
			positionFromTop: 150,
		});
	}
	//If device is Desktop position is 50px from top
	else {
		lightbox.option({
			positionFromTop: 50,
		});
	}
}
