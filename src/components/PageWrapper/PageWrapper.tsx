import React from 'react';

import * as S from './styles';
import { PageWrapperProps } from './typings';

export const PageWrapper = ({
  children,
  ...props
}: React.PropsWithChildren<PageWrapperProps>) => {
  return <S.Wrapper {...props}>{children}</S.Wrapper>;
};
