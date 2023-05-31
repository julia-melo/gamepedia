import { PropsWithChildren, createContext, useEffect, useState } from 'react';

export enum ThemeMode {
  DARK = 'dark',
  LIGHT = 'light',
}

interface Theme {
  themeMode: ThemeMode;
  switchTheme: () => void;
}

const prefferedTheme =
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? ThemeMode.DARK
    : ThemeMode.LIGHT;

export const ThemeContext = createContext({} as Theme);

export function ThemeProvider({ children }: PropsWithChildren) {
  const [themeMode, setThemeMode] = useState(prefferedTheme);

  useEffect(() => {
    if (themeMode === ThemeMode.DARK) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [themeMode]);

  const switchTheme = () => {
    setThemeMode(themeMode === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK);
  };

  return (
    <ThemeContext.Provider value={{ themeMode, switchTheme }}>{children}</ThemeContext.Provider>
  );
}
