const navbar = document.getElementById('navbar');
const mainMenu = document.getElementById('main-menu');

navbar.addEventListener('click', () => {
    mainMenu.classList.toggle('active');
});
