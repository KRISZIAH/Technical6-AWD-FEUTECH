const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


function validation(){
  if(document.Formfill.Username.value==""){
      document.getElementById("result").innerHTML="Enter Username*";
      return false;
  }
  else if(document.Formfill.Username.value.length<6){
      document.getElementById("result").innerHTML="Atleast 6 characters required*";
      return false;
  }
  else if(document.Formfill.Email.value==""){
      document.getElementById("result").innerHTML="Enter your Email*";
      return false;
  }
  else if(document.Formfill.Password.value==""){
      document.getElementById("result").innerHTML="Enter your Password*";
      return false;
  }
  else if(document.Formfill.CPassword.value !== document.Formfill.Password.value){
      document.getElementById("result").innerHTML="Password doesn't match*";
      return false;
  }
  else if(document.Formfill.Password.value == document.Formfill.CPassword.value){
      popup.classList.add("open-slide");
      return false;
  }
 
}

var popup = document.getElementById('popup');

function Close(){
  popup.classList.remove("open-slide");
}


