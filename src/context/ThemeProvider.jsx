import React, { useEffect, useMemo, useState } from 'react';
import { ThemeContext } from '../hooks/useTheme';

const getStoredTheme = () => {
  try {
    return localStorage.getItem('theme-mode') || 'system';
  } catch {
    return 'system';
  }
};

const getSystemTheme = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const THEME_COLORS = {
  dark: '#0A0A0B',
  light: '#F7F7F9',
  blueprint: '#0B1220',
};

const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(getStoredTheme);
  const [resolvedTheme, setResolvedTheme] = useState(() =>
    themeMode === 'system' ? getSystemTheme() : themeMode
  );

  useEffect(() => {
    try {
      localStorage.setItem('theme-mode', themeMode);
    } catch {
      // Storage can be unavailable in strict privacy modes; theme still applies.
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = () => {
      const nextTheme = themeMode === 'system' ? getSystemTheme() : themeMode;
      document.documentElement.setAttribute('data-theme', nextTheme);

      const themeColor = document.querySelector('meta[name="theme-color"]');
      if (themeColor && THEME_COLORS[nextTheme]) {
        themeColor.setAttribute('content', THEME_COLORS[nextTheme]);
      }

      setResolvedTheme(nextTheme);
    };

    applyTheme();

    const handleChange = () => {
      if (themeMode === 'system') {
        applyTheme();
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [themeMode]);

  const value = useMemo(
    () => ({ themeMode, setThemeMode, resolvedTheme }),
    [themeMode, resolvedTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
