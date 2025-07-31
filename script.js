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
  let imageID=document.getElementById("image-button")
  dialogRef.innerHTML = getImageInDialogHtml(i);
}

function getImageInDialogHtml(i) {
  return `
    <div class="dialog-img-wrapper">
        <img src="${images[i]}" class="dialog-img">
    </div>   "`
}
