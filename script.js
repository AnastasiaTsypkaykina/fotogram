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
function renderImages() {
  const container = document.getElementById("container");
  for (let i = 0; i < images.length; i++) {
    container.innerHTML += getImagesHtml(i);
  }
}

function getImagesHtml(i) {
  return `<img onclick="createDialogContent(${i})" id="${i}" class="photos" src="${images[i]}">`;
}

function init() {
  renderImages();
}

function toggleOverlay() {
  let overlayRef = document.getElementById("overlay");
  overlayRef.classList.toggle("d_none");
}

function createDialogContent(i) {
  toggleOverlay();
  let dialogRef = document.getElementById("overlay-dialog");
  dialogRef.innerHTML = getImageInDialogHtml(i);
}
function createDialogNoToggle(i) {
  let dialogRef = document.getElementById("overlay-dialog");
  dialogRef.innerHTML = getImageInDialogHtml(i);
}

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
        <button onclick="openPrevFoto(${i})" class="dialog-arrow left-arrow" id="prev"><img src="./img/arrow-left.svg" alt="Zurück"></button>
        <span class="dialog-counter">${i + 1}/${images.length}</span>
        <button onclick="openNextFoto(${i})" class="dialog-arrow right-arrow" id="next"><img src="./img/arrow-right.svg" alt="Weiter"></button>
    </div>        
       "`;
}

function openPrevFoto(i) {
  if (i == 0) {
    createDialogNoToggle(images.length - 1);
  } else {
    createDialogNoToggle(i - 1);
  }
}

function openNextFoto(i) {
  if (i == images.length - 1) {
    createDialogNoToggle(0);
  } else {
    createDialogNoToggle(i + 1);
  }
}
