document.addEventListener('DOMContentLoaded', function() {
    // navbar
    const navbarNav = document.querySelector('.navbar-nav');
    const hamburgerMenu = document.querySelector('#hamburger-menu');
    // search
    const searchButton = document.querySelector('#search-button')
    const searchForm = document.querySelector('.search-form');
    const searchBox = document.querySelector('#search-box');
    // shopping cart
    const shoppingCart = document.querySelector('.shopping-cart');
    const shoppingButton = document.querySelector('#shopping-cart-button');
    // Modal Box
    const itemDetailModal = document.querySelector('#item-detail-modal');
    const itemDetailButtons = document.querySelectorAll('.item-detail-button')
    

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

        if(!shoppingButton.contains(e.target) && !shoppingCart.contains(e.target)){
            shoppingCart.classList.remove('active');
        }

    });
    
    //toggle class active search form
    document.querySelector('#search-button').onclick = (e) => {
        searchForm.classList.toggle('active');
        searchBox.focus();
        e.preventDefault();
    }

    // toggle class active shopping cart
    if(shoppingButton) {
        shoppingButton.onclick = (e) => {
            shoppingCart.classList.toggle('active');
            e.preventDefault();
        }
    }

    //toggle class detail button
    itemDetailButtons.forEach((btn) => {
        if(btn) {
            btn.onclick = (e) => {
                itemDetailModal.style.display = 'flex';
                e.preventDefault();
            };
        };
    });

    // close modal detail
    document.querySelector('.modal .close-icon').onclick = (e) => {
        itemDetailModal.style.display = 'none';
        e.preventDefault();
    }

    // close di luar modal
    window.onclick = (e) => {
       if(e.target === itemDetailModal) {
        itemDetailModal.style.display = 'none';
       }
    }
});