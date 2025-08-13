export type ColorScale = {
  0?: string;
  50?: string;
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  600?: string;
  700?: string;
  800?: string;
  900?: string;
};

export type Colors = {
  background: string;
  surface: string;
  surfaceAlt: string;
  text: string;
  textMuted: string;
  border: string;
  brand: string;
  brandContrast: string;
  success: string;
  warning: string;
  danger: string;
};

export type Radii = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  pill: number;
};

export type Spacing = {
  xxs: number; // 2
  xs: number;  // 4
  sm: number;  // 8
  md: number;  // 12
  lg: number;  // 16
  xl: number;  // 24
  '2xl': number; // 32
  '3xl': number; // 40
};

import type { TextStyle } from 'react-native';

export type Typography = {
  fontFamily: string;
  sizes: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    '2xl': number;
  };
  weights: {
    regular: TextStyle['fontWeight'];
    medium: TextStyle['fontWeight'];
    bold: TextStyle['fontWeight'];
  };
};

export type Shadows = {
  card: {
    shadowColor: string;
    shadowOffset: { width: number; height: number };
    shadowOpacity: number;
    shadowRadius: number;
    elevation: number;
  };
};

export type Theme = {
  colors: Colors;
  radii: Radii;
  spacing: Spacing;
  typography: Typography;
  shadows: Shadows;
};

export type ColorScheme = 'light' | 'dark';
