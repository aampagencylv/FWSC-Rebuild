/** Native select styled to match Input; accepts string or {value,label} options. */
export interface SelectProps {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  options?: Array<string | { value: string; label: string }>;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export declare function Select(props: SelectProps): JSX.Element;
