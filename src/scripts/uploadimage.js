//declearing html elements
const imgDiv = document.querySelector(".profile-picture-box");
const profilePicture = document.querySelector(".profile-picture");
const pfpSelector = document.querySelector("#pfpselector");
const uploadBtn = document.querySelector("#uploadBtn");
imgDiv.addEventListener("mouseover", function () {
    uploadBtn.style.display = "block";
});
imgDiv.addEventListener("mouseleave", function () {
    uploadBtn.style.display = "none";
});
pfpSelector.addEventListener("change", function () {
    const choosedFile = this.files[0];

    if (choosedFile) {
        const reader = new FileReader(); //FileReader is a predefined function of JS
        reader.addEventListener("load", function () {
            localStorage.setItem("Recent-profile-picture", reader.result);
        });
        reader.readAsDataURL(choosedFile);
    }
    location.reload();
});
document.addEventListener("DOMContentLoaded", () => {
    let profilePictureUrl = localStorage.getItem("Recent-profile-picture");

    if (profilePictureUrl) {
        profilePicture.setAttribute("src", profilePictureUrl);
    }
});
