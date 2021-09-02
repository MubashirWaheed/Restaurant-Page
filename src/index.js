// import {homeContent, removeIntroContent} from '../src/Modules /home.js';
// import { reviewsContent , removeReviewContent } from '../src/Modules /reviews.js';
// import { aboutContent, removeAboutContent } from '../src/Modules /about.js';
import { homeContent, removeIntroContent } from './Modules /home.js';
import { aboutContent, removeAboutContent } from './Modules /about.js';
import { reviewsContent, removeReviewContent } from './Modules /reviews.js';

import './style.css';
// import '../src/style.css';



const home = document.getElementById("home-btn");
const review = document.getElementById("review-btn");
const about = document.getElementById("about-btn");

homeContent();

home.addEventListener("click",()=>{
    removeReviewContent();
    removeAboutContent();
    const id = document.getElementById("intro-content");
    if(id != null) return;
    homeContent();
});

review.addEventListener("click",()=>{
    removeAboutContent();
    removeIntroContent();
    const id = document.getElementById("reviews");
    if(id != null) return;
    reviewsContent();
});

about.addEventListener("click",()=>{
    removeReviewContent();
    removeIntroContent();
    const id = document.getElementById("about");
    if(id != null) return;
    aboutContent()

});