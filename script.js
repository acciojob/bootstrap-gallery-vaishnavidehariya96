// Wait until the document is ready
document.addEventListener("DOMContentLoaded", function () {
  // Select all images inside the gallery cards
  const images = document.querySelectorAll(".card img");

  // Create a lightbox container dynamically
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  document.body.appendChild(lightbox);

  // Style the lightbox (basic overlay)
  lightbox.style.position = "fixed";
  lightbox.style.top = "0";
  lightbox.style.left = "0";
  lightbox.style.width = "100%";
  lightbox.style.height = "100%";
  lightbox.style.background = "rgba(0,0,0,0.8)";
  lightbox.style.display = "none";
  lightbox.style.justifyContent = "center";
  lightbox.style.alignItems = "center";
  lightbox.style.zIndex = "1000";

  // Add image element inside lightbox
  const img = document.createElement("img");
  img.style.maxWidth = "90%";
  img.style.maxHeight = "90%";
  img.style.borderRadius = "10px";
  img.style.boxShadow = "0 4px 15px rgba(255,255,255,0.4)";
  lightbox.appendChild(img);

  // When an image is clicked → open lightbox
  images.forEach((image) => {
    image.addEventListener("click", () => {
      lightbox.style.display = "f
