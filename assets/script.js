// Dark mode toggle with localStorage persistence
(function () {
  const key = "david-site-theme";
  const btn = document.getElementById("themeToggle");
  const apply = (mode) => {
    if (mode === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    btn.textContent = mode === "dark" ? "☀️" : "🌙";
  };
  const saved = localStorage.getItem(key);
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const start = saved || (prefersDark ? "dark" : "light");
  apply(start);
  btn?.addEventListener("click", () => {
    const next = document.documentElement.classList.contains("dark") ? "light" : "dark";
    localStorage.setItem(key, next);
    apply(next);
  });
  // Footer year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();

