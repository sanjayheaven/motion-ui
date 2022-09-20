import { ReactNode, useMemo } from "react";
import { isArray } from "../../_common/utils/bool";

/** create a new children array according to pass params  */
export const useChildren = (children: ReactNode) => {
  const newChildren = useMemo(
    () => (isArray(children) ? children : [children]),
    [children]
  );
  const childrenCount = useMemo(() => newChildren.length || 0, newChildren);

  return {
    childrenCount,
    newChildren,
  };
};
