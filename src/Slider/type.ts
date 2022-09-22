import { ReactNode } from "react";

interface ITailFunction {
  value: number;
}

type IMark = Record<number, ReactNode>;

export interface ISliderProps {
  /** bar(wrapper) className */
  className?: string;
  /** slider value */
  value?: number;

  /** bar child node */
  bar?: ReactNode;

  /** trail child node */ // change Name to track ???
  trail?: ReactNode | (({ value }: ITailFunction) => ReactNode);

  /** handle childr node */
  handle?: ReactNode | (({ value }: ITailFunction) => ReactNode);

  /** marks of Slider */
  marks?: IMark[];

  /** callback function when value change */
  onChange?: (value?: number) => void;

  /** callback function to get the latest value after change  */
  onAfterChange?: (value?: number) => void;

  /** min value  */
  min?: number;
  /** max value */
  max?: number;
  /** step */
  step?: number;
  /** range mode, two handles exist */
  range?: boolean;
}
