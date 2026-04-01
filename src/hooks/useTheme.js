import { useState, useEffect } from 'react';

const useTheme = () => {
  const [themeMode, setThemeMode] = useState(localStorage.getItem('theme-mode') || 'system');

  useEffect(() => {
    localStorage.setItem('theme-mode', themeMode);
    
    const applyTheme = () => {
      if (themeMode === 'system') {
        const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-theme', isSystemDark ? 'dark' : 'light');
      } else {
        document.documentElement.setAttribute('data-theme', themeMode);
      }
    };

    applyTheme();

    // Listener for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (themeMode === 'system') {
        applyTheme();
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [themeMode]);

  return [themeMode, setThemeMode];
};

export default useTheme;
