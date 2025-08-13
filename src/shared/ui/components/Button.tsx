import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator, GestureResponderEvent, ViewStyle, TextStyle } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export type ButtonProps = {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  variant?: 'primary' | 'ghost';
};

export const ThemedButton: React.FC<ButtonProps> = ({ title, onPress, disabled, loading, style, textStyle, variant = 'primary' }) => {
  const { theme } = useTheme();

  const bgColor = variant === 'primary' ? theme.colors.brand : theme.colors.surface;
  const txtColor = variant === 'primary' ? theme.colors.brandContrast : theme.colors.text;
  const borderWidth = variant === 'ghost' ? 1 : 0;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        {
          alignItems: 'center',
          backgroundColor: bgColor,
          borderColor: theme.colors.border,
          borderRadius: theme.radii.lg,
          borderWidth,
          height: 48,
          justifyContent: 'center',
          opacity: disabled ? 0.6 : 1,
        },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={txtColor} />
      ) : (
        <Text
          style={[
            {
              color: txtColor,
              fontSize: theme.typography.sizes.md,
              fontWeight: theme.typography.weights.bold,
            },
            textStyle,
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default ThemedButton;
