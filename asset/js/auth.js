
/* ==========================================
   Sirajul Ummatul Islamiyah
   Authentication Script
========================================== */

const SCRIPT_URL = "   https://script.google.com/macros/s/AKfycbw0VoCQwYj3f0FUe5oo3iZ1qP3HiZYz6q1fsrkXlxwG-apic1bejaNurrFs0IcLzm8i/exec";

const registerForm = document.getElementById("registerForm");
const message = document.getElementById("message");

if (registerForm) {

registerForm.addEventListener("submit", async function(e){

e.preventDefault();

const fullName = document.getElementById("fullName").value.trim();
const email = document.getElementById("email").value.trim();
const phone = document.getElementById("phone").value.trim();
const country = document.getElementById("country").value.trim();
const password = document.getElementById("password").value;
const confirmPassword = document.getElementById("confirmPassword").value;

if(password !== confirmPassword){

message.innerHTML =
"<div class='alert alert-danger'>Passwords do not match.</div>";

return;

}

try{

const response = await fetch(SCRIPT_URL,{

method:"POST",

body:JSON.stringify({

action:"register",

fullName,

email,

phone,

country,

password

})

});

const result = await response.json();

if(result.success){

message.innerHTML =
"<div class='alert alert-success'>Registration successful! Redirecting...</div>";

setTimeout(()=>{

window.location.href="login.html";

},2000);

}else{

message.innerHTML =
"<div class='alert alert-danger'>"+result.message+"</div>";

}

}catch(error){

message.innerHTML =
"<div class='alert alert-danger'>Unable to connect to the server.</div>";

console.error(error);

}

});

}

/* ===========================
LOGIN
=========================== */

const loginForm=document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",async function(e){

e.preventDefault();

const email=document.getElementById("loginEmail").value.trim();

const password=document.getElementById("loginPassword").value;

const message=document.getElementById("loginMessage");

try{

const response=await fetch(SCRIPT_URL,{

method:"POST",

body:JSON.stringify({

action:"login",

email,

password

})

});

const result=await response.json();

if(result.success){

localStorage.setItem("sessionToken",result.token);

localStorage.setItem("studentName",result.fullName);

localStorage.setItem("coins",result.coins);

localStorage.setItem("role",result.role);

message.innerHTML=

"<div class='alert alert-success'>Login Successful...</div>";

setTimeout(()=>{

window.location.href="dashboard.html";

},1500);

}

else{

message.innerHTML=

"<div class='alert alert-danger'>"+result.message+"</div>";

}

}

catch(error){

message.innerHTML=

"<div class='alert alert-danger'>Server Connection Failed.</div>";

}

});

}
