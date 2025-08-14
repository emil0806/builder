import React from 'react';
import { Pressable, StyleProp, ViewStyle } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import PlusIcon from '@assets/icons/plus.svg';

export type AddButtonProps = {
  onPress?: () => void;
  inline?: boolean; // when true, renders as an inline button (no absolute positioning)
  style?: StyleProp<ViewStyle>;
  size?: number; // icon size
};

const AddButton: React.FC<AddButtonProps> = ({ onPress, inline = false, style, size = 24 }) => {
  const { theme } = useTheme();
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel="Tilføj"
      style={[
        {
          backgroundColor: theme.colors.background,
          padding: 2,
          ...(inline
            ? {}
            : {
                position: 'absolute' as const,
                top: theme.spacing.xl,
                right: theme.spacing.xl,
                zIndex: 10,
              }),
        },
        style,
      ]}
    >
      <PlusIcon stroke={theme.colors.text} width={size} height={size} />
    </Pressable>
  );
};

export default AddButton;
