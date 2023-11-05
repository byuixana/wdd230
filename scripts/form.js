// Password confirmation
const pass1 = document.querySelector("#password");
const pass2 = document.querySelector("#password2");


pass2.addEventListener("focusout", () => {
    
    
    if (pass1.value !== pass2.value){
        console.log("Yay! Itsa firing!");
        pass2.style.borderColor = "1px solid red";
        pass2.value = ""; 
        pass2.focus();
    }
    else{
        console.log("Yay! Itsa firing!");
        pass2.style.borderColor = "1px solid green";
		pass2.style.color = "#000";
    }
}
)

const rangevalue = document.querySelector(".rangevalue");
const range = document.getElementById("rating");

range.addEventListener('change', displayRangeValue);
range.addEventListener('input', displayRangeValue);

function displayRangeValue() {
    rangevalue.innerHTML = range.value;
}