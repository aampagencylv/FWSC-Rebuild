/** Underline tabs with gold active rule. */
export interface TabsProps {
  tabs?: Array<string | { value: string; label: string }>;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}
export declare function Tabs(props: TabsProps): JSX.Element;
