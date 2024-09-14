const deathNoteModal = document.getElementById("deathNoteModal");
const closeModal = document.querySelector(".close");
const showImage = document.querySelector(".show img");

showImage.onclick = function() {
  deathNoteModal.style.display = "flex"; // Show modal
};

closeModal.onclick = function() {
  deathNoteModal.style.display = "none"; // Close modal
};

// Close the modal when clicking outside the modal content
window.onclick = function(event) {
  if (event.target == deathNoteModal) {
    deathNoteModal.style.display = "none";
  }
};
