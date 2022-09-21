import { ReactNode } from "react";

interface ITailFunction {
  value: number;
}

type IMark = Record<number, ReactNode>;

export interface ISliderProps {
  /** slider value */
  value?: number;

  /** bar child node */
  bar?: ReactNode;
  /** trail child node */
  trail?: ReactNode | (({ value }: ITailFunction) => ReactNode);

  /** handle childr node */
  handle?: ReactNode | (({ value }: ITailFunction) => ReactNode);

  /** marks of Slider */
  marks?: IMark[];

  /** callback function when value change */
  onChange?: (value?: number) => VoidFunction;

  /** min value  */
  min?: number;

  /** max value */
  max?: number;

  /** step */
  step?: number;
}
