/**
 * Official FWSC action button — navy primary, gold accent, outlined secondary.
 * @startingPoint section="Forms" subtitle="Navy, gold, outline, ghost, and danger actions" viewport="700x220"
 */
export interface ButtonProps {
  /** Visual style */
  variant?: 'primary' | 'accent' | 'secondary' | 'ghost' | 'danger';
  /** Control size */
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
