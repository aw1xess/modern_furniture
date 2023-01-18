const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper1 = new Swiper(".smallSwiper", {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 22,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const body = document.querySelector(".body");
const dark = document.querySelector(".dark");
const minusButton = document.querySelector(".minus");
const plusButton = document.querySelector(".plus");
const addButton = document.querySelector(".add");
const bucket = document.querySelector(".bucket");
const cart = document.querySelector(".cart");
const quantityCounter = document.querySelector(".quantity_counter");
const closeButton = document.querySelector(".close");
const price = document.querySelector(".price");
const cartItemName = document.querySelector(".name");
const cartList = document.querySelector(".cart-list");
const bucketPriceHolder = document.querySelector(".bucket_price_holder");
const deleteAllButton = document.querySelector(".delete-all");
let cartItemDelete = document.createElement("p");
cartItemDelete.classList.add("delete");
cartItemDelete.textContent = "Delete";
let bucketPrice = 0;
let counter = 1;
let cartItemDeleteList = document.querySelectorAll(".delete");

plusButton.addEventListener("click", () => {
  counter++;
  minusButton.removeAttribute("disabled", true);
  quantityCounter.textContent = counter;
});

minusButton.addEventListener("click", () => {
  if (counter === 1) {
    minusButton.setAttribute("disabled", true);
  } else {
    counter--;
    quantityCounter.textContent = counter;
  }
});

function openCart() {
  dark.classList.add("opened");
  body.classList.add("lock");
}

function closeCart(e) {
  if (e.target.classList.contains("dark") || e.target.classList.contains("x")) {
    dark.classList.remove("opened");
    body.classList.remove("lock");
  }
}

function showBucketPrice() {
  bucketPriceHolder.textContent = bucketPrice + " €";
}

function addToCart() {
  for (let i = 0; i < counter; i++) {
    let cartItem = document.createElement("div");
    let cartItemH3 = document.createElement("h3");
    let cartItemP1 = document.createElement("p");
    let cartItemDelete = document.createElement("p");

    cartItem.classList.add("cart-list-item");
    cartItemDelete.classList.add("delete");
    cartItemH3.textContent = cartItemName.textContent;
    cartItemP1.textContent = price.textContent;
    cartItemDelete.textContent = "Delete";

    cartList.appendChild(cartItem);
    cartItem.appendChild(cartItemH3);
    cartItem.appendChild(cartItemP1);
    cartItem.appendChild(cartItemDelete);
    bucketPrice += Number(price.textContent.slice(0, -2));
    showBucketPrice();
    selectDeleteItems();
  }
}

function deleteFromCart(e) {
  cartList.removeChild(e.target.parentElement);
  bucketPrice -= Number(price.textContent.slice(0, -2));
  selectDeleteItems();
  showBucketPrice();
}

function selectDeleteItems() {
  cartItemDeleteList = document.querySelectorAll(".delete");
  cartItemDeleteList.forEach((element) => {
    element.addEventListener("click", deleteFromCart);
  });
}

function DeleteAllItems() {
  cartItemDeleteList = document.querySelectorAll(".delete");
  cartItemDeleteList.forEach((element) => {
    cartList.removeChild(element.parentElement);
    bucketPrice -= Number(price.textContent.slice(0, -2));
    selectDeleteItems();
    showBucketPrice();
  });
  console.log(cartItemDeleteList);
}

bucket.addEventListener("click", openCart);
dark.addEventListener("click", closeCart);

addButton.addEventListener("click", addToCart);

cartItemDeleteList.forEach((element) => {
  element.addEventListener("click", deleteFromCart);
});

deleteAllButton.addEventListener("click", DeleteAllItems);
