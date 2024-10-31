document.addEventListener("DOMContentLoaded", () => {});

const hamburgerMenuClose = document.getElementById("hamburgerMenuClose");
const hamburgerMenu = document.getElementById("hamburgerMenu");
const body = document.getElementById("body");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const logo = document.getElementById("logo");
const search = document.getElementById("search");
let isFalse = false;

hamburgerMenu.addEventListener("click", () => {
  if (!isFalse) {
    const list = document.getElementById("list");
    list.style.left = "0";
    body.style.opacity = "30%";
    body.style.filter = "blur(1.5rem)";
    logo.style.filter = "blur(1.5rem)";
    search.style.filter = "blur(1.5rem)";
    hamburgerMenu.style.left = "280px";
    hamburgerMenu.style.position = "relative";
    line2.style.display = "none";
    if (window.innerWidth <= 493) {
      hamburgerMenu.style.left = "220px";
    } else {
      hamburgerMenu.style.left = "280px";
    }

    setTimeout(() => {
      line1.style.position = "absolute";
    }, 200);
    line1.style.transform = "rotate(50deg)";
    line3.style.transform = "rotate(-50deg)";

    isFalse = true;
  } else {
    list.style.left = "";
    hamburgerMenuClose.style.left = "";
    body.style.opacity = "1";
    hamburgerMenu.style.left = "0px";
    hamburgerMenu.style.position = "relative";
    line1.style.transform = "rotate(0)";
    line3.style.transform = "rotate(0)";
    line1.style.position = "relative";
    body.style.filter = "blur(0)";
    logo.style.filter = "blur(0)";
    search.style.filter = "blur(0)";

    setTimeout(() => {
      line2.style.display = "block";
    }, 400);

    isFalse = false;
  }
});

window.addEventListener("scroll", () => {
  const leftToRight = document.getElementById("leftToRight");
  let value = window.scrollY;

  leftToRight.style.left = value * 0.2 + "px";
});

const slider = document.querySelector(".slider");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});

let slideIndex = 0;

window.onload = function () {
  showSlides();
};

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000);
}

function plusSlides(n) {
  let slides = document.getElementsByClassName("slide");
  slideIndex += n;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
