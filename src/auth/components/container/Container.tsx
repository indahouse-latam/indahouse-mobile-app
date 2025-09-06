import React, { ComponentProps, FC, useMemo } from 'react';
import { ImageBackground, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { convertHexToRgba, Image, WithChildren } from '@/common';

import { useStyles } from './useStyles';

type LinearGradientProps = ComponentProps<typeof LinearGradient>;

const gradientBaseProps = {
  start: { x: 0.5, y: 0 },
  end: { x: 0.5, y: 1 },
} satisfies Partial<LinearGradientProps>;

export const Container: FC<WithChildren> = ({ children }) => {
  const { styles, theme, globalStyles } = useStyles();

  const gradientColors = useMemo(
    (): LinearGradientProps['colors'] => [
      convertHexToRgba(theme.colors.tertiary, 0),
      convertHexToRgba(theme.colors.tertiary, 0.43),
      theme.colors.primary,
    ],
    [theme],
  );

  return (
    <ImageBackground
      style={styles.container}
      imageStyle={styles.image}
      source={Image.AuthBackground}
      resizeMode='cover'
    >
      <LinearGradient
        style={globalStyles.absoluteFill}
        colors={gradientColors}
        {...gradientBaseProps}
      />

      <View style={styles.contentContainer}>{children}</View>
    </ImageBackground>
  );
};
