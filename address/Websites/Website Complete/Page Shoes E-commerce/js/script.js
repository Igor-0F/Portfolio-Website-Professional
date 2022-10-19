function showUp(small) {
    var full = document.getElementById("imagebox")
    full.src = small.src
}

let menu = document.querySelector('#menu__btn');
let navbar = document.querySelector('.navbar__list');

menu.onclick = () => {
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('navbar__list-active');
}

window.onscroll = () => {
    menu.classList.remove('fa-xmark');
    navbar.classList.remove('navbar__list-active');
}