// index.js
window.addEventListener('scroll', function() {
    const header = document.getElementsByTagName('header');
    const secnav = document.getElementsByTagName('nav');
    const firstnavHeight = firstnav.offsetHeight;

    if (window.scrollY >= firstnavHeight) {
        secnav.classList.add('sticky');
    } else {
        secnav.classList.remove('sticky');
    }
});
