import { ViewStyle } from 'react-native';
import styled from 'styled-components/native';

import { getLayoutProps, getSpacingProps } from './helpers';

export type BoxProps = Partial<ViewStyle> & {
  row?: boolean;
};

export const Box = styled.View<BoxProps>`
  flex-direction: ${({ row }) => row && 'row'};
  ${props => getLayoutProps(props)}
  ${props => getSpacingProps(props)}
`;
