// Simple smooth scrolling enhancement or console greeting
console.log("Welcome to Deborah's portfolio website!");

// Optional: Add a subtle active state to navigation links on scroll
window.addEventListener('DOMContentLoaded', () => {
    // You can add interactive elements here later if desired!
});

// Modal Image Viewer Functions
function openModal(card) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImg");
    var img = card.querySelector("img");
    if (modal && modalImg && img) {
        modal.style.display = "flex";
        modalImg.src = img.src;
    }
}

function closeModal() {
    var modal = document.getElementById("imageModal");
    if (modal) {
        modal.style.display = "none";
    }
}