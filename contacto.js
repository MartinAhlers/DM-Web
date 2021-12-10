

(function(){
    emailjs.init("user_Pj0A8bDbmSQSZv4afXT80");
 })();



function validate() {

let name = document.querySelector("#nombre");
let email = document.querySelector("#correo");
let asunto = document.querySelector("#asunto");
let msg = document.querySelector("#mensaje");
let btn = document.querySelector("#submit");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (name.value == "" || email.value == "" || msg.value == "" || asunto.value == "") {
    alert("Los campos no pueden estar vacios!");
  } else {
    
    sendmail(name.value, email.value, asunto.value, msg.value);
    alert("Mensaje Enviado");
    clearform();
  }
});
}
validate();

function sendmail(name, email,asunto, msg) {
emailjs.send("service_yhllf6b", "template_mk7jt3f", {
  to_name: name,
  from_name: email,
  subject:asunto,
  message: msg,
});
}



function clearform(){

let name = document.querySelector("#nombre");
let email = document.querySelector("#correo");
let asunto = document.querySelector("#asunto");
let msg = document.querySelector("#mensaje");


name.value ="";
email.value ="";
asunto.value ="";
msg.value ="";


}
