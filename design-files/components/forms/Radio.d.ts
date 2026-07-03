/** Radio button and RadioGroup helper. */
export interface RadioProps {
  name?: string;
  value?: string;
  checked?: boolean;
  onChange?: (value: string) => void;
  disabled?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Radio(props: RadioProps): JSX.Element;
export interface RadioGroupProps {
  name?: string;
  value?: string;
  onChange?: (value: string) => void;
  options?: Array<string | { value: string; label: string }>;
  direction?: 'row' | 'column';
  style?: React.CSSProperties;
}
export declare function RadioGroup(props: RadioGroupProps): JSX.Element;
