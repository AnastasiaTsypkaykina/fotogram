const images = [
    {src: "./img/aalborg.jpg", alt: "aalborg"},
    {src: "./img/aarhus.jpg", alt: "aarhus"},
    {src: "./img/copenhagen1.jpg", alt: "copenhagen"},
    {src: "./img/copenhagen2.jpg", alt: "copenhagen"},
    {src: "./img/esbjerg.jpg", alt: "esbjerg"},
    {src: "./img/kolding.jpg", alt: "kolding"},
    {src: "./img/odense.jpg", alt: "odense"},
    {src: "./img/randers.jpg", alt: "randers"},
    {src: "./img/faaborg.jpg", alt: "faaborg"},  
    {src: "./img/faborg.jpg", alt: "faborg"},   
    {src: "./img/ribe.jpg", alt: "ribe"},   
    {src: "./img/skagen.jpg", alt: "skagen"}       
];
const container = document.getElementById("container");

function renderImages() {
    document.getElementById('container').innerHTML = images
    .map((img, index) => `<img src="${img.src}" alt="${img.alt}" class="photos">`);
}


function init() {
    renderImages();
}