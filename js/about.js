const body = document.querySelector(".body");
const burger = document.querySelector(".burger");
const menu = document.querySelector(".list");

function openMenu() {
  menu.classList.toggle("visible");
  body.classList.toggle("lock");
  burger.childNodes.forEach((child) => {
    child.classList.toggle("active");
  });
}

burger.addEventListener("click", openMenu);
