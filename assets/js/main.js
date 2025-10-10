// tiny enhancements
(function(){
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const storeKey = 'theme';
  const saved = localStorage.getItem(storeKey);
  if(saved){ root.classList.toggle('light', saved === 'light'); }

  if(toggle){
    toggle.addEventListener('click', () => {
      const isLight = root.classList.toggle('light');
      localStorage.setItem(storeKey, isLight ? 'light' : 'dark');
    });
  }

  const y = document.getElementById('year');
  if(y){ y.textContent = new Date().getFullYear(); }
})();
