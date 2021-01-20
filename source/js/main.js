"use strict";

const burger = document.querySelector('.navigation__toggle');
const navigationMenu = document.querySelector('.navigation__menu');
const body = document.querySelector('body')

function addClassBlock(nameClass) {
    burger.addEventListener('click', () => {
        burger.classList.toggle(nameClass);
        navigationMenu.classList.toggle('navigation__menu--active');
        body.classList.toggle('overflow')
    });
}

addClassBlock('navigation__toggle--active');


const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector);

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
    
                modal.classList.add('modal-open');
                document.body.classList.add('overflow');
            });
        });

        close.addEventListener('click', () => {
            modal.classList.remove('modal-open');
            document.body.classList.remove('overflow');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('modal-open');
                document.body.classList.remove('overflow');
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).classList.add('modal-open');
            document.body.classList.add('overflow');
        }, time);
    }

    bindModal('.repair__call-btn', '.popup-call', '.popup__call--close');
    // bindModal('.phone_link', '.popup', '.popup .popup_close');
    // showModalByTime('.popup-call', 6000);
};

modals();