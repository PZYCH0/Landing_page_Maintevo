/* Theme toggle — runs synchronously in <head> to prevent FOUC */
(function () {
  var saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.documentElement.classList.remove('dark');
  }
  // If saved === 'dark' or null, the html element already has class="dark" → keep it

  function applyIcons() {
    var isDark = document.documentElement.classList.contains('dark');
    document.querySelectorAll('.theme-sun-icon').forEach(function (el) {
      el.style.display = isDark ? 'block' : 'none';
    });
    document.querySelectorAll('.theme-moon-icon').forEach(function (el) {
      el.style.display = isDark ? 'none' : 'block';
    });
  }

  window.toggleTheme = function () {
    var isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    applyIcons();
  };

  document.addEventListener('DOMContentLoaded', applyIcons);
})();
