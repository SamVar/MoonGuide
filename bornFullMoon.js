//Finds if user were born on a full moon
//Written by Samvel Vardanyan

//Function that dynamically adds month, year and day
function addDays() {
	let year, month, dayLenght;
	for (let i = 1950; i <= 2020; i++) {
		addOption(document.bornForm.bornYear, i, i);
	}

	for (let i = 1; i <= 12; i++) {
		var text = nameOfMonths(i);
		addOption(document.bornForm.bornMonth, i, text);
	}
	document.getElementById("bornYear").selectedIndex = 50;
	document.getElementById("bornMonth").selectedIndex = 0;

	year = document.getElementById("bornYear").value;
	month = document.getElementById("bornMonth").value;

	dayLenght = numberOfDays(year, month);

	for (let i = 1; i <= dayLenght; i++) {
		addOption(document.bornForm.bornDay, i, i);
	}
}

//Function that checks if month or year input changed
function checkInput() {
	let year, month, dayLenght;
	year = document.getElementById("bornYear").value;
	month = document.getElementById("bornMonth").value;
	dayLenght = numberOfDays(year, month);
	document.getElementById("bornDay").innerHTML = "";
	for (let i = 1; i <= dayLenght; i++) {
		addOption(document.bornForm.bornDay, i, i);
	}
}

//Function that takes user input and returns moon phase for their birthday
function moonPhaseBorn() {
	let year,
		month,
		day,
		age,
		illumination,
		moonPhaseAndMoonImage,
		moonPhase,
		moonImage,
		moonPhaseAndIllumination;

	year = document.getElementById("bornYear").value;
	month = document.getElementById("bornMonth").value;
	day = document.getElementById("bornDay").value;
	year = parseInt(year);
	month = parseInt(month);
	day = parseInt(day);

	//Calling function to find moon age and illumination
	moonPhaseAndIllumination = calculateMoonPhase(year, month, day);
	age = moonPhaseAndIllumination[0];
	illumination = moonPhaseAndIllumination[1];

	//Calling function to find moon phase and image
	moonPhaseAndMoonImage = moonPhaseNameAndImage(age);
	moonPhase = moonPhaseAndMoonImage[0];
	moonImage = moonPhaseAndMoonImage[2];

	//Printing message on the screen
	// document.querySelector(".you-were-born-text1").innerHTML =
	// 	"This is how the moon looked on the day you were born";

	//Printing everything on the screen
	// document.querySelector(".you-were-born-text").innerHTML =
	// 	"You were born on " +
	// 	moonPhase +
	// 	"<br>" +
	// 	"Moon age: " +
	// 	age +
	// 	" days" +
	// 	"<br>" +
	// 	"Moon Illumination: " +
	// 	illumination +
	// 	"%" +
	// 	"<br>";

	// Printing moon image on the screen
	// document.querySelector(".you-were-born-moon-img").innerHTML = moonImage;

	//Print text read more bellow
	// document.querySelector(".read-more").innerHTML =
	// 	"Read more about your Lunar Phase bellow";
	addHrefAttribute(moonPhase);
}

//Function that adds href attribute to h2 tag
function addHrefAttribute(moonPhase) {
	var x,
		y = "#sec4";

	if (moonPhase == "New Moon") {
		x = "#NewMoon";
		document.querySelector(".return1").innerHTML = "Return";
		document.getElementById("return-new-moon").setAttribute("href", y);
	} else if (moonPhase == "Waxing Crescent") {
		x = "#WaxingCrescent";
		document.querySelector(".return2").innerHTML = "Return";
		document.getElementById("return-waxing-crescent").setAttribute("href", y);
	} else if (moonPhase == "First Quarter") {
		x = "#FirstQuarter";
		document.querySelector(".return3").innerHTML = "Return";
		document.getElementById("return-first-quarter").setAttribute("href", y);
	} else if (moonPhase == "Waxing Gibbous") {
		x = "#WaxingGibbous";
		document.querySelector(".return4").innerHTML = "Return";
		document.getElementById("return-waxing-gibbous").setAttribute("href", y);
	} else if (moonPhase == "Full Moon") {
		x = "#FullMoon";
		document.querySelector(".return5").innerHTML = "Return";
		document.getElementById("return-full-moon").setAttribute("href", y);
	} else if (moonPhase == "Waning Gibbous") {
		x = "#WaningGibbous";
		document.querySelector(".return6").innerHTML = "Return";
		document.getElementById("return-waning-gibbous").setAttribute("href", y);
	} else if (moonPhase == "Last Quarter") {
		x = "#LastQuarter";
		document.querySelector(".return7").innerHTML = "Return";
		document.getElementById("return-last-quarter").setAttribute("href", y);
	} else if (moonPhase == "Waning Crescent") {
		x = "#WaningCrescent";
		document.querySelector(".return8").innerHTML = "Return";
		document.getElementById("return-waning-crescent").setAttribute("href", y);
	}

	document.getElementById("jumpToPhase").setAttribute("href", x);
}

//Cleans return link after link is pressed
function cleanReturns() {
	for (let i = 0; i < 8; i++) {
		document.querySelectorAll(".return-link")[i].innerHTML = "";
	}
}
