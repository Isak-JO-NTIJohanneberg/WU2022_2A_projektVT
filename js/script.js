
const nav = document.getElementById('navmeny')
const burger = document.getElementById('burgare')

function toggleMenu() {
    nav.classList.toggle('nav-active')
    burger.classList.toggle('kryss')
}

burger.addEventListener('click', toggleMenu)


//'mouseover'

























/*

const undermeny = document.getElementById('undermeny')
const maskiner = document.getElementById('maskiner')

function toggleMenu2() {
    //nav.classList.toggle('nav-active')
   undermeny.classList.toggle('open-unermeny')
}

maskiner.addEventListener('mouseover', toggleMenu2)

*/