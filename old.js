//Finds if user were born on a full moon
//Written by Samvel Vardanyan
function bornFullMoon() {
	var date,
		moonDay,
		moonYear,
		moonMonth,
		moonPhase,
		moonImage,
		moonCycle,
		dateInput,
		illumination,
		moonPhaseAndMoonImage,
		moonCycleAndIllumination;

		
	//Gets user input
	dateInput = document.getElementById("date").value;
	date = new Date(dateInput);
	date.setDate(date.getDate() + 1);
	moonYear = date.getFullYear();
	moonMonth = date.getMonth() + 1;
	moonDay = date.getDate();

	//Calling function to calculate moon phase and illumination
	moonCycleAndIllumination = calculateMoonPhase(moonYear, moonMonth, moonDay);
	moonCycle = moonCycleAndIllumination[0];
	illumination = moonCycleAndIllumination[1];

	//Calling function to find moon phase and image
	moonPhaseAndMoonImage = moonPhaseNameAndImage(moonCycle);
	moonPhase = moonPhaseAndMoonImage[0];
	moonImage = moonPhaseAndMoonImage[2];

	//Printing message on the screen
	document.querySelector(".you-were-born-text1").innerHTML =
		"This is how the moon looked on the day you were born";

	//Printing everything on the screen
	document.querySelector(".you-were-born-text").innerHTML =
		"You were born on " +
		moonPhase +
		"<br>" +
		"Moon age: " +
		moonCycle +
		" days" +
		"<br>" +
		"Moon Illumination: " +
		illumination +
		"%" +
		"<br>";

	// Printing moon image on the screen
	document.querySelector(".you-were-born-moon-img").innerHTML = moonImage;

	//Print text read more bellow
	document.querySelector(".read-more").innerHTML =
		"Read more about your Lunar Phase bellow";
}
