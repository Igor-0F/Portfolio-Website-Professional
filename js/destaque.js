(function () {

    var destaca = document.querySelector('.reveal h2');
    var destacaDois = document.querySelector('.reveal-2 h2');
    var destacaTres = document.querySelector('.reveal-3 h2');
    var destacaQuatro = document.querySelector('.reveal-4 h2');
    var destacaCinco = document.querySelector('.reveal-5 h2');
    var destacaSeis = document.querySelector('.reveal-6 h2');
    window.addEventListener('scroll', setupNav);

    function setupNav() {
        var posYscroll = getYscroll()
        if (posYscroll > 100 && !hasClassFx()) {
            destaca.classList.add('actived')
            destacaDois.classList.add('actived')
            destacaTres.classList.add('actived')
            destacaQuatro.classList.add('actived')
            destacaCinco.classList.add('actived')
            destacaSeis.classList.add('actived')
        }
        if (posYscroll <= 100 && hasClassFx()) {
            destaca.classList.remove('actived')
            destacaDois.classList.remove('actived')
            destacaTres.classList.remove('actived')
            destacaQuatro.classList.remove('actived')
            destacaCinco.classList.remove('actived')
            destacaSeis.classList.remove('actived')
        }
    }
    function getYscroll() {
        return window.pageYOffset;
    }

    function hasClassFx() {
        return !!document.querySelector('.actived');
    }
}
)();