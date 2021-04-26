var api = 'https://api.giphy.com/v1/gifs/search?';
var apiKey = '&api_key=dc6zaTOxFJmzC';
var query = '&q=rainbow';


var url = api + apiKey + query;
// fetch(url)
//     .then(response => response.json())
//     .then(json => addImage(json.data[Math.floor(Math.random() * 60)].images.original.url))
//     .catch(error => console.log(error))
//     .finally(console.error("This will execute regardless"));


addGif()
    .then(response => addImage(response.img))
    .catch(error => console.error(error))
    .finally(() => console.log("Finally block"))

async function addGif(){
    let response = await fetch(url);
    let json = await response.json();
    let img_url = await json.data[Math.floor(Math.random() * 60)].images.original.url;
    return {
        img:img_url
    }
}

function addImage(url){
    const image = document.createElement('img');
    image.src  = url
    document.querySelector('.container').appendChild(image)
}