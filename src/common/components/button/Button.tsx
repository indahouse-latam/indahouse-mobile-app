import { ComponentProps, ElementType, JSX, memo, useMemo } from 'react';
import { ActivityIndicator, StyleProp, TextStyle, ViewStyle } from 'react-native';

import { Color } from '@/theme';

import { Pressable } from '../Pressable';
import { Text } from '../text/Text';

import { ButtonVariant } from './types';
import { useStyles } from './useStyles';

interface Props<T extends ElementType> {
  label: string;
  variant?: ButtonVariant;
  onPress?: () => void;
  isLoading?: boolean;
  isDisabled?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  leftIconComponent?: T;
  leftIconProps?: ComponentProps<T>;
}

export const Button = memo(
  <T extends ElementType>({
    label,
    onPress,
    isLoading,
    isDisabled,
    variant = ButtonVariant.CONTAINED,
    containerStyle,
    leftIconComponent: LeftIconComponent,
    leftIconProps,
  }: Props<T>) => {
    const { styles } = useStyles();

    const processedStyles = useMemo(() => {
      const containerStyles: StyleProp<ViewStyle> = [styles.container, containerStyle];
      const textStyles: StyleProp<TextStyle> = [styles.text];

      let loaderColor: Color;

      if (variant === ButtonVariant.OUTLINED) {
        containerStyles.push(styles.outlinedContainer);
        textStyles.push(styles.outlinedText);

        loaderColor = styles.outlinedText.color;
      } else {
        containerStyles.push(styles.containedContainer);
        textStyles.push(styles.containedText);

        loaderColor = styles.containedText.color;
      }

      return {
        container: containerStyles,
        text: textStyles,
        loaderColor: loaderColor,
      };
    }, [styles, variant, containerStyle]);

    return (
      <Pressable
        style={processedStyles.container}
        onPress={onPress}
        isDisabled={isLoading || isDisabled}
      >
        {isLoading ? (
          <ActivityIndicator color={processedStyles.loaderColor} />
        ) : (
          <>
            {LeftIconComponent && <LeftIconComponent {...(leftIconProps as ComponentProps<T>)} />}

            <Text style={processedStyles.text}>{label}</Text>
          </>
        )}
      </Pressable>
    );
  },
) as <T extends ElementType = ElementType>(props: Props<T>) => JSX.Element;
