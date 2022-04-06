
let $ = document;
const firstLoginBtn = $.querySelector(".FirstTimeLogin");

const userNameEmail = $.querySelector(".user-name-email-section");
const userProfilePictureSection = $.querySelector(".profile-picture-box");
let formBox = $.querySelector(".firstlogin-form");

let userNameHolder = $.querySelector(".username-holder");
let userEmailHolder = $.querySelector(".useremail-holder");
let userNameInput = $.querySelector(".username-input");
let userEmailInput = $.querySelector(".useremail-input");
let userInputSubmit = $.querySelector(".userInput-submit");

let isUserLoginJson = JSON.stringify(isUserLogin) 
let isUserLoginData = localStorage.setItem("UserLoginStatus", isUserLoginJson);

window.addEventListener("load", ()=>{
  var isUserLogin =  false;
  
  let isUserLoginLocalStorage = JSON.parse(localStorage.getItem("UserLoginStatus"));

  if (isUserLoginLocalStorage){
    firstLoginBtn.style.display = "none";
    userNameEmail.style.display = "flex";
    userProfilePictureSection.style.display = "flex";
  } else {
    firstLoginBtn.style.display = "flex";
    userNameEmail.style.display = "none";
    userProfilePictureSection.style.display = "none";
  }
})
firstLoginBtn.addEventListener("click",()=>{
  formBox.classList.toggle("firstloginactive")
})
userInputSubmit.addEventListener("click", ()=>{
  
  let newUserInforamtion = {
    userName: userNameInput.value,
    userEmail: userEmailInput.value
  }

  let newUserInforamtionJson = JSON.stringify(newUserInforamtion);
  let newUserInfoLocalStorage = localStorage.setItem("userProfileInfo", newUserInforamtionJson);
  let newUserInfoJsonConvert = JSON.parse(localStorage.getItem("userProfileInfo"))
  
  localStorage.getItem("UserLoginStatus", isUserLogin = true)

  location.reload()

  console.log(newUserInforamtion);
  console.log(newUserInfoJsonConvert);
  
})
