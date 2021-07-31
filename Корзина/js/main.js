"use strict";
let searchBtn = document.querySelector('.search__icon');
let searchBlock = document.querySelector('.search');

searchBtn.addEventListener('click', searchBtnClickHandler);

function searchBtnClickHandler() {
    searchBlock.classList.toggle('show');
}

let burgerBtn = document.querySelector('.burger-btn');
let navMenu = document.querySelector('.menu');
let closeMenuBtn = document.querySelector('.close-icon');
let introInner = document.querySelector('.intro__inner');
burgerBtn.addEventListener('click', function() {
    navMenu.classList.toggle('open-menu');
    navMenu.style.height = `${introInner.clientHeight}`;
});
closeMenuBtn.addEventListener('click', function() {
    navMenu.classList.remove('open-menu');
});

const swiper = new Swiper('.swiper-container', {
    // Optional parameters

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
let filterCatalogBtn = document.querySelector('.filter__btn');
let filterCatalogBlock = document.querySelector('.filter');

filterCatalogBtn.addEventListener('click', function() {
    filterCatalogBlock.classList.toggle('show-filter');
});