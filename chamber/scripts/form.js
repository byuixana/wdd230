// Timestamp
const submitBtn = document.querySelector("#submitJoinBtn");
const timestamp = document.querySelector("#timestamp");
let submissionDate = new Date().toString();

submitBtn.addEventListener('click', submissionDate);

function setTime(){
    timestamp.innerHTML = submissionDate;
}