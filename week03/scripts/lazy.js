let lastModified = document.lastModified;
let lastModifiedDiv = document.querySelector("#last-modified");

if (lastModified) {
    lastModifiedDiv.innerHTML = `Last Modified: ${lastModified}`
};

