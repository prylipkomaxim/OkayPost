"use strict"

const menuBody = document.querySelector('.menu__body');
const menuBodyBg = document.querySelector('.menu__body-bg');
const menuIcon = document.querySelector('.menu__icon');
const body = document.body;

if (menuBody && menuIcon) {
    menuIcon.addEventListener('click', function(){
        menuIcon.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        menuBodyBg.classList.toggle('_active');
        body.classList.toggle('body-lock-burger');
    });
    menuBodyBg.addEventListener('click', function(){
        closeBurger();
    });
    window.addEventListener('resize', function() {
        let windowWidth = document.querySelector('.wrapper').offsetWidth;
        if(windowWidth > 767) {
            closeBurger();
        };
    });
};
function closeBurger() {
    menuIcon.classList.remove('_active');
    menuBody.classList.remove('_active');
    menuBodyBg.classList.remove('_active');
    body.classList.remove('body-lock-burger');
};
new Swiper('.benefit__goods-categories-container',{
    navigation:{
        nextEl: '.benefit__goods-categories-arrow_rigth',
        prevEl: '.benefit__goods-categories-arrow_left',
    },
    loop:true,
    mousewheel:true,
    breakpoints: {
        320:{
            slidesPerView:1,
        },
        420:{
            slidesPerView:1.5,
        },
        525:{
            slidesPerView:2,
        },
        625:{
            slidesPerView:2.5,
        },
        725:{
            slidesPerView:3,
        },
        825:{
            slidesPerView:3.5,
        },
        925:{
            slidesPerView:4,
        },
        1025:{
            slidesPerView:4.5,
        },
        1125:{
            slidesPerView:5,
        },
        1225:{
            slidesPerView:5.5,
        },
        1400:{
            slidesPerView:6,
        }
    }
})

new Swiper('.benefit__goods-example-container', {
    slidesPerView:1,
    navigation:{
        nextEl: '.benefit__slider-example-arrow_next',
        prevEl: '.benefit__slider-example-arrow_prev',
    },
    speed:1000,
})
const titles = document.querySelectorAll('[data-name="spoiler-title"]'); console.log(titles);

for (let i = 0; i < titles.length; i++) {
    const itemTitle = titles[i];
    itemTitle.addEventListener('click', function(){
        this.nextElementSibling.classList.toggle('spoiler-body')
        this.classList.toggle('spoiler-open')
    })
}
const popupBtn = document.querySelector('[data-name="popup-btn"]'); 
const popup = document.querySelector('.popup'); 
const popupClose = document.querySelector('.popup__close'); 

if (popupBtn && popup){
    popupBtn.addEventListener('click', function() {
        popup.classList.toggle('popup-open');
        document.body.classList.toggle('body-lock-popup');
    })
    popupClose.addEventListener('click', function(e) {
            closePopup();
    })
    popup.addEventListener('click', function(e) {
        if (!e.target.closest('.popup__window')) {
            closePopup();
        }
    })
}
function closePopup() {
    popup.classList.remove('popup-open');
    document.body.classList.remove('body-lock-popup');
}
