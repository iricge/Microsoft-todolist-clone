
//declearing html elements

const imgDiv = document.querySelector('.profile-picture-box');
const profilePicture = document.querySelector('.profile-picture');
const pfpSelector = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');

//if user hover on img div 

imgDiv.addEventListener('mouseover', function(){
    uploadBtn.style.display = "block";
});

//if we hover out from img div

imgDiv.addEventListener('mouseleave', function(){
    uploadBtn.style.display = "none";
});

//when we choose a photo to upload

pfpSelector.addEventListener('change', function(){
    //this refers to file
    const choosedFile = this.files[0];

    if (choosedFile) {

        const reader = new FileReader(); //FileReader is a predefined function of JS

        reader.addEventListener('load', function(){
          profilePicture.setAttribute('src', reader.result);
        });

        reader.readAsDataURL(choosedFile);
    }
});