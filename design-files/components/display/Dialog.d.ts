/** Modal dialog on a navy scrim with gold top rule. */
export interface DialogProps {
  open: boolean;
  onClose?: () => void;
  eyebrow?: string;
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** Action buttons row; defaults to a Close button */
  actions?: React.ReactNode;
  /** Max width in px */
  width?: number;
}
export declare function Dialog(props: DialogProps): JSX.Element;
