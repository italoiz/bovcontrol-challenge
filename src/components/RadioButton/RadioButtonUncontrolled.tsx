import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import React, { useEffect, useState } from 'react';

import { useFirstMountState } from '@/hooks';

import { Box } from '../Box';
import * as S from './styles';
import { RadioButtonProps } from './typings';

export const RadioButtonUncontrolled = ({
  label,
  fillContainer,
  options,
  value,
  onChange,
}: RadioButtonProps) => {
  const [internalValue, setInternalValue] = useState(value);
  const isFirstRender = useFirstMountState();

  useEffect(() => {
    if (isFirstRender) return;
    setInternalValue(value);
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <S.Container flex={fillContainer ? 1 : undefined}>
      <S.Label>{label}</S.Label>
      <Box>
        {options.map((option, idx) => (
          <S.OptionTouchable
            key={option.value}
            onPress={() => {
              setInternalValue(option.value);
              if (typeof onChange === 'function') onChange(option.value);
            }}
          >
            <S.OptionContainer applySpaceBottom={idx < options.length - 1}>
              <Icon
                name={
                  internalValue === option.value
                    ? 'radiobox-marked'
                    : 'radiobox-blank'
                }
                size={20}
              />
              <S.OptionLabel>{option.label}</S.OptionLabel>
            </S.OptionContainer>
          </S.OptionTouchable>
        ))}
      </Box>
    </S.Container>
  );
};
