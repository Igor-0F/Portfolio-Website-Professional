let btn = document.querySelector("#menu-btn");
let markX = document.querySelector(".navbar");

btn.onclick = () => {
    btn.classList.toggle('fa-xmark');
    markX.classList.toggle('navbar-mobile');
}

window.onscroll = () => {
    btn.classList.remove('fa-xmark');
    markX.classList.remove('navbar-mobile');
}


$('.box-img').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1
});