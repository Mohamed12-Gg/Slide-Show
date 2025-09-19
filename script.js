let images = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "/images/image4.jpg"
]; 
let current = 0;
let interval;

function showImage() {
    let img = new Image();
    img.src = images[current];
    img.onload = function() {
        document.getElementById('imageBox').style.backgroundImage = "url('" + img.src + "')";
    };
}

function play() {
    interval = setInterval(() => {
        current = (current + 1) % images.length;
        showImage();
    }, 1000);
}

function stop() {
    clearInterval(interval);
}

function next() {
    current = (current + 1) % images.length;
    showImage();
}

function prev() {
    current = (current - 1 + images.length) % images.length;
    showImage();
}


showImage();