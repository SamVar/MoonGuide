//Calculates moon phase and illumination for the given month
//Written by Samvel Vardanyan
function moonCalendar() {
	var d,
		j,
		days,
		month,
		year,
		newTime,
		currentMonth,
		currentYear,
		monthName,
		calculatedMoon,
		moonCycle,
		illumination,
		phaseAndImage,
		moonPhase,
		moonImage,
		count = 0,
		times = 0,
		addYear = 0,
		minusYear = 0,
		addMonth = 0,
		minusMonth = 0;

	//Calling the function that adds years and months to calendar
	//and makes current month and year selected
	datePicker();

	//Finds and prints current month and year
	d = new Date();
	month = d.getMonth() + 1;
	year = d.getFullYear();

	//Gives the month's name
	monthName = nameOfMonths(month);

	//Function that formats the date and prints
	formatTheDate(monthName, year);

	//Calling the function that counts which position is the 1st day for that month
	days = numberOfDays(year, month);
	j = weekDay(year, month);

	//Adds day numbers, images and texts to calendar
	for (let i = 1; i <= days; i++) {
		//Calling the function that calculates moon cycle
		calculatedMoon = calculateMoonPhase(year, month, i);
		moonCycle = calculatedMoon[0];
		illumination = calculatedMoon[1];

		//Calling the function that gives moon name and image
		phaseAndImage = moonPhaseNameAndImage(moonCycle);
		moonPhase = phaseAndImage[0];
		moonImage = phaseAndImage[2];

		//Calling function that prints everything on the screen
		printOnCalendar(moonPhase, moonCycle, illumination, moonImage, j, i);

		j++;
	}

	//Go to next month when next button is clicked
	document.querySelector(".btn-next").addEventListener("click", function () {
		//Function that cleans everything
		clean();

		//Get current date and set to next month
		times++;
		d = new Date();
		d.setMonth(d.getMonth() + times - count + addMonth - minusMonth);
		d.setFullYear(d.getFullYear() + addYear - minusYear);
		month = d.getMonth() + 1;
		year = d.getFullYear();

		//Gives the month's name
		monthName = nameOfMonths(month);

		//Function that formats the date and prints
		formatTheDate(monthName, year);

		//Calling the function that counts which position is the 1st day for that month
		days = numberOfDays(year, month);
		j = weekDay(year, month);

		for (let i = 1; i <= days; i++) {
			//Calling the function that calculates moon cycle
			calculatedMoon = calculateMoonPhase(year, month, i);
			moonCycle = calculatedMoon[0];
			illumination = calculatedMoon[1];

			//Calling the function that gives moon name and image
			phaseAndImage = moonPhaseNameAndImage(moonCycle);
			moonPhase = phaseAndImage[0];
			moonImage = phaseAndImage[2];

			//Calling function that prints everything on the screen
			printOnCalendar(moonPhase, moonCycle, illumination, moonImage, j, i);

			j++;
		}
	});

	//Go to previous month when previous button is clicked
	document
		.querySelector(".btn-previous")
		.addEventListener("click", function () {
			//Function that cleans everything
			clean();

			//Get current date and set to previous month
			count++;
			d = new Date();
			d.setMonth(d.getMonth() + times - count + addMonth - minusMonth);
			d.setFullYear(d.getFullYear() + addYear - minusYear);
			month = d.getMonth() + 1;
			year = d.getFullYear();

			//Gives the month's name
			monthName = nameOfMonths(month);

			//Function that formats the date and prints
			formatTheDate(monthName, year);

			//Calling the function that counts which position is the 1st day for that month
			days = numberOfDays(year, month);
			j = weekDay(year, month);

			for (let i = 1; i <= days; i++) {
				//Calling the function that calculates moon cycle
				calculatedMoon = calculateMoonPhase(year, month, i);
				moonCycle = calculatedMoon[0];
				illumination = calculatedMoon[1];

				//Calling the function that gives moon name and image
				phaseAndImage = moonPhaseNameAndImage(moonCycle);
				moonPhase = phaseAndImage[0];
				moonImage = phaseAndImage[2];

				//Calling function that prints everything on the screen
				printOnCalendar(moonPhase, moonCycle, illumination, moonImage, j, i);

				j++;
			}
		});

	document.querySelector(".go-btn").addEventListener("click", function () {
		month = document.getElementById("dateMonth").value;
		year = document.getElementById("dateYear").value;

		newTime = new Date();
		currentMonth = newTime.getMonth() + 1;
		currentYear = newTime.getFullYear();

		count = 0;
		times = 0;
		addMonth = 0;
		minusMonth = 0;
		addYear = 0;
		minusYear = 0;

		if (month > currentMonth) {
			addMonth = month - currentMonth;
			d = new Date();
			d.setMonth(d.getMonth() + addMonth);
			month = d.getMonth() + 1;
		} else if (month < currentMonth) {
			minusMonth = currentMonth - month;
			d = new Date();
			d.setMonth(d.getMonth() - minusMonth);
			month = d.getMonth() + 1;
		} else {
			addMonth = 0;
			minusMonth = 0;
			d = new Date();
			d.setMonth(d.getMonth());
			month = d.getMonth() + 1;
		}

		if (year > currentYear) {
			addYear = year - currentYear;
			d = new Date();
			d.setFullYear(d.getFullYear() + addYear);
			year = d.getFullYear();
		} else if (year < currentYear) {
			minusYear = currentYear - year;
			d = new Date();
			d.setFullYear(d.getFullYear() - minusYear);
			year = d.getFullYear();
		} else {
			addYear = 0;
			minusYear = 0;
			d = new Date();
			d.setFullYear(d.getFullYear());
			year = d.getFullYear();
		}

		clean();

		//Gives the month's name
		monthName = nameOfMonths(month);

		//Function that formats the date and prints
		formatTheDate(monthName, year);

		//Calling the function that counts which position is the 1st day for that month
		days = numberOfDays(year, month);
		j = weekDay(year, month);

		//Adds day numbers, images and texts to calendar
		for (let i = 1; i <= days; i++) {
			//Calling the function that calculates moon cycle
			calculatedMoon = calculateMoonPhase(year, month, i);
			moonCycle = calculatedMoon[0];
			illumination = calculatedMoon[1];

			//Calling the function that gives moon name and image
			phaseAndImage = moonPhaseNameAndImage(moonCycle);
			moonPhase = phaseAndImage[0];
			moonImage = phaseAndImage[2];

			//Calling function that prints everything on the screen
			printOnCalendar(moonPhase, moonCycle, illumination, moonImage, j, i);

			j++;
		}
	});

	nextFullMoon();
}
