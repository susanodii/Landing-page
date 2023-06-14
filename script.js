const navEl = document.querySelector('.nav')
const hamburgerEl =document.querySelector('.hamburger')
const heroBaby = document.querySelector('section.hero_baby_background')
const mainContainer = document.querySelector('.main')




hamburgerEl.addEventListener('click', () => {
    // heroBaby.style.marginTop = "55rem";
    mainContainer.style.display = 'none'
    navEl.classList.toggle('nav__open');
    hamburgerEl.classList.toggle('hambuger__open');
    
    navEl.addEventListener('transitionend', () => {
      if (!navEl.classList.contains('nav__open')) {
        // heroBaby.style.marginTop = "";
        mainContainer.style.display = 'block'
      }
    });
  });

navEl.addEventListener('click', ()=> {
    // heroBaby.style.marginTop = "0";
    mainContainer.style.display = 'block'
    navEl.classList.remove('nav__open')
    hamburgerEl.classList.remove('hambuger__open')
})


