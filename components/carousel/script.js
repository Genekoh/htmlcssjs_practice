"use-strict";

const track = document.querySelector(".track");
const slides = Array.from(track.children);
const previousButton = document.querySelector(".previous-btn");
const nextButton = document.querySelector(".next-btn");

const dotNav = document.querySelector(".dot-nav");
let dotNavButtons = [];

let current = 0;

track.style.width = `${slides.length * 100}%`;

slides.forEach((_, i) => {
  const dotNavButton = document.createElement("button");
  dotNavButton.classList.add("dot-nav-btn");
  if (i === current) {
    dotNavButton.classList.add("dot-nav-btn-active");
  }

  dotNav.append(dotNavButton);
  dotNavButtons.push(dotNavButton);

  dotNavButton.addEventListener("click", () => {
    moveSlide(i);
  });
});

function moveSlide(to) {
  if (to >= slides.length || to < 0) return;

  track.style.transform = `translateX(calc(-${
    (to / slides.length) * 100
  }% - 1px))`;

  dotNavButtons[current].classList.remove("dot-nav-btn-active");
  dotNavButtons[to].classList.add("dot-nav-btn-active");

  current = to;
}

function movePrevious() {
  const prev = current - 1;
  if (prev < 0) return;

  moveSlide(prev);
}

function moveNext() {
  const next = current + 1;
  if (next >= slides.length) {
    return;
  }

  moveSlide(next);
}

previousButton.addEventListener("click", movePrevious);
nextButton.addEventListener("click", moveNext);

document.addEventListener("keydown", (ev) => {
  if (ev.key === "ArrowLeft") {
    movePrevious();
  } else if (ev.key === "ArrowRight") {
    moveNext();
  }
});
