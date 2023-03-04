import styled from 'styled-components/native';

import { Box } from '../Box';
import { Text } from '../Text';
import { TextFieldProps } from './typings';

export const Container = styled(Box)``;

export const Label = styled(Text).attrs({
  variant: 'small',
})`
  margin-bottom: 4px;
  font-weight: 600;
  font-family: 'OpenSans-600SemiBold';
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#9E9E9E',
})<Partial<TextFieldProps>>`
  border-radius: 4px;
  border: 1px solid #9e9e9e;
  padding: 8px;
  height: 40px;
  ${props => props.theme.getTypographyStyle('small')}
`;
