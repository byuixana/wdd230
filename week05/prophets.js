const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData(){
    const response = await fetch(url);
    if (response.ok)
    {
        const data = await response.json();
        // console.table(data.prophets)
        displayProphets(data.prophets)
    }
    
}

function displayProphets(prophets){
    prophets.forEach(prophet => {
        const card = document.createElement('section');
        const fullName = document.createElement('h2');
        const portrait = document.createElement('img');
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}.`);
        portrait.setAttribute('loading', "lazy");
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        portrait.setAttribute('src', prophet.imageurl);
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        card.appendChild(fullName); 
        card.appendChild(portrait)
        cards.appendChild(card);
    }

    );
}

getProphetData();