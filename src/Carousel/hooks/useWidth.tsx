import { useSize } from "ahooks";
import { RefObject, useMemo } from "react";

/** get a dom width from a ref object */
export const useWidth = (wrapperRef: RefObject<HTMLDivElement>) => {
  const wrapperSize = useSize(wrapperRef);
  const wrapperWidth = useMemo(
    () => wrapperSize?.width || 0,
    [wrapperSize?.width]
  );
  return wrapperWidth;
};
