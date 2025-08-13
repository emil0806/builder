import type { Theme } from './types';

// Light theme inspired by the screenshots
export const lightTheme: Theme = {
  colors: {
    background: '#FFFFFF',
    surface: '#EEE9E4', // soft beige for inputs/cards
    surfaceAlt: '#F6F3F0',
    text: '#0E0E0E',
    textMuted: '#6B6B6B',
    border: '#E5E1DC',
    brand: '#000000', // primary actions (buttons, active tab)
    brandContrast: '#FFFFFF',
    success: '#2BA24C',
    warning: '#C39B14',
    danger: '#D64545'
  },
  radii: {
    xs: 6,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    pill: 999
  },
  spacing: {
    xxs: 2,
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    '2xl': 32,
    '3xl': 40
  },
  typography: {
    fontFamily: 'System',
    sizes: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 24,
      '2xl': 32
    },
    weights: {
  regular: '400',
  medium: '500',
  bold: '700'
    }
  },
  shadows: {
    card: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 8,
      elevation: 2
    }
  }
};

// Simple dark theme draft (optional for future)
export const darkTheme: Theme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    background: '#0E0E0E',
    surface: '#1A1A1A',
    surfaceAlt: '#151515',
    text: '#F3F3F3',
    textMuted: '#B8B8B8',
    border: '#2A2A2A',
    brand: '#FFFFFF',
    brandContrast: '#000000'
  },
  shadows: {
    card: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.2,
      shadowRadius: 6,
      elevation: 0
    }
  }
};

export const themes = { light: lightTheme, dark: darkTheme } as const;
export type ThemeName = keyof typeof themes;
