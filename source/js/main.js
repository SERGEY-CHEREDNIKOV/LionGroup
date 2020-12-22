"use strict";
 
const burger = document.querySelector('.navigation__toggle');
const navigationMenu = document.querySelector('.navigation__menu');

function addClassBlock(nameClass) {   
    burger.addEventListener('click', () => {
        burger.classList.toggle(nameClass);
        navigationMenu.classList.toggle('navigation__menu--active');
    });  
}
 
addClassBlock('navigation__toggle--active');     