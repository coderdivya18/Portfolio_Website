const navbar = document.querySelector('[data-navbar]');
const navbarTogglerElements = document.querySelectorAll('[data-nav-toggler]');
const overlay = document.querySelector('[data-overlay]');


function handleElementsOnClick(elements,eventType, callback) {
    console.log(elements);
    for(let element of elements) {
        element.addEventListener(eventType, callback);
    }

}
function handleNavbarTogglerClick() {
  navbar.classList.toggle('active');
  overlay.classList.toggle('active');
}

handleElementsOnClick(navbarTogglerElements, 'click', handleNavbarTogglerClick);