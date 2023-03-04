import { css } from 'styled-components';

import typography from './typography';

export default {
  colors: {
    primary: {
      main: '#212121',
    },
    secondary: {
      main: '#008CBA',
    },
    danger: {
      main: '#FF5722',
    },
    white: {
      main: '#FFFFFF',
    },
    grey: {
      main: '#9E9E9E',
      light: '#cccccc',
    },
  },
  typography,
  getTypographyStyle: (typo: string) =>
    typography[typo] &&
    css`
      font-size: ${typography[typo].fontSize}px;
      line-height: ${typography[typo].lineHeight}px;
      font-weight: ${typography[typo].fontWeight};
    `,
};
