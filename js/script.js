document.addEventListener('DOMContentLoaded', function() {
    // navbar
    const navbarNav = document.querySelector('.navbar-nav');
    const hamburgerMenu = document.querySelector('#hamburger-menu');
    // search
    const searchButton = document.querySelector('#search-button')
    const searchForm = document.querySelector('.search-form');
    const searchBox = document.querySelector('#search-box');

    // toggle class active hamburger menu
    if (hamburgerMenu) {
        hamburgerMenu.onclick = () => {
            navbarNav.classList.toggle('active');
        };
    }

    // click di luar untuk menghilangkan elemen (navbar dan search)
    document.addEventListener('click', function(e) {
        if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
            navbarNav.classList.remove('active');
        }

        if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
            searchForm.classList.remove('active');
        }
    });
    
    //toggle class active search form
    document.querySelector('#search-button').onclick = (e) => {
        searchForm.classList.toggle('active');
        searchBox.focus();
        e.preventDefault();
    }
        
});