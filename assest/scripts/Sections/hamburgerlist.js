let $ = document;
const listSection = $.querySelector(".list-section");
const hamBtn = $.querySelector(".listmenu-hambtn");
const hamBackBtn = $.querySelector(".listmenu-hambackbtn");
const blackOpacity = $.querySelector(".blakcscreen-overlay");
hamBtn.addEventListener("click", ()=>{
  listSection.classList.add("listmenu-hamburgeractive");
  // to make the list section appear
  hamBackBtn.style.display = "inline-block";
  blackOpacity.style.display = "block";
})
hamBackBtn.addEventListener("click", ()=>{
  listSection.classList.remove("listmenu-hamburgeractive");
  listSection.style.left = "-100%"
  // to make the list section go left and out of the screen
  hamBtn.style.display = "inline-block"
  blackOpacity.style.display = "none" 
})