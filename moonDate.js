//Calculates moon phase and illumination for the given 5 days
//Written by Samvel Vardanyan
function moonDate() {
	var phaseAndImage,
		moonPhase,
		moonImage,
		illumination,
		moonCycle,
		calculatedMoon,
		moonYear,
		moonMonth,
		moonDay,
		dayAdd,
		today,
		countPlus = 0,
		countMinus = 1,
		previous = 0,
		next = 0,
		formatedDate;

	for (let i = 0; i < 5; i++) {
		//Set the date and add one to get the next day
		today = new Date();
		dayAdd = new Date();
		dayAdd.setDate(today.getDate() + countPlus);
		countPlus++;
		moonDay = dayAdd.getDate();
		moonMonth = dayAdd.getMonth() + 1;
		moonYear = dayAdd.getFullYear();

		//Calling the function that checks todays date and formats it
		formatedDate = todaysDate(moonDay, moonMonth, moonYear);

		//Calling calculateMoonPhase function
		calculatedMoon = calculateMoonPhase(moonYear, moonMonth, moonDay);
		moonCycle = calculatedMoon[0];
		illumination = calculatedMoon[1];

		//Calling the function that gives phase name and image
		phaseAndImage = moonPhaseNameAndImage(moonCycle);
		moonPhase = phaseAndImage[0];
		moonImage = phaseAndImage[1];

		//Calling print function which prints everything on the screen
		printOnCard(moonPhase, moonCycle, illumination, formatedDate, moonImage, i);
	}

	document.querySelector(".next").addEventListener("click", function() {
		for (let i = 0; i < 5; i++) {
			previous++;
			today = new Date();
			dayAdd = new Date();
			dayAdd.setDate(today.getDate() - next + countPlus);
			countPlus++;
			moonDay = dayAdd.getDate();
			moonMonth = dayAdd.getMonth() + 1;
			moonYear = dayAdd.getFullYear();

			//Calling the function that checks todays date and formats it
			formatedDate = todaysDate(moonDay, moonMonth, moonYear);

			//Calling calculateMoonPhase function
			calculatedMoon = calculateMoonPhase(moonYear, moonMonth, moonDay);
			moonCycle = calculatedMoon[0];
			illumination = calculatedMoon[1];

			//Calling the function that gives phase name and image
			phaseAndImage = moonPhaseNameAndImage(moonCycle);
			moonPhase = phaseAndImage[0];
			moonImage = phaseAndImage[1];

			//Calling print function which prints everything on the screen
			printOnCard(
				moonPhase,
				moonCycle,
				illumination,
				formatedDate,
				moonImage,
				i
			);
		}
	});

	document.querySelector(".previous").addEventListener("click", function() {
		for (let i = 4; i > -1; i--) {
			next++;
			today = new Date();
			dayAdd = new Date();
			dayAdd.setDate(today.getDate() + previous - countMinus);
			countMinus++;
			moonDay = dayAdd.getDate();
			moonMonth = dayAdd.getMonth() + 1;
			moonYear = dayAdd.getFullYear();

			//Calling the function that checks todays date and formats it
			formatedDate = todaysDate(moonDay, moonMonth, moonYear);

			//Calling calculateMoonPhase function
			calculatedMoon = calculateMoonPhase(moonYear, moonMonth, moonDay);
			moonCycle = calculatedMoon[0];
			illumination = calculatedMoon[1];

			//Calling the function that gives phase name and image
			phaseAndImage = moonPhaseNameAndImage(moonCycle);
			moonPhase = phaseAndImage[0];
			moonImage = phaseAndImage[1];

			//Calling print function which prints everything on the screen
			printOnCard(
				moonPhase,
				moonCycle,
				illumination,
				formatedDate,
				moonImage,
				i
			);
		}
	});
}
