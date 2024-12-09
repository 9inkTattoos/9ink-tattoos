document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const themeLabel = document.getElementById("theme-label");
  const body = document.body;

  // Check localStorage for the user's theme preference
  const userTheme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  // Helper function to update the toggle button
  const updateToggleButton = (isDark) => {
    if (isDark) {
      themeIcon.textContent = "🌙"; // Moon icon for dark mode
      themeLabel.textContent = "Dark Mode";
      toggleButton.classList.remove("bg-black", "text-yellow-600");
      toggleButton.classList.add("bg-gray-200", "text-black");
    } else {
      themeIcon.textContent = "🌞"; // Sun icon for light mode
      themeLabel.textContent = "Light Mode";
      toggleButton.classList.remove("bg-gray-200", "text-black");
      toggleButton.classList.add("bg-black", "text-yellow-600");
    }
  };

  // Set the initial theme
  const isDarkMode = userTheme === "dark" || (!userTheme && systemTheme === "dark");
  if (isDarkMode) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
  updateToggleButton(isDarkMode);

  // Handle the toggle button click
  toggleButton.addEventListener("click", () => {
    const isDark = body.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateToggleButton(isDark);
  });
});
