const photos = document.querySelector(".photos");
const button = document.querySelector(".load-button");
const body = document.querySelector(".body");
const burger = document.querySelector(".burger");
const menu = document.querySelector(".list");

const imagesSrc = [
  "./img/gallery_smallphoto1.png",
  "./img/gallery_smallphoto2.png",
  "./img/gallery_smallphoto3.png",
  "./img/gallery_largephoto1.png",
  "./img/gallery_largephoto2.png",
  "./img/gallery/gallery_largephoto3.png",
  "./img/gallery/gallery_largephoto4.png",
  "./img/gallery/gallery_largephoto5.png",
  "./img/gallery/gallery_smallphoto4.png",
];
let buttonClicked = 0;

function addImages() {
  let row = document.createElement("div");
  row.className = "row";
  switch (buttonClicked) {
    case 0:
      for (let i = 0; i < 3; i++) {
        let divCol = document.createElement("div");
        divCol.className = "col-md-4";
        let img = document.createElement("img");
        img.setAttribute("src", imagesSrc[i]);
        divCol.appendChild(img);
        row.appendChild(divCol);
        photos.appendChild(row);
      }

      for (let i = 3; i < 5; i++) {
        let divCol = document.createElement("div");
        divCol.className = "col-md-6";
        let img = document.createElement("img");
        img.setAttribute("src", imagesSrc[i]);
        divCol.appendChild(img);
        row.appendChild(divCol);
        photos.appendChild(row);
      }
      break;
    case 1:
      let divCol1 = document.createElement("div");
      divCol1.className = "col-md-4";
      let img1 = document.createElement("img");
      img1.setAttribute("src", imagesSrc[5]);
      divCol1.appendChild(img1);
      row.appendChild(divCol1);

      let divCol2 = document.createElement("div");
      divCol2.classList.add("offset-md-1", "col-md-7", "large");
      let img2 = document.createElement("img");
      img2.setAttribute("src", imagesSrc[6]);
      divCol2.appendChild(img2);
      row.appendChild(divCol2);

      let divCol3 = document.createElement("div");
      divCol3.className = "col-md-7";
      let img3 = document.createElement("img");
      img3.setAttribute("src", imagesSrc[7]);
      divCol3.appendChild(img3);
      row.appendChild(divCol3);

      let divCol4 = document.createElement("div");
      divCol4.className = "col-md-5";
      let img4 = document.createElement("img");
      img4.setAttribute("src", imagesSrc[8]);
      divCol4.appendChild(img4);
      row.appendChild(divCol4);
      photos.appendChild(row);

      button.setAttribute("disabled", true);
      break;
  }

  buttonClicked++;
}

function openMenu() {
  menu.classList.toggle("visible");
  body.classList.toggle("lock");
  burger.childNodes.forEach((child) => {
    child.classList.toggle("active");
  });
}

button.addEventListener("click", addImages);
burger.addEventListener("click", openMenu);
