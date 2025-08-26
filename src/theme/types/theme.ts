import { Color } from './color';
import { Font } from './font';

export interface Theme {
  fonts: Fonts;
  colors: Colors;
  sizes: Sizes;
}

interface Fonts {
  primary: PrimaryFont;
}

interface Colors {
  primary: Color;
  secondary: Color;
  tertiary: Color;
  background: BackgroundColors;
  success: Color;
  error: Color;
  attention: Color;
}

interface BackgroundColors {
  primary: Color;
  secondary: Color;
  success: Color;
}

interface Sizes {
  text: TextSizes;
  radius: RadiusSizes;
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

interface PrimaryFont {
  regular: Font;
  medium: Font;
  semibold: Font;
  bold: Font;
}
