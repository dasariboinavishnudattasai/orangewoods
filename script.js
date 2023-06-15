// JavaScript Code

// Get references to all the image elements in the image gallery
var imageElements = document.querySelectorAll('.image-gallery img');

// Add a CSS class to each image to apply the fade-in effect
imageElements.forEach(function(image) {
    image.classList.add('fade-in');
});
function playR2D2Sound() {
    var r2d2Sound = document.getElementById('r2d2-sound');
    r2d2Sound.play();
  }