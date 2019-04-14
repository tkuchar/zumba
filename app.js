const open_btn = document.getElementById("open");
const modal = document.getElementById("modal");
const close = document.getElementById("close")
const grid = document.querySelector(".gallery");
const footer = document.querySelector(".footer__text");
const medals = document.querySelectorAll('.medals');
const modalTitle = document.querySelector('.modal-content__title');
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

function scrolly() {
  medals.forEach(element => {
     if((window.innerHeight > 800 && scrollY > 850) || (window.innerHeight < 700 && scrollY > 650)) {
       element.style.transform = "scale(1.6)";
       modalTitle.style.transform = 'scaleY(1) rotateX(0deg) skew(-20deg)';
     }
    else {
      element.style.transform = "scale(0)";
   }
  });
}


let date = new Date();
footer.innerHTML = `&copy; Marilyn Kuchar ${date.getFullYear()}`;