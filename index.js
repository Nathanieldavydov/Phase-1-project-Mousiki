// Toggle light to dark

const toggle = document.getElementById("toggle-mode");

toggle.addEventListener('change', () => {
  document.body.classList.toggle("light");
});