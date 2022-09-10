import { MotionProps } from "framer-motion";
import { ReactNode } from "react";
import { IPopProps } from "../_common/components/pop";

export interface IModalProps extends IPopProps {
  children?: ReactNode;

  draggable?: boolean;
  motion?: MotionProps;
}
