// Main pages' JS _______________
let menu = document.querySelector("#menu");
let body = document.querySelector("#body");
menu.addEventListener("click", () => {
  // let li = document.querySelector(".list-items");
  // li.style.display = "flex";

  let items = document.querySelector("#litems");
  items.classList.toggle("show");
  menu.classList.toggle("btnBg");
});

body.addEventListener("click", () => {
  let items = document.querySelector("#litems");
  items.classList.toggle("show");
  menu.classList.toggle("btnBg");
});
