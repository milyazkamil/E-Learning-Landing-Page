const girlPhoto = document.getElementById("girl-photo");

girlPhoto.addEventListener("mouseover", () => {
  girlPhoto.style.opacity = "0";
  setTimeout(() => {
    girlPhoto.style.opacity = "1";
    girlPhoto.src = "./img/2.png";
  }, 500);
});

girlPhoto.addEventListener("mouseout", () => {
  girlPhoto.style.opacity = "0";
  setTimeout(() => {
    girlPhoto.style.opacity = "1";
    girlPhoto.src = "./img/1.png";
  }, 500);
});
