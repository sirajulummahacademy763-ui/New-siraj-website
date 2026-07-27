
/*
==========================================
Sirajul Ummatul Islamiyah
Main JavaScript File v1.0
==========================================
*/

"use strict";

/* ==========================
   SELECTORS
========================== */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const backToTop = document.getElementById("backToTop");
const header = document.querySelector(".header");

/* ==========================
   MOBILE MENU
========================== */

if(menuBtn && navLinks){

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

}

/* ==========================
   HEADER EFFECT
========================== */

window.addEventListener("scroll",()=>{

if(header){

if(window.scrollY>80){

header.style.boxShadow="0 10px 30px rgba(0,0,0,.15)";

}else{

header.style.boxShadow="0 12px 30px rgba(0,0,0,.08)";

}

}

});

/* ==========================
   BACK TO TOP BUTTON
========================== */

if(backToTop){

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

backToTop.style.display="block";

}else{

backToTop.style.display="none";

}

});

backToTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

/* ==========================
   SMOOTH LINKS
========================== */

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/* ==========================
   FADE ANIMATION
========================== */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade-up");

}

});

},{

threshold:.15

});

document.querySelectorAll(

".card,.course-card,.testimonial,.faq-item,.stat-box"

).forEach(el=>{

observer.observe(el);

});

/* ==========================
   NOTIFICATION SYSTEM
========================== */

function showToast(message,type="success"){

const toast=document.createElement("div");

toast.innerText=message;

toast.style.position="fixed";

toast.style.top="20px";

toast.style.right="20px";

toast.style.padding="15px 25px";

toast.style.borderRadius="8px";

toast.style.color="white";

toast.style.zIndex="99999";

toast.style.fontWeight="600";

toast.style.background=

type==="success"

? "#0B5D3B"

: "#d32f2f";

document.body.appendChild(toast);

setTimeout(()=>{

toast.remove();

},3000);

}

/* ==========================
   LOADING BUTTON
========================== */

function setButtonLoading(button){

button.dataset.original=button.innerHTML;

button.disabled=true;

button.innerHTML="Loading...";

}

function resetButton(button){

button.disabled=false;

button.innerHTML=button.dataset.original;

}

/* ==========================
   EMAIL VALIDATION
========================== */

function isValidEmail(email){

return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}

/* ==========================
   PASSWORD VALIDATION
========================== */

function strongPassword(password){

return password.length>=8;

}

/* ==========================
   EXPORT
========================== */

window.App={

showToast,

setButtonLoading,

resetButton,

isValidEmail,

strongPassword

};

console.log("Sirajul Ummatul Islamiyah Loaded Successfully");
