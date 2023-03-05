import React from 'react';

import * as S from './styles';
import { TextFieldProps } from './typings';

export const TextFieldUncontrolled = ({
  label,
  fillContainer,
  ...textInputProps
}: TextFieldProps) => {
  return (
    <S.Container flex={fillContainer ? 1 : undefined}>
      <S.Label>{label}</S.Label>
      <S.Input {...textInputProps} />
    </S.Container>
  );
};
