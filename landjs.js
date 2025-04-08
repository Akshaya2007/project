const toggle = document.getElementById('darkToggle');
const body = document.body;

toggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
});
