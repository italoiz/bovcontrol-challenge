import styled, { css } from 'styled-components/native';

import { Box } from '../Box';
import { PageWrapperProps } from './typings';

export const Wrapper = styled(Box)<PageWrapperProps>`
  flex: 1;
  padding-vertical: 24px;
  padding-horizontal: 16px;

  ${props =>
    props.removeHorizontal &&
    css`
      padding-horizontal: 0px;
    `}

  ${props =>
    props.removeVertical &&
    css`
      padding-vertical: 0px;
    `}
`;
