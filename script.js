const panels = document.querySelectorAll(".panel");

// Add active class onclick
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActive();
    panel.classList.add("active");
  });
});

// Remove the active class
function removeActive() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
