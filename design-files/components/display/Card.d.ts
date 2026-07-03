/**
 * Paper-like content card; certificate variant carries the gold top rule.
 * @startingPoint section="Display" subtitle="Default, certificate (gold rule), and navy cards" viewport="700x260"
 */
export interface CardProps {
  /** default | certificate (gold top rule) | navy (dark band) */
  variant?: 'default' | 'certificate' | 'navy';
  /** Tracked-caps label above the title */
  eyebrow?: string;
  title?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;
