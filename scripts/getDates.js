// Creates date
let today = new Date();
let FullYear = today.getFullYear();

// Adds year in footer
let yearID = document.getElementById("year");

if (yearID !== null) {
    yearID.innerHTML = `${FullYear.toString()} |  &copy;Alexandra Green`;
}

// Modifies
let lastModified = document.lastModified;
let lastModifiedElement = document.querySelector("#lastModified");
if (lastModified) {
    lastModifiedElement.innerHTML = `Last Modified: ${lastModified}`
}
// Weather

// Page Visits

// Menu
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
hamButton.addEventListener('click', () => {
   navigation.classList.toggle('navigation');
   hamButton.classList.toggle('open');
})

// Mode button
const modeButton = document.querySelector("#dark-mode");
const main = document.querySelector(".main");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("☑️")) 
    {
        console.log("Stuff")
        main.style.background = "#000";
        main.style.color = "#fff";
        modeButton.textContent = "X"
    } else {
        main.style.background = "#eee";
        main.style.color = "000";
        modeButton.textContent = "☑️"
    }
});

const visitsDisplay = document.querySelector("#visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `This is your first visit. Welcome!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);


