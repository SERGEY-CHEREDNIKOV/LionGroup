"use strict";

// ----- burger menu -----

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


// ----- modal windows -----


const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);

        // const popup = document.querySelectorAll('.popup-explanation'); 
        // const popupCallback = document.querySelectorAll('.popup-explanation__footer-link');      

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

        // popupCallback.addEventListener('click', () => {
        //     popup.classList.remove('modal-open');
        //     document.body.classList.remove('overflow');
        // });

    }

    function showModalByTime(selector, time) {
        setTimeout(function () {
            document.querySelector(selector).classList.add('modal-open');
            document.body.classList.add('overflow');
        }, time);
    }

    bindModal('.repair__call-btn', '.popup-call', '.popup__call--close');
    bindModal('.price__content-button--open-popup', '.popup-explanation__popup--active', '.popup-explanation__popup--close');
    bindModal('.question-competitors__popup--open', '.popup-explanation__popup-cheaper--active', '.popup-explanation__popup-cheaper--close');
    // bindModal('.popup-explanation__footer-link', '.popup-call', '.popup__call--close');
    // bindModal('.popup-explanation__footer-link--callback-button', '.popup-call', '.popup__call--close');
    // bindModal('.phone_link', '.popup', '.popup .popup_close');
    // showModalByTime('.popup-call', 60000);
};

modals();


// ----- tabs -----


const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });

        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        content[i].style.display = 'block';
        tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target &&
            (target.classList.contains(tabSelector.replace(/\./, "")) ||
                target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
};

tabs('.advantages__button-wrapper', '.btn__advantages', '.advantages__content', 'btn__advantages--active');


//  ----------------- sliders -----------

// const sliders = (slides, dir, prev, next) => {
//     let slideIndex = 1,
//         paused = false;

//     const items = document.querySelectorAll(slides);

//     function showSlides(n) {
//         if (n > items.length) {
//             slideIndex = 1;
//         }

//         if (n < 1) {
//             slideIndex = items.length;
//         }

//         items.forEach(item => {
//             item.classList.remove("sample-apartments__slider--active");
//             // item.style.display = "none";
//         });

//         items[slideIndex - 1].classList.add('sample-apartments__slider--active');
//     }

//     showSlides(slideIndex);

//     function plusSlides(n) {
//         showSlides(slideIndex += n);
//     }

//     try {
//         const prevBtn = document.querySelector(prev),
//               nextBtn = document.querySelector(next);

//         prevBtn.addEventListener('click', () => {
//             plusSlides(-1);
//             items[slideIndex - 1].classList.remove('animate__slideInLeft');
//             items[slideIndex - 1].classList.add('animate__slideInRight');
//         });

//         nextBtn.addEventListener('click', () => {
//             plusSlides(1);
//             items[slideIndex - 1].classList.remove('animate__slideInRight');
//             items[slideIndex - 1].classList.add('animate__slideInLeft');
//         });
//     } catch(e){}

//     function activateAnimation() {
//         // if (dir === 'vertical') {
//         //     paused = setInterval(function() {
//         //         plusSlides(1);
//         //         items[slideIndex - 1].classList.add('slideInDown');
//         //     }, 3000);
//         // } else {
//             paused = setInterval(function() {
//                 plusSlides(1);
//                 items[slideIndex - 1].classList.remove('animate__slideInRight');
//                 items[slideIndex - 1].classList.add('animate__slideInLeft');
//             }, 6000);
//         // }
//     }
//     activateAnimation();

//     items[0].parentNode.addEventListener('mouseenter', () => {
//         clearInterval(paused);
//     });
//     items[0].parentNode.addEventListener('mouseleave', () => {
//         activateAnimation();
//     });

// };


// sliders('.sample-apartments__slider', '', '.sample-apartments__button-left', '.sample-apartments__button-right');
// sliders('.sample-apartments__slider-description', '', '.sample-apartments__button-left', '.sample-apartments__button-right');