    // ----- Envio de Mail Formulario ---------



      // User ID
      // user_id
      // Access Token
      // random_access-token

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
        emptyerror();
      } else {
        
        sendmail(name.value, email.value, asunto.value, msg.value);
        success();
        
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
  
  function emptyerror() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Los campos no pueden estar vacios!",
    });
  }
  
  function error() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Algo salio mal!",
    });
  }
  
  function success() {
    Swal.fire({
      icon: "success",
      title: "Enviado",
      text: "Su mensaje ha sido enviado con exito",
    });
  }
  
  