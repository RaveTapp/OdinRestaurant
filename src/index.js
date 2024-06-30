import { pageLoad } from './home.js';
import { menuLoad } from './menu.js';
import { aboutLoad } from './about.js';

let homeBtn = document.querySelector("button.home");
let menuBtn = document.querySelector("button.menu");
let aboutBtn = document.querySelector("button.about");

pageLoad();
let currentPage = "home";

homeBtn.addEventListener('click', () => {
    if(currentPage !== "home"){
        pageLoad();
        currentPage = "home";
    }
});

menuBtn.addEventListener('click', () => {
    if(currentPage !== "menu"){
        menuLoad();
        currentPage = "menu";
    }
});

aboutBtn.addEventListener('click', () => {
    if(currentPage !== "about"){
        aboutLoad();
        currentPage = "about";
    }
});