
/* ==========================================
   Sirajul Ummatul Islamiyah
   Authentication Script
========================================== */

const SCRIPT_URL = "PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";

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
