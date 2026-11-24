
// DARK / LIGHT THEME
const themeToggle = document.getElementById("themeToggle");

// Restore saved theme
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {
  document.body.classList.add("light-theme");
}

function updateThemeIcon() {
  themeToggle.textContent =
    document.body.classList.contains("light-theme") ? "🌙" : "☀️";
}

updateThemeIcon();

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  const theme = document.body.classList.contains("light-theme")
    ? "light"
    : "dark";

  localStorage.setItem("portfolio-theme", theme);
  updateThemeIcon();
});
