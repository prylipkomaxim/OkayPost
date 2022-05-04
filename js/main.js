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

const loginPopupBtn = document.querySelector('[data-name="loginpopup-btn"]'); 
const loginPopup = document.querySelector('.loginpopup'); 
const loginPopupClose = document.querySelector('.loginpopup__close'); 

if (loginPopupBtn && loginPopup){
    loginPopupBtn.addEventListener('click', function() {
        loginPopup.classList.toggle('loginpopup-open');
        document.body.classList.toggle('body-lock-popup');
    })
    loginPopupClose.addEventListener('click', function(e) {
            closeLoginPopup();
    })
    loginPopup.addEventListener('click', function(e) {
        if (!e.target.closest('.loginpopup__window')) {
            closeLoginPopup();
        }
    })
}

function closeLoginPopup() {
    loginPopup.classList.remove('loginpopup-open');
    document.body.classList.remove('body-lock-popup');
}

