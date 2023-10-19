console.log("welcome");
const div = document.getElementById('api');
const newDogButton = document.getElementById('newDog');


let newDogImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(json => {
            div.innerHTML = `<img src='${json.message}' height=200 width=200/>`
        });
}

newDogButton.onclick = () => newDogImage();