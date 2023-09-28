// References:
const input = document.querySelector("#favchap");
const submitButton = document.querySelector("button");
const list = document.querySelector("#list");
const feedback = document.querySelector("#feedback")
// Event listeners. Has anonymous function example.
submitButton.addEventListener("click", () => {

    // Run something in the console for each function to make sure it fires.
    

    if (input.value) {
        // Create elements.
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
            input.focus();
            input.value = "";
        })

    } else {
        input.focus()

        // Give feedback to user.
        feedback.textContent = "Please enter a Book and a Chapter."
    }
});



