const navbar = document.querySelector('[data-navbar]');
const navbarTogglerElements = document.querySelectorAll('[data-nav-toggler]');
const overlay = document.querySelector('[data-overlay]');
const themeBtn=document.querySelector('#theme-btn');
const body=document.querySelector('body');
const getAllDividers=document.querySelectorAll('.divider');


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

themeBtn.addEventListener('click',()=>{
    if(body.classList.contains('black-theme')){
        body.classList.remove('black-theme');
        body.classList.add('blue-theme');

        getAllDividers.forEach(item=>{
            item.setAttribute('data-theme','blue')
        })

    }else if(body.classList.contains('blue-theme')){
        body.classList.remove('blue-theme');
        body.classList.add('violet-theme');

        getAllDividers.forEach(item=>{
            item.setAttribute('data-theme','violet')
        })

    }else if(body.classList.contains('violet-theme')){
        body.classList.remove('violet-theme');
        body.classList.add('black-theme');

        getAllDividers.forEach(item=>{
            item.setAttribute('data-theme','black')
        })
    }
})