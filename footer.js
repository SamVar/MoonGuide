//Gets the curent year and prints in the footer - Copyright
//Written by Samvel Vardanyan
function copyRights() {
	var year = new Date().getFullYear();
	var date = `&copy; Moon Guide ${year}. All Rights Reserved`;
	document.getElementsByClassName("copy-right")[0].innerHTML = date;
}
