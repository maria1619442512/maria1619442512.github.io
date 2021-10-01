var navbarToggler = document.querySelector('.navbar-toggler');

navbarToggler.addEventListener('click', function () {
    if (this.classList.contains('show')) {
        this.setAttribute('aria-expanded', 'false');
        this.classList.remove('show');
    } else {
        this.setAttribute('aria-expanded', 'true');
        this.classList.add('show');
    }
});
