/**
 * Safety advisory banner — danger, caution, clear, info tones.
 * @startingPoint section="Display" subtitle="Marine advisory banners in four tones" viewport="700x200"
 */
export interface AlertProps {
  tone?: 'danger' | 'caution' | 'clear' | 'info';
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** Optional trailing action (e.g. a ghost Button) */
  action?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Alert(props: AlertProps): JSX.Element;
