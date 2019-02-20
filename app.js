const open_btn = document.getElementById("open");
const modal = document.getElementById("modal");
const close = document.getElementById("close")
const grid = document.querySelector(".gallery");
// const imgCollect = document.getElementsByClassName("gallery__item");
// const imgArr = Array.from(imgCollect);

// https://github.com/aholachek/animate-css-grid
if(error === false) {
  animateCSSGrid.wrapGrid(grid, {duration : 300});
}

/*imgArr.forEach(function(img) {
  img.addEventListener('click', function() {
    img.classList.toggle("view-center");
  })
});*/

// Event delegation for gallery

const gridAnimate = (e) => {
  if (e.target && e.target.nodeName === 'IMG') {
    e.target.parentNode.classList.toggle("view-center");
  }
}

document.querySelector('.gallery').addEventListener('click', gridAnimate);

open_btn.addEventListener("click", function() {
  modal.style.transition = "all .5s ease-in";
  modal.style.visibility = "visible";
  modal.style.opacity = "1";
  modal.style.transform = "translateX(0)";
});

close.addEventListener("click", function() {
  modal.style.opacity = "0";
  modal.style.transform = "translateX(-100%)";
});