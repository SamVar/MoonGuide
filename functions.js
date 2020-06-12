//All functions that is needed for the website to operate properly
//By Samvel Vardanyan

//Function that calculates Moon cycle in days and Moon illumination %
function calculateMoonPhase(moonYear, moonMonth, moonDay) {
	var a,
		b,
		c,
		e,
		f,
		jd,
		desPart,
		newMoons,
		phaseAngle,
		daySinceNew,
		moonIllumination,
		daySinceNewCircle,
		moonPhaseAndIllumination;

	if (moonMonth < 3) {
		moonYear--;
		moonMonth += 12;
	}

	a = moonYear / 100;
	b = a / 4;
	c = 2 - a + b;
	e = 365.25 * (moonYear + 4716);
	f = 30.6001 * (moonMonth + 1);
	jd = c + moonDay + e + f - 1524.5;
	daySinceNew = jd - 2451549.5;
	newMoons = daySinceNew / 29.53;
	desPart = newMoons % 1;
	daySinceNewCircle = desPart * 29.53 - 0.6;

	if (daySinceNewCircle < 0) {
		daySinceNewCircle = Math.abs(daySinceNewCircle);
		if (daySinceNewCircle > 29.53) {
			daySinceNewCircle = daySinceNewCircle - 29.53;
		}
		daySinceNewCircle = 29.53 - daySinceNewCircle;
	}

	if (daySinceNewCircle > 29.53) {
		daySinceNewCircle = daySinceNewCircle - 29.53;
	}

	phaseAngle = (daySinceNewCircle / 29.53) * 360 - 180;
	moonIllumination = ((Math.cos((phaseAngle * Math.PI) / 180) + 1) / 2) * 100;
	moonIllumination = moonIllumination.toFixed(0);
	daySinceNewCircle = daySinceNewCircle.toFixed(1);
	moonPhaseAndIllumination = [daySinceNewCircle, moonIllumination];
	return moonPhaseAndIllumination;
}

