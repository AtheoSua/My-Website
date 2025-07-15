// Define all elements that can have dark mode
  const elementsToToggle = [
    document.body,
    document.querySelector("header"),
    document.querySelector("footer"),
    document.querySelector(".projects-container"),
    document.querySelector(".description-container"),
    document.querySelector(".contact-container"),
    document.querySelector(".resume")
  ];

  // Function to apply/remove dark mode
  function applyDarkMode(isDark) {
    let i = 0;
    while (i < elementsToToggle.length) {
      const el = elementsToToggle[i];
      if (el) {
        if (isDark) {
          el.classList.add("dark-mode");
        } else {
          el.classList.remove("dark-mode");
        }
      }
      i++;
    }
  }

  // Apply dark mode if saved in localStorage
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  applyDarkMode(isDarkMode);

  // Optional: Enable toggle button logic only if it exists
  const toggleButton = document.getElementById("dark-toggle");
  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      const newMode = !document.body.classList.contains("dark-mode");
      applyDarkMode(newMode);
      localStorage.setItem("darkMode", newMode);
    });
  }
  window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".description-container").classList.add("fade-slide-up");
  document.querySelector(".projects-container").classList.add("fade-slide-up");
  });
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    const content = document.getElementById("main-content");

    loader.style.opacity = 1;

    // Delay before starting fade-out (3 seconds)
    setTimeout(() => {
      const fadeOut = setInterval(() => {
        let currentOpacity = parseFloat(loader.style.opacity);
        if (currentOpacity > 0) {
          loader.style.opacity = currentOpacity - 0.05;
        } else {
          clearInterval(fadeOut);
          loader.style.display = "none";
          content.style.display = "block";
        }
      }, 30);
    }, 3000); // 3-second delay before fading out
  });