// Dark Mode Logic
const elementsToToggle = [
  document.body,
  document.querySelector("header"),
  document.querySelector("footer"),
  document.querySelector(".resume") // only needed if this is the About + Resume page
];

function applyDarkMode(isDark) {
  elementsToToggle.forEach(el => {
    if (el) el.classList.toggle("dark-mode", isDark);
  });
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

// Right Column Animation Logic
window.addEventListener("DOMContentLoaded", () => {
  const rightCol = document.querySelector(".right-column");
  if (rightCol) {
    setTimeout(() => {
      rightCol.classList.add("animate-in");
    }, 300);
  }
});