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

// Menu
const hamButton = document.getElementById("menu");
const navigation = document.querySelector("#nav-menu");
hamButton.addEventListener('click', () => {
   navigation.classList.toggle('open');
   hamButton.classList.toggle('open');
})

// Mode button
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

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
