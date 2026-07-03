/** Quiet metadata chip (regions, vessel types); optional remove. */
export interface TagProps {
  children?: React.ReactNode;
  onRemove?: () => void;
  style?: React.CSSProperties;
}
export declare function Tag(props: TagProps): JSX.Element;
