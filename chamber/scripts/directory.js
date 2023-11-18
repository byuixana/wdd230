const main = document.querySelector('main')
const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');


async function getMembers()
{
    const response = await fetch('data/members.json');
    const result = await response.json();
    gridButton.addEventListener('click', displayBusinessesGrid(result.members));
    listButton.addEventListener('click', () => {
    const list = createElement('list');
    list.classList.add('list');
    main.appendChild(list);
 })
}

function displayBusinessesGrid(members){
    const cards = document.createElement('article');
    cards.classList.add('cards');
    main.appendChild(cards);
    members.forEach(business => {
        const card = document.createElement('section');
        const businessName = document.createElement('h2');
        const logo = document.createElement('img');
        logo.setAttribute('src', business.url);
        logo.setAttribute('alt', `${business.name}`);
        logo.setAttribute('loading', "lazy");
        logo.setAttribute('width', '340');
        logo.setAttribute('height', '440');
        // logo.setAttribute('src', prophet.imageurl);
        businessName.textContent = `${business.name}`;
        card.appendChild(businessName); 
        card.appendChild(logo);
        cards.appendChild(card);
    }

    );
}

getMembers();

