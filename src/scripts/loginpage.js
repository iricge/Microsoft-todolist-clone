const firstLoginBtn = document.querySelector(".FirstTimeLogin");

const userNameEmail = document.querySelector(".user-name-email-section");
const userProfilePictureSection = document.querySelector(".profile-picture-box");
let formBox = document.querySelector(".firstlogin-form");
let userNameInput = document.querySelector(".username-input");
let userEmailInput = document.querySelector(".useremail-input");
let userNameHolder = document.querySelector(".username-holder");
let userEmailHolder = document.querySelector(".useremail-holder");
let userInputSubmit = document.querySelector(".userInput-submit")

let userInformationsArray = []

function isUserLoginDataSaver(userLoginState){
  let isUserLogin = userLoginState
  let isUserLoginData = localStorage.setItem("UserLoginStatus",JSON.stringify(isUserLogin));
  console.log(JSON.parse(localStorage.getItem("UserLoginStatus")))
}

firstLoginBtn.addEventListener("click",()=>{
  formBox.classList.toggle("firstloginactive")
})

userInputSubmit.addEventListener("click", ()=>{
  
  isUserLoginDataSaver(true);

  if(userNameInput.value){
    let newUserInforamtion = {
      userName: userNameInput.value,
      userEmail: userEmailInput.value
    }
    userInformationsArray.push(newUserInforamtion) 
    var userInfoSaveLocalStorage = JSON.parse(localStorage.getItem("userProfileInfo"))
    userInfoLocalStorageSave(userInformationsArray)

    location.reload()
  
  } else {
    return alert("please fill requirment")
  }
},{once: true})

function userInfoLocalStorageSave(savingData){
  localStorage.setItem("userProfileInfo",JSON.stringify(userInformationsArray));
}

function userInfoDisplay(){ 
  let isUserLoginLocalStorage = JSON.parse(localStorage.getItem("UserLoginStatus"));
   
  if (isUserLoginLocalStorage){
    firstLoginBtn.style.display = "none";
    userNameEmail.style.display = "flex";
    userProfilePictureSection.style.display = "flex";
    userInfoGetterforls()
  } else {
    firstLoginBtn.style.display = "flex";
    userNameEmail.style.display = "none";
    userProfilePictureSection.style.display = "none";
  }
}

function userInfoGetterforls(){
  let infoReciver = JSON.parse(localStorage.getItem("userProfileInfo"))
  dataLoader(infoReciver)
}
function dataLoader(info) {
  info.forEach(newInfo => {
    userNameHolder.innerText = newInfo.userName;
    userEmailHolder.innerText = newInfo.userEmail;
  });
}
window.addEventListener("load", userInfoDisplay(userInformationsArray))

