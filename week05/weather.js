const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.74976699658676&lon=6.624426760657618&appid=42b45e7c0ded7c11f238756943eada5f&units=imperial'

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