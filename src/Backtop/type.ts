import { MotionProps } from "framer-motion";
import { ReactNode } from "react";

export interface IBackTopProps {
  /** children in BackTop  */
  children?: ReactNode;
  /** scroll top threshold  */
  height?: number;
  bottom?: number;
  right?: number;

  motion?: MotionProps;
  onClick?: Function;
}
