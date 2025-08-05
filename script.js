const images = [
  "./img/aalborg.jpg",
  "./img/aarhus.jpg",
  "./img/copenhagen1.jpg",
  "./img/copenhagen2.jpg",
  "./img/esbjerg.jpg",
  "./img/kolding.jpg",
  "./img/odense.jpg",
  "./img/randers.jpg",
  "./img/faaborg.jpg",
  "./img/faborg.jpg",
  "./img/ribe.jpg",
  "./img/skagen.jpg",
];

const description = [
  "Aalborg",
  "Aarhus",
  "Copenhagen",
  "Copenhagen",
  "Esbjerg",
  "Kolding",
  "Odense",
  "Randers",
  "Faaborg",
  "Faaborg",
  "Ribe",
  "Skagen",
];
let booleanTrue = true;
let booleanFalse = false;

function renderImages() {
  const container = document.getElementById("container");
  for (let i = 0; i < images.length; i++) {
    container.innerHTML += getImagesHtml(i);
  }
}

function getImagesHtml(i) {
  return `<img onclick="createDialogContent(${i}, ${booleanTrue})" id="${i}" class="photos" src="${images[i]}">`;
}

function init() {
  renderImages();
}

function toggleOverlay() {
  let overlayRef = document.getElementById("overlay");
  overlayRef.classList.toggle("d_none");
}

function createDialogContent(i, b) {
  if (b == true) {
    toggleOverlay();
    let dialogRef = document.getElementById("overlay-dialog");
    dialogRef.innerHTML = getImageInDialogHtml(i);
  }
  let dialogRef = document.getElementById("overlay-dialog");
  dialogRef.innerHTML = getImageInDialogHtml(i);
}

// function createDialogNoToggle(i) {
//   let dialogRef = document.getElementById("overlay-dialog");
//   dialogRef.innerHTML = getImageInDialogHtml(i);
// }

function bubblingDialog(event) {
  event.stopPropagation();
}

function getImageInDialogHtml(i) {
  return `
    <div onclick="bubblingDialog(event)" class="dialog-img-wrapper">
        <h2 id="title" class="title">${description[i]}</h2>
        <span onclick="toggleOverlay()" class="dialog-close">×</span>
        <img src="${images[i]}" class="dialog-img">
    </div>

    <div onclick="bubblingDialog(event)" class="dialog-controls">
        <button onclick="openPrevFoto(${i})" class="dialog-arrow left-arrow" id="prev"><img src="./img/arrow-next.svg" alt="Zurück"></button>
        <span class="dialog-counter">${i + 1}/${images.length}</span>
        <button onclick="openNextFoto(${i})" class="dialog-arrow right-arrow" id="next"><img src="./img/arrow-next.svg" alt="Weiter"></button>
    </div>        
       "`;
}

function openPrevFoto(i) {
  if (i == 0) {
    createDialogContent(images.length - 1, booleanFalse);
  } else {
    createDialogContent(i - 1, booleanFalse);
  }
}

function openNextFoto(i) {
  if (i == images.length - 1) {
    createDialogContent(0, booleanFalse);
  } else {
    createDialogContent(i + 1, booleanFalse);
  }
}
