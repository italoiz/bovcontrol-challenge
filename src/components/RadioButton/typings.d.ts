import { Control } from 'react-hook-form';

export type RadioButtonOption = {
  label: string;
  value: string;
};

export type RadioButtonProps = {
  name?: string;
  control?: Control;
  label?: string;
  fillContainer?: boolean;
  value?: string;
  options: RadioButtonOption[];
  onChange?: (value: string) => Promise<void> | void;
};
