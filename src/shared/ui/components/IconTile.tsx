import React from 'react';
import { View, Image, ImageSourcePropType, StyleProp, ViewStyle, ImageStyle } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export type IconTileProps = {
  icon?: ImageSourcePropType;
  size?: number;
  backgroundColor?: string;
  style?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  children?: React.ReactNode;
};

const IconTile: React.FC<IconTileProps> = ({ icon, children, size = 56, backgroundColor, style, imageStyle }) => {
  const { theme } = useTheme();
  return (
    <View
      style={[
        {
          alignItems: 'center',
          backgroundColor: backgroundColor ?? theme.colors.surface,
          borderRadius: theme.radii.lg,
          height: size,
          justifyContent: 'center',
          width: size,
        },
        style,
      ]}
    >
      {icon ? (
        <Image source={icon} resizeMode="contain" style={[{ height: size * 0.5, width: size * 0.5 }, imageStyle]} />
      ) : (
        children
      )}
    </View>
  );
};

export default IconTile;
