/** Tracked-caps status pill — advisory levels, certification status. */
export interface BadgeProps {
  tone?: 'neutral' | 'gold' | 'danger' | 'caution' | 'clear' | 'info';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;
