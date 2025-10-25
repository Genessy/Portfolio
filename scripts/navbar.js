function calculateNavbarHeight() {
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar.offsetHeight;
    document.querySelector('main').style.paddingTop = navbarHeight + 'px';
}

calculateNavbarHeight();