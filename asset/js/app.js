document.addEventListener("DOMContentLoaded",()=>{

const back=document.getElementById("backTop");

window.addEventListener("scroll",()=>{

if(back){

back.style.display=window.scrollY>300?"block":"none";

}

const items=document.querySelectorAll(".fade-up");

items.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<window.innerHeight-100){

item.classList.add("show");

}

});

});

if(back){

back.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

});
