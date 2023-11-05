// Menu
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
hamButton.addEventListener('click', () => {
   navigation.classList.toggle('navigation');
   hamButton.classList.toggle('open');
})

// Mod date
let lastModified = document.lastModified;
let lastModifiedElement = document.querySelector("#mod");
if (lastModified) {
    lastModifiedElement.innerHTML = `Last Modified: ${lastModified}`
}

// Visit # 

const visitsDisplay = document.querySelector("#visits");
let userVisitNum = Number(window.localStorage.getItem("numVisits-ls")) || 0;
let visitDays = Number(window.localStorage.getItem("timeBetween"));
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
let daysSinceVisit = visitDays - Date.now();

if (numVisits == 0) {
    visitsDisplay.textContent = "Welcome! Let us know if you have any questions."
} else if (daysSinceVisit < 0)
{
    visitsDisplay.textContent = "Back so soon! Awesome!"
}else if (daysSinceVisit > 0)
{
    visitsDisplay = `You last visited ${daysBetween} days ago.`
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);

// Timestamp
const submitBtn = document.querySelector("#submitJoinBtn");
const timestamp = document.querySelector("#timestamp");
let submissionDate = Date.Date.Now();

submitBtn.addEventListener('onclick', submissionDate);

function setTime(){
    timestamp.innerHTML = submissionDate;
    console.log(submissionDate);
}

