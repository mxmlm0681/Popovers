/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/Popovers.js
class Popovers {
  constructor(parentEl, title = "", text = "") {
    this.parentEl = parentEl;
    this.title = title;
    this.text = text;
    this.elPopup = document.createElement("div");
  }
  get htmlElement() {
    return `
    <p class="title-popup">${this.title}</p>
    <p class="text-popup">${this.text}</p>
    `;
  }
  bindToDOM() {
    this.elPopup.id = "popup";
    this.elPopup.className = "popup hidden";
    this.elPopup.innerHTML = this.htmlElement;
    this.parentEl.appendChild(this.elPopup);
  }
  positionPopup(element) {
    const selectPopup = document.querySelector("#popup");
    selectPopup.classList.remove("hidden");
    selectPopup.style.bottom = `${element.offsetTop + 10}px`;
    selectPopup.style.left = `${element.offsetLeft - (selectPopup.offsetWidth - element.offsetWidth) / 2}px`;
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const elementButton = document.getElementById("button");
const addPopup = new Popovers(document.body, "Popover title", "And here`s some amazing content. It`s very engaging. Right?");
addPopup.bindToDOM();
elementButton.addEventListener("click", () => {
  addPopup.positionPopup(elementButton);
});
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;