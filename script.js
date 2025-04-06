const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close-button");
const projectLinks = document.querySelectorAll(".project a");

projectLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove("hidden");
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

const form = document.getElementById("contact-form");
const thankYouMessage = document.getElementById("thank-you-message");
const closeMessageButton = document.getElementById("close-message");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
  thankYouMessage.style.display = "block"; // Show the "Thank You" message

  // Optional: Auto-hide after 5 seconds
  setTimeout(function () {
    thankYouMessage.style.display = "none";
  }, 5000);

  // Clear the form fields
  form.reset();
});

// Close the message manually when the close button is clicked
closeMessageButton.addEventListener("click", function () {
  thankYouMessage.style.display = "none";
});
