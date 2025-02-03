function popup() {
    console.log("press");
    let loginForm = document.getElementById("container2");
    if (loginForm.style.display === "none") {
      loginForm.style.display = "flex"; // Show the form
      // } else {
      //   loginForm.style.display = "none"; // Hide the form
      // }
    }
  }
  let username = document.getElementById("username");
let password = document.getElementById("password");

let validUsername = "admin";
let validPassword = "admin@12345";

function validatation() {
  if (username.value === "") {
    alert("username cannot be empty");
    return false;
  }
  if (password.value === "") {
    alert("password cannot be empty");
    return false;
  }

  if (username.value === validUsername && password.value === validPassword) {
    // const loginDiv=document.getElementById("container2");
    // loginDiv.style.display = "none";
    // window.open("../addBook.html");
    return true;
  } else {
    alert("login failed");
    username.value="";
    password.value="";
    return false;
  }
}
const loginButton = document.getElementById('button');
const manageOption = document.getElementById('manage');
 
// Simulated login state
let isAdmin = false;

loginButton.addEventListener('click' , function(event) {
  event.preventDefault();
  if(isAdmin=validatation()){
    alert("login successful");
    // Simulate admin login
    isAdmin = true;
   // loginButton.textContent = 'Logout';
    manageOption.classList.remove('hidden');
    const loginDiv=document.getElementById("container2");
    loginDiv.style.display = "none";

  }
  else{
    // Simulate logout
    isAdmin = false;
   // loginButton.textContent = 'Login';
    manageOption.classList.add('hidden');

  }
});
const openBook=document.getElementById('manage');
openBook.addEventListener('click', () =>{
  window.location.href= "./addBook.html"

});
function sub(){ 
  alert('Message Sent')
}