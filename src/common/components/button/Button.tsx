import { ComponentProps, ElementType, JSX, memo, useMemo } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

import { Pressable } from '../Pressable';
import { Text } from '../text/Text';

import { ButtonVariant } from './types';
import { useStyles } from './useStyles';

interface Props<T extends ElementType> {
  label: string;
  variant?: ButtonVariant;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  leftIconComponent?: T;
  leftIconProps?: ComponentProps<T>;
}

export const Button = memo(
  <T extends ElementType>({
    label,
    onPress,
    variant = ButtonVariant.CONTAINED,
    containerStyle,
    leftIconComponent: LeftIconComponent,
    leftIconProps,
  }: Props<T>) => {
    const { styles } = useStyles();

    const processedStyles = useMemo(() => {
      const containerStyles: StyleProp<ViewStyle> = [styles.container, containerStyle];
      const textStyles: StyleProp<TextStyle> = [styles.text];

      if (variant === ButtonVariant.OUTLINED) {
        containerStyles.push(styles.outlinedContainer);
        textStyles.push(styles.outlinedText);
      } else {
        containerStyles.push(styles.containedContainer);
        textStyles.push(styles.containedText);
      }

      return { container: containerStyles, text: textStyles };
    }, [styles, variant, containerStyle]);

    return (
      <Pressable style={processedStyles.container} onPress={onPress}>
        {LeftIconComponent && <LeftIconComponent {...(leftIconProps as ComponentProps<T>)} />}

        <Text style={processedStyles.text}>{label}</Text>
      </Pressable>
    );
  },
) as <T extends ElementType = ElementType>(props: Props<T>) => JSX.Element;
