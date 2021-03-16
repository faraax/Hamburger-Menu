let menuIcon = document.querySelector('.hamburger-menu');

let navBar = document.querySelector('.navbar')

menuIcon.addEventListener('click', () => {
    navBar.classList.toggle('change');
})