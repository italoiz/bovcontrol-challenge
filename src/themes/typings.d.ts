// styled.d.ts
import 'styled-components';

type Typography = {
  fontSize: number;
  lineHeight: number;
  fontWeight: number;
};

type Color = {
  main: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Record<string, Color>;
    typography: Record<string, Typography>;
    getTypographyStyle: (typo: string) => ReturnType<ThemedCssFunction>;
  }
}
