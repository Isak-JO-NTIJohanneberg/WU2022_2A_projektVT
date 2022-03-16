const nav = document.getElementById('navmeny')
const burger = document.getElementById('burgare')

function toggleMenu() {
    nav.classList.toggle('nav-active')
    burger.classList.toggle('kryss')
}

burger.addEventListener('mouseover', toggleMenu)




const undermeny = document.getElementById('undermeny')
const maskiner = document.getElementById('maskiner')

function toggleMenu2() {
   undermeny.classList.toggle('open-unermeny')
}

maskiner.addEventListener('mouseover', toggleMenu2)