var form_id = document.getElementById("login_form");
form_id.addEventListener("submit",validateFormInputs);

function validateEmail(email) {
    if (email == null || email == "") {
      return false;
    }
    let atSymbolPos = email.indexOf("@");
    if (atSymbolPos < 1) {
      return false;
    }
    let dotPos = email.indexOf(".");
    if (dotPos <= atSymbolPos + 2) {
      return false;
    }
    if (dotPos === email.length - 1) {
      return false;
    }
    return true;
  }
  function validateEmailWithRegex(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !!email && typeof email === "string" && email.match(emailRegex);
  }
  function checkInputEmail(email) {
    let isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      document.getElementById("emailHelp").innerText = "Invalid email!";
      return false;
    }
    if(document.getElementById("emailHelp")!= undefined) {
      document.getElementById("emailHelp").remove();
    }
      alert("Valid email!");
      return true;  
    
  }
  function escapeHtml(unsafe) {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function validateFormInputs(e) {
    let email = document.getElementById("email").value;
    // input sanitization
    email = email.trim();
    email = escapeHtml(email);
    var val_cp = captureMatch();
    // input validation  
    //return checkInputEmail(email);
    var val = checkInputEmail(email);
    if(val && val_cp) {
      console.log(e.currentTarget.toString());
      e.currentTarget.submit();
    }else{
      e.preventDefault();
    }      
  }

  function captureMatch(){
    let captcha = "Q23f45";
    let usercaptcha = document.getElementById("usercaptcha").value;
    if(captcha !== usercaptcha){
      alert("Captcha is wrong");
      return false;
    }
    return true;
  }