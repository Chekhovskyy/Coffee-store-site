const burgerButton = document.querySelector('.burger-button');
burgerButton.addEventListener('click', function () {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active-burger');
});

const menuLinks = document.querySelectorAll('.burger-menu .list-nav .item-nav a');
menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        if (this.getAttribute('href').includes('#') && this.getAttribute('href') !== '#') {
            const nav = document.querySelector('.nav');
            if (nav.classList.contains('active-burger')) {
                nav.classList.remove('active-burger');
            }
        }
    });
});