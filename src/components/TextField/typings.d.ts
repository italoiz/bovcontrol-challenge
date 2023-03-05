import { Control } from 'react-hook-form';
import { TextInputProps } from 'react-native';

export type TextFieldProps = Partial<TextInputProps> & {
  label?: string;
  fillContainer?: boolean;
  name?: string;
  control?: Control;
};
