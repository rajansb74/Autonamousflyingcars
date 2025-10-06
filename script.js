const hamburger = document.querySelector('.hamburger');

const nav = document.querySelector('.home-nav');

hamburger.addEventListener('click', ()=> {

    nav.classList.toggle('active');
});