"use-strict";

document.addEventListener("mousedown", (ev) => {
  const element = ev.target;
  element.closest(".item")?.classList.toggle("open");
});
