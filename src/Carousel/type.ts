import { ReactNode } from "react";

type ICommon = {
  /** min page in the carousel, valid in Slide mode  */
  minPage?: number; // usually is 0
  /** max page in the carousel, valid in Slide mode  */
  maxPage?: number;
  /** transformX percent  */
  percent?: number; // 1-100
  /** which page is active */
  active?: number;
};

export interface IDotsFunciton extends ICommon {
  /** tranlate to specific page */
  goTo?: (page: number) => void;
}
export interface IPrevFunciton extends ICommon {
  handlePrev?: () => void;
}
export interface INextFunciton extends ICommon {
  handleNext?: () => void;
}

export interface ICarouselProps {
  /** children ReactNode */
  children?: ReactNode;
  /** drag direction  */
  direction?: "x" | "y";
  /** whether can drag even in Slide mode */
  draggable?: boolean;
  /** whether can drag free  */
  dragFree?: boolean;
  /** whether loop, only work when children more than 1  */
  loop?: boolean;
  /** whether autoplay, default false */
  autoplay?: boolean;
  /** autoplay interval, default 2000ms */
  interval?: number;
  /** wrapper className */
  className?: string;
  /** pre ReactNode */
  prev?: ReactNode | ((params: IPrevFunciton) => void);
  /** next ReactNode */
  next?: ReactNode | ((params: INextFunciton) => void);
  /** dots ReactNode */
  dots?: ReactNode | ((params: IDotsFunciton) => void);
  /** callback when page change */
  onChange?: ({ page }: { page?: number }) => void;
}
