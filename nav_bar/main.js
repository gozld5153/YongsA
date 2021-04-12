const hamburg = document.querySelector('.hamburg');
const menu = document.querySelector('.nav_menu');
const icon = document.querySelector('.nav_icon');

hamburg.addEventListener('click', () => {
    menu.classList.toggle('active');
    icon.classList.toggle('active');
});