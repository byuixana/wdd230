const url = `https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json`
const power = document.querySelector("#power");
async function getProphetData(){
    const response = await fetch(url);
    if (response.ok)
    {
        const data = await response.json();
        // console.table(data.prophets)
        console.log(data.members[2].powers[1])
    }
    
}

getProphetData()