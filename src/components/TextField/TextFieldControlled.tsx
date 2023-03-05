import React from 'react';
import { useController } from 'react-hook-form';

import { TextFieldUncontrolled } from './TextFieldUncontrolled';
import { TextFieldProps } from './typings';

export const TextFieldControlled = ({
  name,
  control,
  ...textInputProps
}: TextFieldProps) => {
  if (!name)
    throw new Error(
      'You cannot use controlled TextField without the name property.',
    );
  const {
    field: { value, onChange, onBlur },
  } = useController({ name, control });
  return (
    <TextFieldUncontrolled
      {...textInputProps}
      {...{ value, onBlur }}
      onChangeText={text => {
        onChange(text);
        if (typeof textInputProps.onChangeText === 'function')
          textInputProps.onChangeText(text);
      }}
    />
  );
};
