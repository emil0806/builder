import React from 'react';
import { Pressable, StyleProp, ViewStyle } from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '../theme/ThemeProvider';
import BackIcon from '@assets/icons/back.svg';

export type BackButtonProps = {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  color?: string;
};

const BackButton: React.FC<BackButtonProps> = ({ onPress, style, color }) => {
  const router = useRouter();
  const { theme } = useTheme();
  const stroke = color ?? theme.colors.text;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Tilbage"
      hitSlop={12}
      onPress={onPress ?? (() => router.back())}
      style={[
        {
          position: 'absolute',
          left: theme.spacing.xl,
          top: theme.spacing.xl,
          height: 32,
          width: 32,
          alignItems: 'center',
          justifyContent: 'center',
        },
        style,
      ]}
    >
      <BackIcon width={24} height={24} stroke={stroke} />
    </Pressable>
  );
};

export default BackButton;
