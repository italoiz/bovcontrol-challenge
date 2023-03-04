import { TextInputProps } from 'react-native';

export type TextFieldProps = Partial<TextInputProps> & {
  label?: string;
  fillContainer?: boolean;
};
