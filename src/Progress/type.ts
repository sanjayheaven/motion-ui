import { MotionProps } from "framer-motion";
import { ReactNode } from "react";

interface ITailFunction {
  percent: number;
}

export interface IProgressProps {
  /** percentage from 0 to 100 */
  percent?: number;
  /** trail child node */
  trail?: ReactNode | (({ percent }: ITailFunction) => ReactNode);
  /** bar className */
  className?: string;
  /** trail motion  */
  motion?: MotionProps;
  /** whether show animation in trail node */
  active?: boolean;
}
