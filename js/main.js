$(function () {
  $(".catalog__slider").slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.4,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

const body = document.querySelector(".body");
const burger = document.querySelector(".burger");
const menu = document.querySelector(".list");
const catalogList = document.querySelector(".catalog__list");
const listItems = document.querySelector(".list__items");
const listItem = document.querySelectorAll(".list-item");
const arrowDown = document.querySelector(".arrow-down");

function openMenu() {
  menu.classList.toggle("visible");
  body.classList.toggle("lock");
  burger.childNodes.forEach((child) => {
    child.classList.toggle("active");
  });
}

function openList() {
  listItems.classList.toggle("opened");
}

function selectListItem(e) {
  listItem[0].textContent = e.target.textContent;
  listItem.forEach((element) => {
    element.classList.remove("item-selected");
  });
  e.target.classList.add("item-selected");
}

function hoverListItem(e) {
  e.target.classList.toggle("item-hover");
}

burger.addEventListener("click", openMenu);
catalogList.addEventListener("click", openList);
listItem.forEach((element) => {
  element.addEventListener("click", selectListItem);
});
