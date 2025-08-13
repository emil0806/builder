import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export type TextFieldProps = TextInputProps & {
  errorText?: string;
};

export const ThemedTextField: React.FC<TextFieldProps> = ({ style, ...rest }) => {
  const { theme } = useTheme();
  return (
    <TextInput
      placeholderTextColor={theme.colors.textMuted}
      style={[
        {
          backgroundColor: theme.colors.surface,
          borderRadius: theme.radii.lg,
          color: theme.colors.text,
          fontSize: theme.typography.sizes.md,
          height: 48,
          paddingHorizontal: theme.spacing.lg,
        },
        style,
      ]}
      {...rest}
    />
  );
};

export default ThemedTextField;
