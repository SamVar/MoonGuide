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
	document.getElementById("bornDay").selectedIndex = 0;
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
		moonPhase,
		moonImage,
		monthName,
		illumination,
		bornMoonImage,
		moonPhaseAndMoonImage,
		moonPhaseAndIllumination;

	year = document.getElementById("bornYear").value;
	month = document.getElementById("bornMonth").value;
	day = document.getElementById("bornDay").value;
	year = parseInt(year);
	month = parseInt(month);
	day = parseInt(day);

	//Calling function which returns name of the month
	monthName = nameOfMonths(month);

	//Calling function to find moon age and illumination
	moonPhaseAndIllumination = calculateMoonPhase(year, month, day);
	age = moonPhaseAndIllumination[0];
	illumination = moonPhaseAndIllumination[1];

	//Calling function to find moon phase and image
	moonPhaseAndMoonImage = moonPhaseNameAndImage(age);
	moonPhase = moonPhaseAndMoonImage[0];
	moonImage = moonPhaseAndMoonImage[2];
	bornMoonImage = moonPhaseAndMoonImage[3];
	addHrefAttribute(moonPhase);
	printPhase(moonPhase, age, illumination, bornMoonImage, year, monthName, day);
}

//Function that adds href attribute to h2 tag for Return attribute
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
		document.querySelectorAll(".born-text")[i].innerHTML = "";
		document.querySelectorAll(".div-banner")[i].style.backgroundColor = "";
		document.querySelectorAll(".born-moon-image")[i].innerHTML = "";
		document.querySelectorAll(".border-line")[i].style.borderBottom = "none";
		document.querySelectorAll(".border-line")[i].style.marginTop = "0rem";
		document.querySelectorAll(".extraSpace")[i].style.marginTop = "0rem";
	}
}

//Prints moon phase for the date of birth
function printPhase(
	moonPhase,
	age,
	illumination,
	bornMoonImage,
	year,
	monthName,
	day
) {
	let z;
	let formateDate = monthName + " " + day + ", " + year;

	if (moonPhase == "New Moon") {
		z = 0;
	} else if (moonPhase == "Waxing Crescent") {
		z = 1;
	} else if (moonPhase == "First Quarter") {
		z = 2;
	} else if (moonPhase == "Waxing Gibbous") {
		z = 3;
	} else if (moonPhase == "Full Moon") {
		z = 4;
	} else if (moonPhase == "Waning Gibbous") {
		z = 5;
	} else if (moonPhase == "Last Quarter") {
		z = 6;
	} else if (moonPhase == "Waning Crescent") {
		z = 7;
	}

	document.querySelectorAll(".born-text")[z].innerHTML =
		"<strong>Your Birthday:</strong> " +
		formateDate +
		"<br>" +
		"<strong>Phase:</strong> " +
		moonPhase +
		"<br>" +
		"<strong>Moon age:</strong> " +
		age +
		" days" +
		"<br>" +
		"<strong>Illumination:</strong> " +
		illumination +
		"%";
	document.querySelectorAll(".born-moon-image")[z].innerHTML = bornMoonImage;

	//Styles
	document.querySelectorAll(".div-banner")[z].style.backgroundColor = "#777";
	document.querySelectorAll(".overideH2")[z].style.marginTop = "3rem";
	document.querySelectorAll(".border-line")[z].style.borderBottom =
		"2px solid #777";
	document.querySelectorAll(".border-line")[z].style.marginTop = "7rem";
	document.querySelectorAll(".extraSpace")[z].style.marginTop = "10rem";
}
