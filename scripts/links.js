const baseURL = "https://byuixana.github.io/wdd230/";

const linksURL = `http://127.0.0.1:5500/data/links.json`

let card = document.querySelector('#learning-activity')

async function apiFetch()
{
    try{
    const response = await fetch(linksURL);
    if(response.ok)
    {
        const data = await response.json();
        console.log(data)
        displayLinks(data)
    }
    else{
        throw Error(await response.text())
    }
} catch (error) {
    console.log(error)
}
}

function displayLinks(data)
{
    data.weeks.forEach(week => {
        let link = document.createElement('a');
        link.setAttribute('src', week.url)
        link.innerHTML = `${link.title}`
        let p = document.createElement('p');
        p.innerHTML = `${link}`
        card.appendChild(p)
    });
}

apiFetch();

// Weather

const currentTemp = document.querySelector('#weather');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=43.63190603355644&lon=-111.77445549111278&appid=42b45e7c0ded7c11f238756943eada5f&units=imperial'

async function apiFetch()
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
    captionDesc.textContent = `${desc}`;
}

apiFetch()