/** Text input with official tracked-caps label, hint, and error states. */
export interface InputProps {
  /** Tracked-caps label above the control */
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export declare function Input(props: InputProps): JSX.Element;
