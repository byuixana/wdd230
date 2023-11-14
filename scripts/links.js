const baseURL = "https://byuixana.github.io/wdd230/";

const linksURL = `${baseURL}data/links.json`

async function apiFetch()
{
    try{
    const response = await fetch(linksURL);
    if(response.ok)
    {
        const data = await response.json();
        console.log(data)
    }
    else{
        throw Error(await response.text())
    }
} catch (error) {
    console.log(error)
}
}