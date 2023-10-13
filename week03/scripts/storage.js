// References:
const input = document.querySelector("#favchap");
const submitButton = document.querySelector("button");
const list = document.querySelector("#list");
const feedback = document.querySelector("#feedback")


// Initialize display variable
const visitDisplay = document.querySelector(".visits");

// Create variable to hold number of visits.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// Displays different values based on user frequency.
if (numVisits !== 0){
    visitDisplay.textContent = numVisits;
} else{
    visitDisplay.textContent = `This is your first visit. Horay!`;
}

// Increments visits automtically.
numVisits++;

localStorage.setItem("numVisits-ls", numVisits);


let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
})

// Event listeners. Has anonymous function example.
submitButton.addEventListener("click", () => {

    // Run something in the console for each function to make sure it fires.
    

    if (input.value) {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    } else {
        input.focus()

        // Give feedback to user.
        feedback.textContent = "Please enter a Book and a Chapter."
    }
});

function displayList(item) {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        // Append input to list.
        list.append(li);
        li.innerHTML = `${input.value}`;

        // Delet button details.
        li.append(deleteButton);
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', () =>
        {
            list.removeChild(li);
            chaptersArray.removeChild(li);
            deleteChapter(li.textContent);
            input.focus();
            input.value = "";
        })
}

function setChapterList() {
    localStorage.setItem('ScriptureList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('ScriptureList'))
    
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}

        

