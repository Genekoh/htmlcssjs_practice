const track = document.querySelector(".track");
const slides = Array.from(track.children);
const previousButton = document.querySelector(".previous-btn");
const nextButton = document.querySelector(".next-btn");

let current = 0;

track.style.width = `${slides.length * 100}%`;

const moveSlide = (to) => {
  if (to >= slides.length || to < 0) return;

  track.style.transform = `translateX(calc(-${
    (to / slides.length) * 100
  }% - 1px))`;
};

previousButton.addEventListener("click", () => {
  const prev = current - 1;
  if (prev < 0) return;

  moveSlide(prev);
  current = prev;
});

nextButton.addEventListener("click", () => {
  const next = current + 1;
  if (next >= slides.length) return;

  moveSlide(next);
  current = next;
});
