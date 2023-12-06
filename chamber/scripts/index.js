// Banner
const button = document.querySelector(".x");
const banner = document.querySelector(".banner")
button.addEventListener('click', () => {
    console.log('Working');
    banner.style.display="none";
})

let currentDate = new Date();
let weekDay = currentDate.getDay();

console.log(weekDay)

if (weekDay <= 3 && weekDay != 0)
{
    banner.style.display = "flex";
} else{
    banner.style.display = "none";
}

// Weather

const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecast = document.querySelector('#three-day-forecast');

const url = `https://api.openweathermap.org/data/2.5/weather?lat=43.630998&lon=-111.772310&cnt=3&appid=42b45e7c0ded7c11f238756943eada5f&units=imperial`
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

async function apiFetch(url)
{
    try{
    const response = await fetch(url);
    if(response.ok)
    {
        const data = await response.json();
        console.log(data)
        displayResults(data)
    }
    else{
        throw Error(await response.text())
    }
} catch (error) {
    console.log(error)
}
}

function displayResults(data)
{
    currentTemp.innerHTML=`${data.main.temp}`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    weatherIcon.setAttribute('src', iconsrc)
    weatherIcon.setAttribute('alt', "Icon")
    let desc = data.weather[0].description;
    captionDesc.textContent = `Expect ${desc}`;
}

apiFetch(url);

// Three-day forecast

const newLink = `https://api.openweathermap.org/data/2.5/forecast?lat=49.629338&lon=-111.772313&cnt=3&appid=42b45e7c0ded7c11f238756943eada5f&units=imperial`
async function FiveDayFetch()
{
    try{
    const response = await fetch(newLink);
    if(response.ok)
    {
        const data = await response.json();
        // console.log(data)
        displayThreeDayForecast(data);
    }
    else{
        throw Error(await response.text())
    }
} catch (error) {
    console.log(error)
}
}

FiveDayFetch();

function displayThreeDayForecast(data)
{
    let forecast = document.querySelector("#three-day-forecast");
    
    
    console.log(data.list.main);
    data.list.forEach(day =>{
        let weatherContainer = document.createElement("div");
        console.log(day)
        let temperature = day.main.temp;
        let description = day.weather.description;

        let figcaption = document.createElement('figcaption');
        figcaption.textContent = description;

        let temperatureSpan = document.createElement('span');
        temperatureSpan.textContent =`Temperature: ${temperature}`;

        let img = document.createElement('img');
        let icon = day.weather[0].icon;
        img.setAttribute('src', `https://openweathermap.org/img/w/${icon}.png`);
        img.setAttribute('alt', "Icon")
        weatherContainer.appendChild(img);
        weatherContainer.appendChild(temperatureSpan);
        weatherContainer.appendChild(figcaption);
        forecast.appendChild(weatherContainer)
        weatherContainer.style.display = "flex";
        weatherContainer.style.flexDirection = "row";
    })
        
}

// Businesses

async function getMembers()
{
    const response = await fetch('data/members.json');
    const result = await response.json();
    console.log(result)
    gridButton.addEventListener('click',() => displayBusinessesGrid(result.members));
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

