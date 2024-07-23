// index.js
window.addEventListener('scroll', function() {
    const firstnav = document.querySelector('.firstnav');
    const secnav = document.querySelector('.secnav');
    const firstnavHeight = firstnav.offsetHeight;

    if (window.scrollY >= firstnavHeight) {
        secnav.classList.add('sticky');
    } else {
        secnav.classList.remove('sticky');
    }
});
