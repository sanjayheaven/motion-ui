import { CSSProperties, ReactNode } from "react";

export interface IPopProps {
  /** allow press ESC to close the Drawer, default true */
  keyboard?: boolean;
  /** allow Click the mask to close the Drawer, default true */
  maskClosable?: boolean;
  /** control the Drawer show or not */
  visible: boolean;
  /** Callback when Drawer close */
  onClose?: () => void;
  /** style of Mask */
  maskStyle?: CSSProperties;
  /** Chilren  */
  children?: ReactNode;
}
