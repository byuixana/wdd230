const main = document.querySelector('.directory')
const gridButton = document.querySelector('#grid');
const listButton = document.getElementById('list');


async function getMembers()
{
    const response = await fetch('data/members.json');
    const result = await response.json();
    gridButton.addEventListener('click',() => displayBusinessesGrid(result.members));

    listButton.addEventListener('click', () => {
        
        main.innerHTML = "";
        const table = document.createElement('table');
        table.classList.add('table');
        main.appendChild(table);
        
        result.members.forEach(member => {
            const tr = document.createElement('tr');
            tr.textContent = `${member.name} || ${member.phone} || ${member.address.street}`
            table.appendChild(tr)
            table.style.fontSize="20px";
        })
    })
}




function displayBusinessesGrid(members){
    main.innerHTML = "";
    const cards = document.createElement('article');
    cards.classList.add('cards');
    main.appendChild(cards);
    members.forEach(business => {
        const card = document.createElement('section');
        const businessName = document.createElement('h2');
        const logo = document.createElement('img');
        logo.setAttribute('src', business.img);
        logo.setAttribute('alt', `${business.name}`);
        logo.setAttribute('loading', "lazy");
        logo.setAttribute('width', '220');
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

