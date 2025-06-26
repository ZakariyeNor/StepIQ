/*  Toggle Script */
document.addEventListener('DOMContentLoaded', function() {
    /* Mobile menu toggle */
    const burgerIcon = document.querySelector('.menu-icon');
    const listItems = document.querySelector('.mobile-nav');

    if(burgerIcon && listItems) {
        burgerIcon.addEventListener('click', function() {
            listItems.classList.toggle('open')
        });
    }
});