// For hamburger menu and styles

let $ = document;
const listSection = $.querySelector(".list-section");
const hamBtn = $.querySelector(".listmenu-hambtn");
const hamBackBtn = $.querySelector(".listmenu-hambackbtn");
const blackOpacity = $.querySelector(".blakcscreen");

// Identify the elements from DOM

hamBtn.addEventListener("click", ()=>{
  listSection.style.display = "flex"
  // to make the display flex and fix all the elements
  listSection.style.position = "fixed";
  // to make the list section stand on top of the task section
  listSection.style.left = 0
  // to make the list section appear
  hamBtn.style.display = "none"
  // make the button on task section dispeare
  hamBackBtn.style.display = "inline-block"
  // make the list section close button
  blackOpacity.style.display = "block"
  // making the task section dark
})

// button in the task section for opening the list section

hamBackBtn.addEventListener("click", ()=>{
  listSection.style.display = "none"
  // to make the display none and hide the list section
  listSection.style.left = "-100%"
  // to make the list section go left and out of the screen
  hamBtn.style.display = "inline-block"
  hamBackBtn.style.display = "none"
  blackOpacity.style.display = "none" 
})