import React from 'react';
import { useController } from 'react-hook-form';

import { RadioButtonUncontrolled } from './RadioButtonUncontrolled';
import { RadioButtonProps } from './typings';

export const RadioButtonControlled = ({
  name,
  control,
  ...props
}: RadioButtonProps) => {
  if (!name)
    throw new Error(
      'You cannot use controlled RadioButton without the name property.',
    );
  const {
    field: { onChange, value },
  } = useController({ name, control });
  return (
    <RadioButtonUncontrolled
      {...props}
      value={value}
      onChange={newValue => {
        onChange(newValue);
        if (typeof props.onChange === 'function') props.onChange(newValue);
      }}
    />
  );
};
