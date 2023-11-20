const main = document.querySelector('.directory')
const gridButton = document.querySelector('#grid');
const listButton = document.getElementById('list');


async function getMembers()
{
    const response = await fetch('data/members.json');
    const result = await response.json();
    console.log(result)
    gridButton.addEventListener('click',() => displayBusinessesGrid(result.members));

    listButton.addEventListener('click', () => {
        
        main.innerHTML = "";
        const list = document.createElement('ul');
        list.classList.add('list');
        main.appendChild(list);
        
        result.members.forEach(member => {
            const li = document.createElement('li');
            li.textContent = `${member.name} || ${member.phone} || ${member.address.street}`
            list.appendChild(li)
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

