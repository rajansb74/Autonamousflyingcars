
const hamburger = document.querySelector('.hamburger');
const navMenus = document.querySelectorAll('.home-nav, .home-nav1');



hamburger.addEventListener('click', () => {
    navMenus.forEach(nav => nav.classList.toggle('active'));});
