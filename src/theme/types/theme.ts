import { Color } from './color';
import { Font } from './font';

export interface Theme {
  fonts: Fonts;
  colors: Colors;
  sizes: Sizes;
  space: Space;
}

interface Fonts {
  primary: PrimaryFont;
}

interface Colors {
  black: Color;
  primary: Color;
  secondary: Color;
  tertiary: Color;
  background: BackgroundColors;
  success: Color;
  error: Color;
  attention: Color;
}

interface Sizes {
  text: TextSizes;
  radius: RadiusSizes;
}

interface Space {
  height: (percent: number) => number;
  width: (percent: number) => number;
}

interface PrimaryFont {
  regular: Font;
  medium: Font;
  semibold: Font;
  bold: Font;
}

interface BackgroundColors {
  primary: Color;
  secondary: Color;
  success: Color;
}

interface TextSizes {
  small: number;
  medium: number;
  large: number;
}

interface RadiusSizes {
  medium: number;
  large: number;
  full: number;
}
