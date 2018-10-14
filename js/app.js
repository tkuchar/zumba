const open_btn = document.getElementById("open");
const modal = document.getElementById("modal");
const close = document.getElementById("close")
const imgCollect = document.getElementsByClassName("gallery__item");
const imgArr = Array.from(imgCollect);

imgArr.forEach(function(img) {
  img.addEventListener('click', function() {
    img.classList.toggle("view-center");
  })
});

close.addEventListener("click", function() {
  modal.classList.toggle("open");
});

open_btn.addEventListener("click", function() {
  modal.classList.toggle("open");
});