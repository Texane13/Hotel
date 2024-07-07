// ============================
//    Menu cart Animation Start
// ============================

//selecting menu image place paste
imageClick = document.querySelector(".image_click");
placePaste = document.querySelector(".image_click .image-content");

//selecting menu image
menuImage = document.querySelectorAll(".menu .contenu .box .imbox img");

//selecting remove button from image_click
removeImage = document.querySelector(".close-image-area");

//action while menu image click
Array.from(menuImage).forEach(function (menuImg) {
  menuImg.addEventListener("click", function () {
    imageClick.classList.add("active-image");
    newMenuImage = document.createElement("img");
    newMenuImage.src = menuImg.src;
    newMenuImage.style.height = "80vh";
    placePaste.appendChild(newMenuImage);
  });
});

//action while close image area click
removeImage.addEventListener("click", function () {
  imageClick.classList.remove("active-image");
  placePaste.removeChild(newMenuImage);
});

// ============================
//    Menu cart Animation End
// ============================
