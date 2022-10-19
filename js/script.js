//Pre-Loader

var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
    loader.style.display = "none";
});

//Slider and Flex

let slider = document.getElementById('slider_flex');
var x = window.matchMedia("(min-width: 1024px)")

function myFunction(x) {
    if (x.matches) {
        slider.classList.remove('slider-principal');
        slider.classList.add('flex-certificates');
    } else {
        console.log('mobile');
    }
}

myFunction(x)
x.addListener(myFunction);

//ScrollReveal + Loading Content

function loading() {

    document.getElementById("content").style.display = "block";

    window.sr = ScrollReveal({ reset: false });

    sr.reveal('.area-0', { duration: 3000 });

    sr.reveal('.area-1', { duration: 4000 });

    sr.reveal('.area-2', { rotate: { x: 10, y: 10, z: 0 }, duration: 5000 });

    sr.reveal('.area-3', { rotate: { x: 0, y: 30, z: 0 }, duration: 5000 });

    sr.reveal('.area-4', { rotate: { x: 5, y: 0, z: 0 }, duration: 4000 });

    sr.reveal('.area-5', { rotate: { x: 10, y: 0, z: 0 }, duration: 6000 });

    sr.reveal('.area-6', { duration: 5000 });
}


//Menu Mobile

let menu = document.querySelector('#menu__btn');
let navbar = document.querySelector('.top__nav-mobile');

menu.onclick = () => {
    menu.classList.toggle('fa-xmark')
    navbar.classList.toggle('top__nav-mobile-actived');
}
window.onscroll = () => {
    menu.classList.remove('fa-xmark');
    navbar.classList.remove('top__nav-mobile-actived');
}


//Slick Slider

$('.slider-principal').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1500,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1
});

$('.image__portfolio').slick({
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 2000,
    slidesToShow: 1
});



