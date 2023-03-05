import React from 'react';

import { TextFieldControlled } from './TextFieldControlled';
import { TextFieldUncontrolled } from './TextFieldUncontrolled';
import { TextFieldProps } from './typings';

export const TextField = ({ name, ...textInputProps }: TextFieldProps) => {
  if (name) return <TextFieldControlled name={name} {...textInputProps} />;
  return <TextFieldUncontrolled {...textInputProps} />;
};
