import styled from 'styled-components/native';

import { Box } from '../Box';
import { Text } from '../Text';

export const Container = styled(Box)``;

export const Label = styled(Text).attrs({
  variant: 'small',
})`
  margin-bottom: 4px;
  font-weight: 600;
`;

export const OptionTouchable = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})``;

type OptionContainerProps = {
  applySpaceBottom?: boolean;
};

export const OptionContainer = styled(Box).attrs({
  row: true,
})<OptionContainerProps>`
  align-items: center;
  margin-bottom: ${props => (props.applySpaceBottom ? '8px' : '0px')};
  border: 1px solid #9e9e9e;
  padding: 8px;
  align-items: center;
  border-radius: 4px;
`;

export const OptionLabel = styled(Text).attrs({
  variant: 'small',
})`
  font-weight: 700;
  color: ${props => props.theme.colors.primary.main};
  margin-left: 8px;
`;
