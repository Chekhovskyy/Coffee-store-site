const burgerButton = document.querySelector('.burger-button');
burgerButton.addEventListener('click', function () {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active-burger');
});