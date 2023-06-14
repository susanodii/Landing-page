const navEl = document.querySelector('.nav')
const hamburgerEl =document.querySelector('.hamburger')
const heroBaby = document.querySelector('section.hero_baby_background')
const barEl = document.querySelector('.bar')


hamburgerEl.addEventListener('click', ()=>{
    heroBaby.style.marginTop = "55rem";
    navEl.classList.toggle('nav__open')
    hamburgerEl.classList.toggle('hambuger__open')
    
})



navEl.addEventListener('click', ()=> {
    heroBaby.style.marginTop = "0";
    navEl.classList.remove('nav__open')
    hamburgerEl.classList.remove('hambuger__open')
})


barEl.addEventListener('click',()=> {
    heroBaby.style.marginTop = "0";
    hamburgerEl.classList.remove('hambuger__open')
})