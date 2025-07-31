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
    "./img/skagen.jpg"       
];
const container = document.getElementById("container");

function renderImages() {
    const container = document.getElementById("container");    
    for (let i=0; i<images.length; i++) {
        container.innerHTML+=getImagesHtml(i);
    }    
}

function getImagesHtml (i) {
    return `<img class="photos" src="${images[i]}">`
}


function init() {
    renderImages();
}