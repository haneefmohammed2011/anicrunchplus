// Modal functionality for Death Note
const deathNoteModal = document.getElementById("deathNoteModal");
const deathNoteShow = document.getElementById("deathNoteShow");
const closeModal = document.getElementsByClassName("close")[0];

// When user clicks on Death Note thumbnail, show the modal
deathNoteShow.onclick = function() {
    deathNoteModal.style.display = "flex";
}

// When the user clicks on the close button (x), close the modal
closeModal.onclick = function() {
    deathNoteModal.style.display = "none";
}

// When the user clicks outside the modal content, close the modal
window.onclick = function(event) {
    if (event.target == deathNoteModal) {
        deathNoteModal.style.display = "none";
    }
}
