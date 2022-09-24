import { ReactNode } from "react";

export interface ICheckboxProps {
  className?: string;
  /** component whether checked */
  checked?: boolean;
  /** callback when checked change */
  onChange?: (checked?: boolean) => void;
  /** whether getFocus when component mounted  */
  autoFocus?: boolean;
  /** callback when compoent blur */
  onBlur?: () => void;
  /** callback when compoent focus */
  onFocus?: () => void;

  children?: ReactNode | (() => ReactNode);

  boxContent?: ReactNode | (() => ReactNode);
}
