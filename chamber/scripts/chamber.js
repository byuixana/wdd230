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







