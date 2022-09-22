import { ReactNode } from "react";

export interface IInputProps {
  className?: string;
  /** content value */
  placeholder?: string;
  /** content value */
  value?: string;
  /** callback when value change */
  onChange?: (value?: string) => void;
  /** whether getFocus when component mounted  */
  autoFocus?: boolean;
  /** callback when compoent blur */
  onBlur?: () => void;
  /** callback when compoent focus */
  onFocus?: () => void;
  /** input type */
  type?: "text" | "password";
}
