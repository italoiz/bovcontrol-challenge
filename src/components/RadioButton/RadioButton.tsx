import React from 'react';

import { RadioButtonControlled } from './RadioButtonControlled';
import { RadioButtonUncontrolled } from './RadioButtonUncontrolled';
import { RadioButtonProps } from './typings';

export const RadioButton = ({ name, ...props }: RadioButtonProps) => {
  if (name) return <RadioButtonControlled name={name} {...props} />;
  return <RadioButtonUncontrolled {...props} />;
};
