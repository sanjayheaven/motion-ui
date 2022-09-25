import { AnimatePresence, motion as Motion } from "framer-motion";

import { useEffect, useMemo, useState } from "react";
import { fadeIn } from "../_common/utils/presets";
import { IProgressProps } from "./type";

export default function Progress({
  trail,
  percent,
  className = "",
  motion,
}: IProgressProps) {
  const [innerPercent, setInnerPercent] = useState(0);

  useEffect(() => {
    if (percent <= 0) return setInnerPercent(0);
    if (percent >= 100) return setInnerPercent(100);
    setInnerPercent(percent);
  }, [percent]);

  const defaultMotion = useMemo(() => {
    return {
      initial: false,
      animate: { width: `${innerPercent}%`, opacity: 1 },
      exit: { width: -1, opacity: 0 },
    };
  }, [innerPercent]);

  return (
    <AnimatePresence>
      <Motion.div {...fadeIn} className={` relative ${className}`}>
        {(innerPercent >= 0 && (
          <Motion.div
            {...(motion || defaultMotion)}
            className={` absolute top-0 bottom-0 h-full `}
          >
            {typeof trail === "function" ? trail({ percent }) : trail}
          </Motion.div>
        )) || <></>}
      </Motion.div>
    </AnimatePresence>
  );
}
