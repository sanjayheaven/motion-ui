import { useSize } from "ahooks";
import { RefObject } from "react";

/** get a dom width from a ref object */
export const useWidth = (wrapperRef: RefObject<HTMLDivElement>) => {
  const wrapperSize = useSize(wrapperRef);
  return wrapperSize?.width || 0;
};
