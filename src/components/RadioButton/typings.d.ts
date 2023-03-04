export type RadioButtonOption = {
  label: string;
  value: string;
};

export type RadioButtonProps = {
  label?: string;
  fillContainer?: boolean;
  value?: string;
  options: RadioButtonOption[];
  onChange?: (value: string) => Promise<void> | void;
};
