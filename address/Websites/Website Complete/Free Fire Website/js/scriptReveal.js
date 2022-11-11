const moveTop = {
    origin: 'top',
    delay: 1500,
    distance: '10px',
    easing: 'ease-in-out',
}

const moveLeft = {
    origin: 'left',
    delay: 2500,
    distance: '25px',
    easing: 'ease-in-out',
};
const moveText = {
    origin: 'right',
    delay: 3000,
    distance: '5px',
    easing: 'ease-in-out',
};

const moveRight = {
    origin: 'bottom',
    delay: 3000,
    distance: '20px',
    easing: 'ease-in-out',
    scale: 1,
    viewFactor: 0,
}

ScrollReveal({ reset: false }); //Centro

ScrollReveal().reveal('.reveal-1', moveTop); //titulos

ScrollReveal().reveal('.reveal-2', moveLeft); //conteudo

ScrollReveal().reveal('.reveal-3', moveText); //conteudo>conteudo

ScrollReveal().reveal('.reveal-4', moveRight); //icons