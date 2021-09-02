const modal = document.getElementById("modal");
const modalShow = document.getElementById("show-modal");
const modalClose = document.getElementById("close-model");
const bookmarkForm = document.getElementById("bookmark-form");
const websiteNameEl = document.getElementById("website-name");
const websiteUrlEl = document.getElementById("website-url");
const bookmarksContainer = document.getElementById("modal-container");

// Show Modal , focus in Input
let showModal = () => {
  modal.classList.add("show-modal");
  websiteNameEl.focus();
};
// Close Modal
let closeModal = () => modal.classList.remove("show-modal");
//Events Listeners
modalShow.addEventListener("click", showModal);
modalClose.addEventListener("click", closeModal);
window.addEventListener("click", (e) => (e.target === modal ? closeModal() : false)); // close when click outside the modal
