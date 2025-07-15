// 🌙 DARK MODE TOGGLING
const elementsToToggle = [
  document.body,
  document.querySelector("header"),
  document.querySelector("footer"),
  document.querySelector(".projects-container"),
  document.querySelector(".description-container"),
  document.querySelector(".contact-container"),
  document.querySelector(".resume")
];

function applyDarkMode(isDark) {
  for (const el of elementsToToggle) {
    if (el) {
      el.classList.toggle("dark-mode", isDark);
    }
  }
}

const isDarkMode = localStorage.getItem("darkMode") === "true";
applyDarkMode(isDarkMode);

const toggleButton = document.getElementById("dark-toggle");
if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    const newMode = !document.body.classList.contains("dark-mode");
    applyDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  });
}

// ✅ CONTACT FORM SUBMIT + ANIMATION
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const sendBtn = document.getElementById("sendBtn");
  const video = document.getElementById("sendAnimation");
  const popup = document.getElementById("successful-popup");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if (!name || !email || !message) {
        shakeForm(form);
        alert("Please fill out all fields before sending your message.");
        return;
      }

      const formData = new FormData(form);
      sendBtn.style.display = "none";
      video.style.display = "block";
      video.play();

      fetch("https://script.google.com/macros/s/AKfycbzeT9CYkBYRi2qm_HlSl58O0WP5_0f8ZJNaIOxM1iNI4sDAGaSZEtCTZqlLO9jqkyGc/exec", {
        method: "POST",
        body: formData
      })
        .then(response => {
          if (!response.ok) throw new Error("Failed to send");

          form.reset();
          showSuccessPopup(popup);

          video.addEventListener("ended", () => {
            video.style.display = "none";

            let again;
            do {
              again = confirm("Would you like to send another message?");
            } while (!again && !confirm("Are you sure you don’t want to send another message?"));

            if (again) {
              sendBtn.style.display = "inline-block";
            }
          });
        })
        .catch(error => {
          console.error("Error:", error);
          alert("There was an error sending your message.");
        });
    });
  }

  function showSuccessPopup(popup) {
    popup.classList.remove("hidden-popup");
    popup.classList.add("popup-show");
    setTimeout(() => {
      popup.classList.remove("popup-show");
      popup.classList.add("hidden-popup");
    }, 3000);
  }

  function shakeForm(form) {
    form.classList.add("shake");
    setTimeout(() => {
      form.classList.remove("shake");
    }, 500);
  }
});
