document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navList = document.getElementById('nav-list');
    burger.addEventListener('click', function() {
        const open = navList.classList.toggle('open');
        burger.classList.toggle('open');
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    navList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('open');
            burger.classList.remove('open');
            burger.setAttribute('aria-expanded', 'false');
        });
    });
});