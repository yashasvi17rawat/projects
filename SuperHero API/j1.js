const randomHeroButton = document.getElementById("shbutton");
const HeroName = document.getElementById("name");
const speed = document.getElementById("speed");
const strength = document.getElementById("strength");
const HeroImage = document.getElementById("heroImage");
const serchText = document.getElementById("serchText");
const serchHeroButton = document.getElementById("serchButton");
console.log("js does works");

serchHeroButton.onclick = () => {
    console.log("serched");
    getSerchedHero(serchText.value);
}

randomHeroButton.onclick = () => {

    getHero();
}
let id;
const token = 759990485644084;
const url = `https://superheroapi.com/api.php/${token}`;
let getHero = () => {
    id = Math.floor((Math.random() * 700) + 1);
    fetch(`${url}/${id}`)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            HeroImage.src = json.image.url;
            HeroName.innerText = `${json.name}`;
            HeroImage.style.width = "220px";
            HeroImage.style.height = "220px"

            speed.innerText = json.powerstats.speed;
            strength.innerText = json.powerstats.strength;


        });
}
// const img = "https://www.superherodb.com/pictures2/portraits/10/100/10328.jpg";
let getSerchedHero = (name) => {

    fetch(`${url}/search/${name}`)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            HeroImage.src = json.results[0].image.url;
            HeroName.innerText = `${json.results[0].name}`;
            HeroImage.style.width = "220px";
            HeroImage.style.height = "220px"

            speed.innerText = json.results[0].powerstats.speed;
            strength.innerText = json.results[0].powerstats.strength;


        });
}