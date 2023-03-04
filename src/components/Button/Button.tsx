import styled, { css } from 'styled-components/native';

import { Box } from '../Box';
import { Text, TextColor, TextProps } from '../Text';

type ButtonVariant = 'standard' | 'text';

type ButtonColor = 'primary' | 'secondary' | 'danger';

type ButtonSize = 'normal' | 'large';

type ButtonProps = {
  title: string;
  variant?: ButtonVariant;
  color?: ButtonColor;
  leftElement?: (args: { color: string; size: number }) => React.ReactNode;
  size?: ButtonSize;
};

const Touchable = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})``;

const ButtonContainer = styled.View<Partial<ButtonProps>>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-horizontal: 12px;
  padding-vertical: 4px;
  border-radius: 8px;

  ${props =>
    props.size === 'large' &&
    css`
      padding-vertical: 12px;
    `}

  background-color: ${({ theme, color: colorProp }) => {
    const defaultColor = 'primary';
    const colorName = colorProp || defaultColor;
    const color =
      theme.colors?.[colorName]?.main || theme.colors[defaultColor].main;
    if (colorProp === 'danger') return 'transparent';
    return color;
  }};
`;

export const getTextStyle = (
  props: Partial<ButtonProps>,
): Partial<TextProps> => {
  const textColor = {
    primary: 'white',
    danger: 'danger',
    secondary: 'white',
  };
  return {
    color: textColor[props.color || 'primary'] as TextColor,
  };
};

export const Button = (props: ButtonProps) => {
  const textProps = getTextStyle(props);
  return (
    <Touchable>
      <ButtonContainer {...props}>
        {props.leftElement?.({ color: textProps.color, size: 18 })}
        {typeof props.leftElement === 'function' && <Box width={4} />}
        <Text bold {...textProps}>
          {props.title}
        </Text>
      </ButtonContainer>
    </Touchable>
  );
};
