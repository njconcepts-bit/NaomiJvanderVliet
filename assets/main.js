// Jaar in de footer
document.getElementById('year').textContent = new Date().getFullYear();

// Light/Dark toggle
const root = document.body;
const key = 'pref-theme';
const saved = localStorage.getItem(key);
if (saved) root.setAttribute('data-theme', saved);

document.getElementById('theme-toggle').addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem(key, next);
});
