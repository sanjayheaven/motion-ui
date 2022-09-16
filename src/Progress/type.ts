import { ReactNode } from "react";

interface ITailFunction {
  percent: number;
}

export interface IProgressProps {
  /** percentage from 0 to 100 */
  percent?: number;
  /** bar child node */
  bar?: ReactNode;
  /** trail child node */
  trail?: ReactNode | (({ percent }: ITailFunction) => ReactNode);

  /** whether show animation in trail node */
  active?: boolean;
}
