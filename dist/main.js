/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Modules/about.js":
/*!******************************!*\
  !*** ./src/Modules/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"aboutContent\": () => (/* binding */ aboutContent),\n/* harmony export */   \"removeAboutContent\": () => (/* binding */ removeAboutContent)\n/* harmony export */ });\n// import 'style.css'\n// import '../src/style.css';\n\nfunction aboutContent(){\n    const main = document.getElementById(\"main\");\n    \n    let section = document.createElement(\"section\");\n    section.id = \"about\";\n    section.classList.add(\"about\");\n    section.style.display = \"flex\";\n\n    let aboutContentDiv = document.createElement(\"div\");\n    aboutContentDiv.classList.add(\"about-content\");\n\n    let aboutContainerDiv = document.createElement(\"div\");\n    aboutContainerDiv.classList.add(\"about-container\");\n\n    let h3 = document.createElement(\"h3\");\n    h3.classList.add(\"about-h3\");\n    h3.innerText = \"About us \";\n\n    let p = document.createElement(\"p\");\n    p.classList.add(\"ptag\");\n    p.innerText = \"Lorem ipsum dolor sit amet consectetur adipisicing elit.\\\n     Tempora quidem labore quas placeat.\\\n    Earum animi dolorum quas facere, consequuntur sint?\"\n    \n    let aboutImg = document.createElement(\"div\")\n    aboutImg.classList.add(\"about-img\");\n\n    section.appendChild(aboutContentDiv);\n    section.appendChild(aboutImg);\n    aboutContentDiv.appendChild(aboutContainerDiv);\n    aboutContainerDiv.appendChild(h3);\n    aboutContainerDiv.appendChild(p);\n\n    main.appendChild(section);\n}\n\nfunction removeAboutContent(){\n    const id = document.getElementById(\"about\");\n    if(id == null) return;\n    id.remove();\n    \n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/Modules/about.js?");

/***/ }),

/***/ "./src/Modules/home.js":
/*!*****************************!*\
  !*** ./src/Modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homeContent\": () => (/* binding */ homeContent),\n/* harmony export */   \"removeIntroContent\": () => (/* binding */ removeIntroContent)\n/* harmony export */ });\n// import 'style.css';\n// import '../src/style.css';\n\nfunction homeContent(){\n    const main = document.getElementById(\"main\");\n    let div = document.createElement(\"div\");\n    div.id = \"intro-content\";\n    div.classList.add(\"intro-content\");\n    div.style.display = \"grid\";\n\n    let h1 = document.createElement(\"h1\");\n    let location = document.createElement(\"p\");\n    let tel = document.createElement(\"p\");\n\n    h1.innerText = \"Dine with us\";\n    location.innerText = \"143TH Avenue. London\";\n    tel.innerText = \"TEL: 1 (234) 5555\";\n    \n    div.appendChild(h1);\n    div.appendChild(location);\n    div.appendChild(tel);\n    main.appendChild(div);\n}\n\nfunction removeIntroContent(){\n    const id = document.getElementById(\"intro-content\");\n    if(id == null) return;\n    id.remove()\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/Modules/home.js?");

/***/ }),