//Function  that gives the moon phase name and image
function moonPhaseNameAndImage(daySinceNewCircle) {
	var moonPhase, moonImage, moonImage2, moonImage3;

	if (
		(daySinceNewCircle >= 0.0 && daySinceNewCircle <= 0.7) ||
		daySinceNewCircle > 29.3
	) {
		moonPhase = "New Moon";
		moonImage = "<img class='card-img-top' src=small-size-images/new.png>";
		moonImage2 = "<img class='image' src=small-size-images/new.png>";
		moonImage3 = "<img class='born-img' src=small-size-images/new.png>";
	} else if (daySinceNewCircle > 0.7 && daySinceNewCircle <= 6.9) {
		moonPhase = "Waxing Crescent";

		if (daySinceNewCircle > 0.7 && daySinceNewCircle <= 2.0) {
			moonImage = "<img class='card-img-top' src=small-size-images/2.png>";
			moonImage2 = "<img class='image' src=small-size-images/2.png>";
			moonImage3 = "<img class='born-img' src=small-size-images/2.png>";
		} else if (daySinceNewCircle > 2.0 && daySinceNewCircle <= 3.2) {
			moonImage = "<img class='card-img-top' src=small-size-images/3.png>";
			moonImage2 = "<img class='image' src=small-size-images/3.png>";
			moonImage3 = "<img class='born-img' src=small-size-images/3.png>";
		} else if (daySinceNewCircle > 3.2 && daySinceNewCircle <= 4.5) {
			moonImage = "<img class='card-img-top' src=small-size-images/4.png>";
			moonImage2 = "<img class='image' src=small-size-images/4.png>";
			moonImage3 = "<img class='born-img' src=small-size-images/4.png>";
		} else if (daySinceNewCircle > 4.5 && daySinceNewCircle <= 5.7) {
			moonImage = "<img class='card-img-top' src=small-size-images/5.png>";
			moonImage2 = "<img class='image' src=small-size-images/5.png>";
			moonImage3 = "<img class='born-img' src=small-size-images/5.png>";
		} else {
			moonImage = "<img class='card-img-top' src=small-size-images/6.png>";
			moonImage2 = "<img class='image' src=small-size-images/6.png>";
			moonImage3 = "<img class='born-img' src=small-size-images/6.png>";
		}
	} else if (daySinceNewCircle > 6.9 && daySinceNewCircle <= 7.9) {
		moonPhase = "First Quarter";
		moonImage = "<img class='card-img-top' src=small-size-images/7.png>";
		moonImage2 = "<img class='image' src=small-size-images/7.png>";
		moonImage3 = "<img class='born-img' src=small-size-images/7.png>";
	} else if (daySinceNewCircle > 7.9 && daySinceNewCircle <= 14.2) {
		moonPhase = "Waxing Gibbous";
		if (daySinceNewCircle > 7.9 && daySinceNewCircle <= 9.0) {
			moonImage = "<img class='card-img-top' src=small-size-images/8.png>";
			moonImage2 = "<img class='image' src=small-size-images/8.png>";
			moonImage3 = "<img class='born-img' src=small-size-images/8.png>";
		} else if (daySinceNewCircle > 9.0 && daySinceNewCircle <= 10.0) {
			moonImage = "<img class='card-img-top' src=small-size-images/9.png>";
			moonImage2 = "<img class='image' src=small-size-images/9.png>";
			moonImage3 = "<img class='born-img' src=small-size-images/9.png>";
		} else if (daySinceNewCircle > 10.0 && daySinceNewCircle <= 11.1) {
			moonImage = "<img class='card-img-top' src=small-size-images/10.png>";
			moonImage2 = "<img class='image' src=small-size-images/10.png>";
			moonImage3 = "<img class='born-img' src=small-size-images/10.png>";
		} else if (daySinceNewCircle > 11.1 && daySinceNewCircle <= 12.1) {
			moonImage = "<img class='card-img-top' src=small-size-images/11.png>";
			moonImage2 = "<img class='image' src=small-size-images/11.png>";
			moonImage3 = "<img class='born-img' src=small-size-images/11.png>";
		} else if (daySinceNewCircle > 12.1 && daySinceNewCircle <= 13.2) {
			moonImage = "<img class='card-img-top' src=small-size-images/12.png>";
			moonImage2 = "<img class='image' src=small-size-images/12.png>";
			moonImage3 = "<img class='born-img' src=small-size-images/12.png>";
		} else {
			moonImage = "<img class='card-img-top' src=small-size-images/13.png>";
			moonImage2 = "<img class='image' src=small-size-images/13.png>";
			moonImage3 = "<img class='born-img' src=small-size-images/13.png>";
		}
	} else if (daySinceNewCircle > 14.2 && daySinceNewCircle <= 15.2) {
		moonPhase = "Full Moon";
		moonImage = "<img class='card-img-top' src=small-size-images/full.png>";
		moonImage2 = "<img class='image' src=small-size-images/full.png>";
		moonImage3 = "<img class='born-img' src=small-size-images/full.png>";
	} else if (daySinceNewCircle > 15.2 && daySinceNewCircle <= 21.5) {
		moonPhase = "Waning Gibbous";

		if (daySinceNewCircle > 15.2 && daySinceNewCircle <= 16.5) {
			moonImage = "<img class='card-img-top' src=small-size-images/16.png>";
			moonImage2 = "<img class='image' src=small-size-images/16.png>";
			moonImage3 = "<img class='born-img' src=small-size-images/16.png>";
		} else if (daySinceNewCircle > 16.5 && daySinceNewCircle <= 17.7) {
			moonImage = "<img class='card-img-top' src=small-size-images/17.png>";
			moonImage2 = "<img class='image' src=small-size-images/17.png>";
			moonImage3 = "<img class='born-img' src=small-size-images/17.png>";
		} else if (daySinceNewCircle > 17.7 && daySinceNewCircle <= 19.0) {
			moonImage = "<img class='card-img-top' src=small-size-images/18.png>";
			moonImage2 = "<img class='image' src=small-size-images/18.png>";
			moonImage3 = "<img class='born-img' src=small-size-images/18.png>";
		} else if (daySinceNewCircle > 19.0 && daySinceNewCircle <= 20.2) {
			moonImage = "<img class='card-img-top' src=small-size-images/19.png>";
			moonImage2 = "<img class='image' src=small-size-images/19.png>";
			moonImage3 = "<img class='born-img' src=small-size-images/19.png>";
		} else {
			moonImage = "<img class='card-img-top' src=small-size-images/20.png>";
			moonImage2 = "<img class='image' src=small-size-images/20.png>";
			moonImage3 = "<img class='born-img' src=small-size-images/20.png>";
		}
	} else if (daySinceNewCircle > 21.5 && daySinceNewCircle <= 22.5) {
		moonPhase = "Last Quarter";
		moonImage = "<img class='card-img-top' src=small-size-images/21.png>";
		moonImage2 = "<img class='image' src=small-size-images/21.png>";
		moonImage3 = "<img class='born-img' src=small-size-images/21.png>";
	} else if (daySinceNewCircle > 22.5 && daySinceNewCircle <= 29.3) {
		moonPhase = "Waning Crescent";
		if (daySinceNewCircle > 22.5 && daySinceNewCircle <= 23.9) {
			moonImage = "<img class='card-img-top' src=small-size-images/22.png>";
			moonImage2 = "<img class='image' src=small-size-images/22.png>";
			moonImage3 = "<img class='born-img' src=small-size-images/22.png>";
		} else if (daySinceNewCircle > 23.9 && daySinceNewCircle <= 25.2) {
			moonImage = "<img class='card-img-top' src=small-size-images/23.png>";
			moonImage2 = "<img class='image' src=small-size-images/23.png>";
			moonImage3 = "<img class='born-img' src=small-size-images/23.png>";
		} else if (daySinceNewCircle > 25.2 && daySinceNewCircle <= 26.6) {
			moonImage = "<img class='card-img-top' src=small-size-images/24.png>";
			moonImage2 = "<img class='image' src=small-size-images/24.png>";
			moonImage3 = "<img class='born-img' src=small-size-images/24.png>";
		} else if (daySinceNewCircle > 26.6 && daySinceNewCircle <= 27.9) {
			moonImage = "<img class='card-img-top' src=small-size-images/25.png>";
			moonImage2 = "<img class='image' src=small-size-images/25.png>";
			moonImage3 = "<img class='born-img' src=small-size-images/25.png>";
		} else {
			moonImage = "<img class='card-img-top' src=small-size-images/26.png>";
			moonImage2 = "<img class='image' src=small-size-images/26.png>";
			moonImage3 = "<img class='born-img' src=small-size-images/26.png>";
		}
	}

	var moonPhaseAndMoonImage = [moonPhase, moonImage, moonImage2, moonImage3];
	return moonPhaseAndMoonImage;
}

