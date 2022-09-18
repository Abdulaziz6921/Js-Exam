// Main pages' JS _______________
let menu = document.querySelector("#menu");
let body = document.querySelector("#body");
menu.addEventListener("click", () => {
  let li = document.querySelector(".list-items");
  li.style.display = "flex";

  menu.style.backgroundColor = "#08AB4B";
  menu.style.color = "white";
});

body.addEventListener("click", () => {
  let li = document.querySelector(".list-items");
  li.style.display = "none";

  menu.style.backgroundColor = "white";
  menu.style.color = "black";
});
