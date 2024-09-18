const titleText = 'Pokemon';
const title = document.querySelector('.name')
title.textContent = titleText

const logo = document.querySelector('.logo')
const logoPath = "./src/img/logo_menu.png"
function getTitle() {
    title.textContent = titleText
}
function getImageLogo() {
    logo.src = logoPath
}

getTitle();
getImageLogo();

console.log(logo);

const profilePicture = document.querySelector(".profil-picture")
console.log(profilePicture)
const profilePicturePath = "./src/img/profil_picture.jpg"
function getProfilPicture() {
    profilePicture.src = profilePicturePath;
}
getProfilPicture()
const numberpost = document.querySelector(".post .number")
numberpost.textContent = 9;

const numberfollowers = document.querySelector(".follower .number")
numberfollowers.textContent = 77;

const numberfollow = document.querySelector(".follow .number")
numberfollow.textContent = 83;




const idtext = '@pokemon_company'
const id = document.querySelector(".id")
id.textContent = idtext

const descriptiontext = "Official Instagram for The Pokémon Company International! <br/> For all things TCG ➡️ @pokemontcg";
const description = document.querySelector(".description");
description.innerHTML = descriptiontext;

const imgs = ['./src/img/pokemon-picture-1.jpg', './src/img/pokemon-picture-2.jpg', './src/img/pokemon-picture-3.jpg', './src/img/pokemon-picture-4.jpg', './src/img/pokemon-picture-5.jpg', './src/img/pokemon-picture-6.jpg', './src/img/pokemon-picture-7.jpg', './src/img/pokemon-picture-8.jpg', './src/img/pokemon-picture-9.jpg',]

const items = document.querySelectorAll('.galerie img')
imgs.forEach((element, i) => {
    items[i].src = element
});



