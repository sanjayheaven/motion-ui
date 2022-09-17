import { ReactNode } from "react";

export type IDotsFunciton = {
  /** transformX percent  */
  percent?: number; // 1-100
  /** */
  childrenCount?: number;
  /** which page is active */
  active?: number;
  /** tranlate to specific page */
  goTo?: (page: number) => void;
};

export interface ICarouselProps {
  /** children ReactNode */
  children?: ReactNode;
  /** drag direction  */
  direction?: "x" | "y";
  /** whether can drag free  */
  dragFree?: boolean;
  /** whether loop, default false  */
  loop?: boolean;
  /** whether autoplay, default false */
  autoplay?: boolean;
  /** autoplay interval, default 2000ms */
  interval?: number;
  /** wrapper className */
  className?: string;
  /** pre ReactNode */
  prev?: ReactNode | (({ handlePrev }: { handlePrev?: () => void }) => void);
  /** next ReactNode */
  next?: ReactNode | (({ handleNext }: { handleNext?: () => void }) => void);
  /** dots ReactNode */
  dots?: ReactNode | ((params: IDotsFunciton) => void);
  /** callback when page change */
  onChange?: ({ page }: { page?: number }) => void;
}
