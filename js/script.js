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

// Modal Events Listeners
modalShow.addEventListener("click", showModal);
modalClose.addEventListener("click", closeModal);
// close when click outside the modal
window.addEventListener("click", (e) => (e.target === modal ? closeModal() : false));

// Validate Form
let Validate = (nameValue, urlValue) => {
  const expression =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
  const regex = new RegExp(expression);
  if (!nameValue || !urlValue) {
    alert("please submit values for both fields.");
    return false;
  } else {
    alert("please provide a valid web address");
    return false;
  }
  // Valid
  return true;
};
// Handle Data from form
let storeBookmark = (e) => {
  e.preventDefault();
  const nameValue = websiteNameEl.value;
  let urlValue = websiteUrlEl.value;
  if (!urlValue.includes("http://", "https://")) {
    urlValue = `https://${urlValue}`;
  }
  console.log(nameValue, urlValue);
  if (!Validate(nameValue, urlValue)) {
    return false;
  }
};

// Event Listener
bookmarkForm.addEventListener("submit", storeBookmark);
