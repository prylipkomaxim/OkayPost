"use strict";const menuBody=document.querySelector(".menu__body"),menuBodyBg=document.querySelector(".menu__body-bg"),menuIcon=document.querySelector(".menu__icon"),body=document.body;function closeBurger(){menuIcon.classList.remove("_active"),menuBody.classList.remove("_active"),menuBodyBg.classList.remove("_active"),body.classList.remove("_lock")}menuBody&&menuIcon&&(menuIcon.addEventListener("click",(function(){menuIcon.classList.toggle("_active"),menuBody.classList.toggle("_active"),menuBodyBg.classList.toggle("_active"),body.classList.toggle("_lock")})),menuBodyBg.addEventListener("click",(function(){closeBurger()})),window.addEventListener("resize",(function(){document.querySelector(".wrapper").offsetWidth>767&&closeBurger()}))),new Swiper(".benefit__goods-categories-container",{navigation:{nextEl:".benefit__goods-categories-arrow_rigth",prevEl:".benefit__goods-categories-arrow_left"},loop:!0,mousewheel:!0,breakpoints:{320:{slidesPerView:1},420:{slidesPerView:1.5},525:{slidesPerView:2},625:{slidesPerView:2.5},725:{slidesPerView:3},825:{slidesPerView:3.5},925:{slidesPerView:4},1025:{slidesPerView:4.5},1125:{slidesPerView:5},1225:{slidesPerView:5.5},1400:{slidesPerView:6}}}),new Swiper(".benefit__goods-example-container",{slidesPerView:1,navigation:{nextEl:".benefit__slider-example-arrow_next",prevEl:".benefit__slider-example-arrow_prev"},speed:1e3});const titles=document.querySelectorAll('[data-name="spoiler-title"]');console.log(titles);for(let e=0;e<titles.length;e++){titles[e].addEventListener("click",(function(){this.nextElementSibling.classList.toggle("spoiler-body"),this.classList.toggle("spoiler-open")}))}