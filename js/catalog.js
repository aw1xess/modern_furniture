const loadNineButton = document.querySelector(".loadNine");
const loadAllButton = document.querySelector(".loadAll");
const cards = document.querySelector(".cards");
const cardList = document.getElementsByClassName("catalog__card1");
let temp = 0;
const chairs = {
  "Article Armchair": "259 €",
  "Loft Armchair": "219 €",
  "Grey Armchair": "329 €",
  "Modern Armchair": "439 €",
  "Gran Armchair": "689 €",
  "Short Armchair": "279 €",
  "Lather Armchair": "559 €",
  "Light Armchair": "449 €",
  "Grey Armchair": "329 €",
};
let keys = Object.keys(chairs);
keys.push("Grey Armchair");

function loadNineCards() {
  for (let i = temp; i < temp + 9; i += 3) {
    const row = document.createElement("div");
    row.classList.add("row");
    cards.appendChild(row);

    for (let j = i; j < i + 3; j++) {
      const colMd4 = document.createElement("div");
      const card = document.createElement("div");
      const cardImg = document.createElement("div");
      const img = document.createElement("img");
      const cardHeader = document.createElement("div");
      const cardName = document.createElement("h3");
      const cardPrice = document.createElement("p");

      cardName.textContent = keys[j % 9];
      cardPrice.textContent = chairs[keys[j % 9]];

      colMd4.classList.add("col-md-4");
      card.classList.add("catalog__card1");
      cardImg.classList.add("catalog__card1__img");
      cardHeader.classList.add("catalog__card1__header");

      img.setAttribute("src", `/img/catalog/card${j + 1}_chair.png`);
      row.appendChild(colMd4);
      colMd4.appendChild(card);
      card.appendChild(cardImg);
      cardImg.appendChild(img);
      card.appendChild(cardHeader);
      cardHeader.appendChild(cardName);
      cardHeader.appendChild(cardPrice);
    }
  }
  temp += 9;

  if (temp === 18) {
    loadNineButton.setAttribute("disabled", true);
    loadAllButton.setAttribute("disabled", true);
    return;
  }
}

function loadAllCards() {
  for (let i = temp; i < 18 - temp; i += 3) {
    const row = document.createElement("div");
    row.classList.add("row");
    cards.appendChild(row);

    for (let j = i; j < i + 3; j++) {
      const colMd4 = document.createElement("div");
      const card = document.createElement("div");
      const cardImg = document.createElement("div");
      const img = document.createElement("img");
      const cardHeader = document.createElement("div");
      const cardName = document.createElement("h3");
      const cardPrice = document.createElement("p");

      cardName.textContent = keys[j % 9];
      cardPrice.textContent = chairs[keys[j % 9]];

      colMd4.classList.add("col-md-4");
      card.classList.add("catalog__card1");
      cardImg.classList.add("catalog__card1__img");
      cardHeader.classList.add("catalog__card1__header");

      img.setAttribute("src", `/img/catalog/card${j + 1}_chair.png`);
      row.appendChild(colMd4);
      colMd4.appendChild(card);
      card.appendChild(cardImg);
      cardImg.appendChild(img);
      card.appendChild(cardHeader);
      cardHeader.appendChild(cardName);
      cardHeader.appendChild(cardPrice);
    }
  }
  loadAllButton.setAttribute("disabled", true);
  loadNineButton.setAttribute("disabled", true);
  temp = 18;
}

loadNineButton.addEventListener("click", loadNineCards);
loadAllButton.addEventListener("click", loadAllCards);

for (card of cardList) {
  card.addEventListener("click", () => {
    window.location.href = "../card.html";
  });
}

console.log(cardList);
