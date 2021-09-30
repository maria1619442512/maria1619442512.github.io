var navbarToggler = document.querySelector('.navbar-toggler');
var navbarCollapse = document.querySelector('.navbar-collapse');

navbarToggler.addEventListener('click', function () {
    if (navbarCollapse.classList.contains('show')) {
        this.setAttribute('aria-expanded', 'false');
        navbarCollapse.classList.remove('show');
    } else {
        navbarCollapse.classList.add('show');
        this.setAttribute('aria-expanded', 'true');
    }
});
