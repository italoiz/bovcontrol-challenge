import styled from 'styled-components/native';

import { Box } from '../Box';
import { Text } from '../Text';

export const LogoText = styled(Text)`
  color: #fff;
  font-size: 20px;
  line-height: 27px;
  font-weight: 600;
  font-family: 'OpenSans-600SemiBold';
`;

export const AvatarImage = styled.Image.attrs({
  source: { uri: 'https://randomuser.me/api/portraits/men/72.jpg' },
})`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  overflow: hidden;
`;

export const Container = styled(Box).attrs({
  row: true,
})`
  padding-vertical: 12px;
  padding-horizontal: 16px;
  background-color: ${props => props.theme.colors.primary.main};
  align-items: center;
  justify-content: space-between;
`;
