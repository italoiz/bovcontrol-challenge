import React from 'react';

import * as S from './styles';
import { TextFieldProps } from './typings';

export const TextField = ({
  label,
  fillContainer,
  ...textInputProps
}: TextFieldProps) => (
  <S.Container flex={fillContainer ? 1 : undefined}>
    <S.Label>{label}</S.Label>
    <S.Input {...textInputProps} />
  </S.Container>
);
