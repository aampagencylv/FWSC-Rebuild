/** Toggle switch — navy track, gold thumb when on. */
export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Switch(props: SwitchProps): JSX.Element;
