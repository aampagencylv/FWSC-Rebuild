/** Square icon-only button; requires an accessible label. */
export interface IconButtonProps {
  /** Accessible name (required) */
  label: string;
  variant?: 'primary' | 'accent' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
  /** The icon element */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
