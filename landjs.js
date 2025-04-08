const toggle = document.getElementById('toggle');
const root = document.documentElement;

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    root.style.setProperty('--white', '#111');
    root.style.setProperty('--text', '#fff');
    root.style.setProperty('--cyan', '#008b8b');
    root.style.setProperty('--pink', '#c71585');
    root.style.setProperty('--gold', '#b8860b');
  } else {
    root.style.setProperty('--white', '#ffffff');
    root.style.setProperty('--text', '#000000');
    root.style.setProperty('--cyan', '#00d4ff');
    root.style.setProperty('--pink', '#ff9ee6');
    root.style.setProperty('--gold', '#ffd700');
  }
});
