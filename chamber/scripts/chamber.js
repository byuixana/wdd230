// Menu
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
hamButton.addEventListener('click', () => {
   navigation.classList.toggle('navigation');
   hamButton.classList.toggle('open');
})