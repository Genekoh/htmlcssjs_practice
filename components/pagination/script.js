const previousButton = document.querySelector(".nav-previous");
const nextButton = document.querySelector(".nav-next");
const pageButtons = Array.from(document.querySelectorAll(".page-btn"));

let current = pageButtons.findIndex((el) =>
  el.classList.contains("page-btn-current")
);
if (current === -1) current = 0;

function movePage(to) {
  if (to >= pageButtons.length || to < 0) return;

  pageButtons[current].classList.remove("page-btn-current");
  pageButtons[to].classList.add("page-btn-current");

  current = to;
}

function nextPage() {
  const next = current + 1;
  if (next >= pageButtons.length) return;

  movePage(next);
}

function previousPage() {
  const prev = current - 1;
  if (prev < 0) return;

  movePage(prev);
}

pageButtons.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    movePage(i);
  });
});

nextButton.addEventListener("click", nextPage);
previousButton.addEventListener("click", previousPage);
