// memunculkan hamburger menu saat di click
document.addEventListener('DOMContentLoaded', function() {
    const navbarNav = document.querySelector('.navbar-nav');
    const hamburgerMenu = document.querySelector('#hamburger-menu');

    if (hamburgerMenu) {
        hamburgerMenu.onclick = () => {
            navbarNav.classList.toggle('active');
        };
    }
});


// click di luar untuk menghilangkan sidebar
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e){
   if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
   } 
});
