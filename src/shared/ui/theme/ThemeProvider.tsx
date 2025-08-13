import React, { createContext, useContext, useMemo, useState } from 'react';
import { Appearance } from 'react-native';
import { themes } from './tokens';
import type { Theme, ColorScheme } from './types';

export type ThemeContextValue = {
  theme: Theme;
  colorScheme: ColorScheme;
  setColorScheme: (scheme: ColorScheme) => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider: React.FC<{ initialScheme?: ColorScheme; children: React.ReactNode }> = ({
  initialScheme,
  children,
}) => {
  const systemScheme = (Appearance.getColorScheme() || 'light') as ColorScheme;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(initialScheme ?? systemScheme);

  const value = useMemo<ThemeContextValue>(() => {
    const theme = colorScheme === 'dark' ? themes.dark : themes.light;
    return { theme, colorScheme, setColorScheme };
  }, [colorScheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextValue => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};

export default ThemeProvider;
