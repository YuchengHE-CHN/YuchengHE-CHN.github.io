/* Shared controls; reading does not depend on JavaScript. */
(() => {
  const root = document.documentElement;
  const appearance = document.querySelector('#appearance');
  if (appearance) {
    appearance.value = root.dataset.theme || 'system';
    appearance.closest('label').hidden = false;
    appearance.addEventListener('change', () => {
      const value = appearance.value;
      if (value === 'system') delete root.dataset.theme;
      else root.dataset.theme = value;
      try {
        if (value === 'system') localStorage.removeItem('theme');
        else localStorage.setItem('theme', value);
      } catch (error) { /* Theme still works for this page without storage. */ }
    });
  }
  document.querySelector('[data-print-cv]')?.addEventListener('click', () => window.print());
})();
