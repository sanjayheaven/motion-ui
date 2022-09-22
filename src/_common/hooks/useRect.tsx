import { RefObject } from "react";

/** get a dom Rect info from a ref object */
export const useRect = (ref: RefObject<HTMLDivElement>): DOMRect => {
  const rect = ref.current?.getBoundingClientRect();
  return rect;
};
