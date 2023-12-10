// Banner
const button = document.querySelector(".x");
const banner = document.querySelector(".banner")
button.addEventListener('click', () => {
    console.log('Working');
    banner.style.display="none";
})

let currentDate = new Date();
let weekDay = currentDate.getDay();

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
    
    
    data.list.forEach(day =>{
        let weatherContainer = document.createElement("div");
        let temperature = day.main.temp;
        let description = day.weather.description;

        let figcaption = document.createElement('figcaption');
        figcaption.textContent = description;

        let temperatureP = document.createElement('p');
        temperatureP.textContent =`${temperature}`;

        let img = document.createElement('img');
        let icon = day.weather[0].icon;
        img.setAttribute('src', `https://openweathermap.org/img/w/${icon}.png`);
        img.setAttribute('alt', "Icon")
        weatherContainer.appendChild(img);
        weatherContainer.appendChild(temperatureP);
        weatherContainer.appendChild(figcaption);
        forecast.appendChild(weatherContainer)
    })
        
}

// Businesses

async function getMembers()
{
    const response = await fetch('data/members.json');
    const result = await response.json();
    // gridButton.addEventListener('click',() => displayBusinessesGrid(result.members));
    displayBusinesses(result.members);
}


let spotlightBusinesses = [];

function displayBusinesses(members){
    const cards = document.createElement('article');
    cards.classList.add('business-cards');
    members.forEach(business => {
        let businessStatus = business.membership;
        
        if (businessStatus == 'gold' || businessStatus == 'silver')
        {
            spotlightBusinesses.push(business);
        } 
        getRandomBusiness(spotlightBusinesses)
    });
    // console.log(spotlightBusinesses)
    
    // Random generator
function getRandomBusiness(spotlightBusinesses)
    
    {
        let selectedBusinesses = []
        const randomIndex = Math.floor(Math.random() * spotlightBusinesses.length)
        selectedBusinesses.push(spotlightBusinesses[randomIndex])
        if (randomIndex > 1)
        {
            let randomIndex2 = randomIndex - 1
            selectedBusinesses.push(spotlightBusinesses[randomIndex2])
        } else{
            let randomIndex2 = randomIndex + 1
            selectedBusinesses.push(spotlightBusinesses[randomIndex2])
        }
        return selectedBusinesses
    }

    let randomBusinesses = getRandomBusiness(spotlightBusinesses);
    
    let randomBusiness = randomBusinesses[0]
    let randomBusiness2 = randomBusinesses[1]

    let businessPlaceholder1 = document.createElement('div')
    business1 = randomBusiness.name;
    let businessName = document.createElement('h4');
    let logo = document.createElement('img');
    logo.setAttribute('src', randomBusiness.img);
    logo.setAttribute('alt', `${randomBusiness.name}`);
    logo.setAttribute('height', '250px');
    logo.setAttribute('width', '250px');
    logo.setAttribute('margin', 'auto')
    businessName.textContent = business1;
    businessPlaceholder1.appendChild(businessName);
    businessPlaceholder1.appendChild(logo);
    cards.appendChild(businessPlaceholder1)
    document.querySelector('#business').appendChild(cards);

    let businessPlaceholder2 = document.createElement('div')
    business2 = randomBusiness2.name;
    let businessName2 = document.createElement('h4');
    let logo2 = document.createElement('img');
    logo2.setAttribute('src', randomBusiness2.img);
    logo2.setAttribute('alt', `${randomBusiness2.name}`);
    logo2.setAttribute('height', '250px');
    logo2.setAttribute('width', '250px');
    logo2.setAttribute('margin', 'auto')
    businessName2.textContent = business2;
    businessPlaceholder2.appendChild(businessName2);
    businessPlaceholder2.appendChild(logo2);
    cards.appendChild(businessPlaceholder2)
    document.querySelector('#business').appendChild(cards);
}

getMembers();


