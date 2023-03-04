import get from 'lodash.get';
import styled, { css } from 'styled-components/native';

type TextVariant = 'title' | 'subtitle' | 'body' | 'small' | 'tiny';

export type TextProps = {
  variant?: TextVariant;
  color?: string;
  bold?: boolean;
  textAlign?: string;
};

const SCText = styled.Text<TextProps>`
  ${props => props.theme.getTypographyStyle(props.variant || 'body')}
  text-align: ${props => props.textAlign || 'left'};
  color: ${({ theme, color }) => {
    const defaultColor = theme.colors.primary.main;
    if (color?.indexOf('.') !== -1)
      return get(theme.colors, color, defaultColor);
    return theme.colors?.[color || 'primary']?.main || defaultColor;
  }};

  ${props =>
    props.bold &&
    css`
      font-weight: 700;
    `}
`;

export const Text = (props: React.PropsWithChildren<TextProps>) => {
  return <SCText {...props} />;
};
