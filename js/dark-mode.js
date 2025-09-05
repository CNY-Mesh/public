// Dark mode functionality - shared across all pages
(function() {
  // Create dark mode toggle if it doesn't exist
  function createToggle() {
    if (document.getElementById('darkModeToggle')) return;
    
    const toggle = document.createElement('button');
    toggle.id = 'darkModeToggle';
    toggle.className = 'dark-mode-toggle';
    toggle.setAttribute('aria-label', 'Toggle dark mode');
    
    const icon = document.createElement('span');
    icon.id = 'darkModeIcon';
    icon.textContent = '🌙';
    
    toggle.appendChild(icon);
    document.body.appendChild(toggle);
    
    return toggle;
  }
  
  const toggle = createToggle();
  const icon = document.getElementById('darkModeIcon');
  const body = document.body;
  
  // Check for saved theme preference or default to system preference
  function getThemePreference() {
    const saved = localStorage.getItem('theme');
    if (saved) {
      return saved;
    }
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light';
  }
  
  // Apply theme
  function applyTheme(theme) {
    if (theme === 'dark') {
      body.setAttribute('data-theme', 'dark');
      if (icon) icon.textContent = '☀️';
    } else {
      body.removeAttribute('data-theme');
      if (icon) icon.textContent = '🌙';
    }
  }
  
  // Toggle theme
  function toggleTheme() {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }
  
  // Initialize
  function init() {
    const initialTheme = getThemePreference();
    applyTheme(initialTheme);
    localStorage.setItem('theme', initialTheme);
    
    // Add click handler
    if (toggle) {
      toggle.addEventListener('click', toggleTheme);
    }
    
    // Listen for system theme changes
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        // Only auto-switch if user hasn't manually set a preference
        const saved = localStorage.getItem('theme');
        if (!saved) {
          applyTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