//Function that prints everything on the screen
function printOnCard(
	moonPhase,
	moonCycle,
	illumination,
	formatedDate,
	moonImage,
	i
) {
	document.querySelectorAll(".picture")[i].innerHTML = moonImage;
	document.querySelectorAll(".card-title")[i].innerHTML = formatedDate;
	document.querySelectorAll(".card-text")[i].innerHTML =
		moonPhase +
		"<hr>Age: " +
		moonCycle +
		" days" +
		"<br>" +
		"Illumination: " +
		illumination +
		"%";
}

//Function that printsmn everything on moon Calendar
function printOnCalendar(moonPhase, moonCycle, illumination, moonImage, j, i) {
	document.querySelectorAll(".col-up")[j].innerHTML = i;
	document.querySelectorAll(".col-body")[j].innerHTML = moonImage;

	if (
		moonPhase == "New Moon" ||
		moonPhase == "Full Moon" ||
		moonPhase == "First Quarter" ||
		moonPhase == "Last Quarter"
	) {
		//Changes font color for 4 major moon phases
		moonPhase = moonPhase.fontcolor("darkblue");
	}

	document.querySelectorAll(".col-down")[j].innerHTML =
		moonPhase + "<br>" + moonCycle + " days, " + illumination + "%";
}

//This function sets borders to current day
function addBorderOnTodaysDate(monthName, year) {
	//Finding current day
	var date = new Date();
	var d = date.getDate();
	var m = date.getMonth() + 1;
	var y = date.getFullYear();

	//Finding the name of current month
	var month = nameOfMonths(m);

	//Check if displayed month and year is equal to current month and year
	if (month == monthName && y == year) {
		//position of month's 1st day plus 6 for columns of week names + today's date
		var position = weekDay(y, m) + d + 6;
		document.querySelectorAll(".col")[position].style.border =
			"3px solid rgb(205, 148, 74)";
	}
}

//Function that formats the date and prints
function formatTheDate(monthName, year) {
	var formatedDate = monthName + " " + year;
	document.querySelector(".month-name").innerHTML = formatedDate;
	// Passing current month name and year from calendar to print borders
	addBorderOnTodaysDate(monthName, year);
	backToCurrentMonth(monthName, year);
}

//Function that gives the month name for month number
function nameOfMonths(monthNumber) {
	var monthName;
	if (monthNumber == 1) {
		monthName = "January";
	} else if (monthNumber == 2) {
		monthName = "Febuary";
	} else if (monthNumber == 3) {
		monthName = "March";
	} else if (monthNumber == 4) {
		monthName = "April";
	} else if (monthNumber == 5) {
		monthName = "May";
	} else if (monthNumber == 6) {
		monthName = "June";
	} else if (monthNumber == 7) {
		monthName = "July";
	} else if (monthNumber == 8) {
		monthName = "August";
	} else if (monthNumber == 9) {
		monthName = "September";
	} else if (monthNumber == 10) {
		monthName = "October";
	} else if (monthNumber == 11) {
		monthName = "November";
	} else if (monthNumber == 12) {
		monthName = "December";
	}
	return monthName;
}

