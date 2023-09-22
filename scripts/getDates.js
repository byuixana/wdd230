// Creates date
let today = new Date();
let FullYear = today.getFullYear();

// Adds year in footer
let yearID = document.getElementById("year");

if (yearID !== null) {
    yearID.innerHTML = `&copy; ${FullYear.toString()} | Alexandra Green`;
}

// Modifies
let lastModified = document.lastModified;
let lastModifiedElement = document.querySelector("#lastModified");
if (lastModified) {
    lastModifiedElement.innerHTML = `Last Modified: ${lastModified}`
}
// Weather

// Page Visits

