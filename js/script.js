document.addEventListener('DOMContentLoaded', function() {
    const navbarNav = document.querySelector('.navbar-nav');
    const hamburgerMenu = document.querySelector('#hamburger-menu');

    if (hamburgerMenu) {
        hamburgerMenu.onclick = () => {
            navbarNav.classList.toggle('active');
        };
    }

    // click di luar untuk menghilangkan sidebar
    document.addEventListener('click', function(e) {
        if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
            navbarNav.classList.remove('active');
        }
    });
});