//Function that adds year and month for dropdown menu
function datePicker() {
	var k, l, m, n, o, p;

	for (let i = 1900; i <= 2100; i++) {
		addOption(document.dateForm.dateYear, i, i);
	}
	for (let i = 1; i <= 12; i++) {
		var text = nameOfMonths(i);
		addOption(document.dateForm.dateMonth, i, text);
	}
	k = new Date();
	l = k.getMonth();
	m = document.getElementById("dateMonth");
	m.options[l].selected = true;
	n = new Date();
	o = n.getYear();
	p = document.getElementById("dateYear");
	p.options[o].selected = true;
}

//Function that adds dropdown menu of year month and days
function addOption(selectbox, value, text) {
	var optn = document.createElement("option");
	optn.value = value;
	optn.text = text;
	selectbox.options.add(optn);
}

//Function that check todays date formats it and adds "Today" label
function todaysDate(moonDay, moonMonth, moonYear) {
	//Check todays date
	var d, m, y, todayDate, monthName, formatedDate;

	todayDate = new Date();
	d = todayDate.getDate();
	m = todayDate.getMonth() + 1;
	y = todayDate.getFullYear();

	//Adss "Today" label to todays date for moon card
	if (moonDay == d && moonMonth == m && moonYear == y) {
		formatedDate = "Today";
	} else {
		monthName = nameOfMonths(moonMonth);
		formatedDate = monthName + " " + moonDay + ", " + moonYear;
	}
	return formatedDate;
}

//Function that cleans leftover texts and images
function clean() {
	for (let i = 0; i < 42; i++) {
		document.querySelectorAll(".col-up")[i].innerHTML = "";
		document.querySelectorAll(".col-body")[i].innerHTML = "";
		document.querySelectorAll(".col-down")[i].innerHTML = "";
		document.querySelectorAll(".col")[i].style.border =
			" 1px solid rgb(107, 107, 107)";
	}
}

//Function that gives how many days in the  month
function numberOfDays(year, month) {
	var d = new Date(year, month, 0);
	return d.getDate();
}

//Function that gives days in a week used for finding which
//position the 1st day of the month should be located
function weekDay(year, month) {
	var b = new Date(year, month - 1, 1);
	return b.getDay();
}

//Calculates next full moon
function nextFullMoon() {
	var d,
		m,
		y,
		dd,
		mm,
		yy,
		today,
		monthName,
		currentDay,
		fullMoonText,
		moonCycle,
		calculatedMoon;

	today = new Date();
	dd = today.getDate();
	mm = today.getMonth() + 1;
	yy = today.getFullYear();

	do {
		calculatedMoon = calculateMoonPhase(yy, mm, dd);
		moonCycle = calculatedMoon[0];

		if (moonCycle <= 14.2 || moonCycle > 15.2) {
			today.setDate(today.getDate() + 1);
			dd = today.getDate();
			mm = today.getMonth() + 1;
			yy = today.getFullYear();
		} else {
			currentDay = new Date();
			d = currentDay.getDate();
			m = currentDay.getMonth() + 1;
			y = currentDay.getFullYear();

			if (d == dd && m == mm && y == yy) {
				monthName = nameOfMonths(mm);
				fullMoonText =
					"Next Full Moon is Today (" + monthName + " " + dd + ", " + yy + ")";
			} else {
				monthName = nameOfMonths(mm);
				fullMoonText = "Next Full Moon: " + monthName + " " + dd + ", " + yy;
			}
		}
	} while (moonCycle <= 14.2 || moonCycle > 15.2);
	document.querySelector(".next-full-moon").innerHTML = fullMoonText;
}

//Ads dynamic link to go back to current month on Calendar
function backToCurrentMonth(monthName, year) {
	var currentDate = getCurrentDate();
	var currentMonth = currentDate[1];
	var currentYear = currentDate[2];

	var currentMonthName = nameOfMonths(currentMonth);

	//Checks if current month is equal with curent month displayed on calendar
	if (currentMonthName == monthName && currentYear == year) {
		$("#return-to-current-month").addClass("return-current-month-displayOn");
	} else {
		$("#return-to-current-month").removeClass("return-current-month-displayOn");
	}
}

//Gives Curent date (day, month, year)
function getCurrentDate() {
	var today = new Date();
	var day = today.getDate();
	var month = today.getMonth() + 1;
	var year = today.getFullYear();
	var fullDate = [day, month, year];
	return fullDate;
}