/***/ "./src/Modules/reviews.js":
/*!********************************!*\
  !*** ./src/Modules/reviews.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reviewsContent\": () => (/* binding */ reviewsContent),\n/* harmony export */   \"removeReviewContent\": () => (/* binding */ removeReviewContent)\n/* harmony export */ });\n// import 'style.css';\n// import '../src/style.css';\n\nfunction reviewsContent(){\n    const main = document.getElementById(\"main\");\n    \n    let reviewsDiv = document.createElement(\"div\");\n    reviewsDiv.id = \"reviews\";\n    reviewsDiv.classList.add(\"reviews\");\n\n    let reviewsContainerDiv = document.createElement(\"div\");\n    reviewsContainerDiv.classList.add(\"reviews-container\");\n    reviewsContainerDiv.style.display = \"flex\";\n\n    let reviewsImgDiv = document.createElement(\"div\");\n    reviewsImgDiv.classList.add(\"review-img\");\n\n    let reviewContentDiv = document.createElement(\"div\");\n    reviewContentDiv.classList.add(\"review-content\");\n\n    let reviewH3 = document.createElement(\"h3\");\n    reviewH3.classList.add(\"review-heading\");\n    reviewH3.innerText = \"Reviews\";\n\n    let p1 = document.createElement(\"p\");\n    p1.innerText = \"Organic Farm\";\n\n    let p2 = document.createElement(\"p\");\n    p2.innerText = '\"';\n\n    let p3 = document.createElement(\"p\");\n    p3.classList.add(\"review-text\");\n    p3.innerText = \"Lorem ipsum dolor, sit amet consectetur adipisicing elit.\\\n        Asperiores consequuntur error molestias tenetu excepturi sequi.\\\n        Lorem ipsum dolor sit, amet consectetur adipisicing elit.\\\n        Excepturi labore perspiciatis praesentium sapiente maxime aperiam!\\\n    Minus, repellat reiciendis? In, dolorum!\" \n    \n    let p4 = document.createElement(\"p\");\n    p4.innerText = \"- Loo Hudson\";\n\n    reviewsDiv.appendChild(reviewsContainerDiv);\n    reviewsContainerDiv.appendChild(reviewsImgDiv);\n    reviewsContainerDiv.appendChild(reviewContentDiv);\n\n    reviewContentDiv.appendChild(reviewH3);\n    reviewContentDiv.appendChild(p1);\n    reviewContentDiv.appendChild(p2);\n    reviewContentDiv.appendChild(p3);\n    reviewContentDiv.appendChild(p4);   \n\n    main.appendChild(reviewsDiv);\n}\n\nfunction removeReviewContent(){\n    const id = document.getElementById(\"reviews\");\n    if(id == null) return\n    id.remove();\n}\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/Modules/reviews.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Modules_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modules/home.js */ \"./src/Modules/home.js\");\n/* harmony import */ var _Modules_about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/about.js */ \"./src/Modules/about.js\");\n/* harmony import */ var _Modules_reviews_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modules/reviews.js */ \"./src/Modules/reviews.js\");\n// import './style.css';\n\n\n\n\n\n\n\n\nconst home = document.getElementById(\"home-btn\");\nconst review = document.getElementById(\"review-btn\");\nconst about = document.getElementById(\"about-btn\");\n\n(0,_Modules_home_js__WEBPACK_IMPORTED_MODULE_0__.homeContent)();\n\nhome.addEventListener(\"click\",()=>{\n    (0,_Modules_reviews_js__WEBPACK_IMPORTED_MODULE_2__.removeReviewContent)();\n    (0,_Modules_about_js__WEBPACK_IMPORTED_MODULE_1__.removeAboutContent)();\n    const id = document.getElementById(\"intro-content\");\n    if(id != null) return;\n    (0,_Modules_home_js__WEBPACK_IMPORTED_MODULE_0__.homeContent)();\n});\n\nreview.addEventListener(\"click\",()=>{\n    (0,_Modules_about_js__WEBPACK_IMPORTED_MODULE_1__.removeAboutContent)();\n    (0,_Modules_home_js__WEBPACK_IMPORTED_MODULE_0__.removeIntroContent)();\n    const id = document.getElementById(\"reviews\");\n    if(id != null) return;\n    (0,_Modules_reviews_js__WEBPACK_IMPORTED_MODULE_2__.reviewsContent)();\n});\n\nabout.addEventListener(\"click\",()=>{\n    (0,_Modules_reviews_js__WEBPACK_IMPORTED_MODULE_2__.removeReviewContent)();\n    (0,_Modules_home_js__WEBPACK_IMPORTED_MODULE_0__.removeIntroContent)();\n    const id = document.getElementById(\"about\");\n    if(id != null) return;\n    (0,_Modules_about_js__WEBPACK_IMPORTED_MODULE_1__.aboutContent)()\n\n});\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;