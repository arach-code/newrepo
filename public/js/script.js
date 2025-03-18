document.addEventListener("DOMContentLoaded", function () {
    // Image Slider Functionality
    let currentImageIndex = 0;
    const images = document.querySelectorAll(".image-slider img");
    const totalImages = images.length;
  
    function showNextImage() {
      images[currentImageIndex].classList.remove("active");
      currentImageIndex = (currentImageIndex + 1) % totalImages;
      images[currentImageIndex].classList.add("active");
    }
  
    // Set interval to change images every 3 seconds
    setInterval(showNextImage, 3000);
  
    // Responsive Navigation Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");
  
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("show");
    });
  });
  