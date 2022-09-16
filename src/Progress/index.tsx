import { AnimatePresence, motion as Motion } from "framer-motion";

import { useEffect, useState } from "react";
import { fadeIn } from "../_common/utils/presets";
import { IProgressProps } from "./type";

export default function Progress({ bar, trail, percent }: IProgressProps) {
  const [innerPercet, setInnerPercet] = useState(0);

  useEffect(() => {
    if (percent <= 0) return setInnerPercet(0);
    if (percent >= 100) return setInnerPercet(100);
    setInnerPercet(percent);
  }, [percent]);

  return (
    <AnimatePresence>
      <Motion.div className=" relative" {...fadeIn}>
        {bar}
        {(innerPercet >= 0 && (
          <Motion.div
            initial={false}
            animate={{ width: `${innerPercet}%`, opacity: 1 }}
            exit={{ width: -1, opacity: 0 }}
            className={` absolute top-0 bottom-0 h-full `}
          >
            {typeof trail === "function" ? trail({ percent }) : trail}
          </Motion.div>
        )) || <></>}
      </Motion.div>
    </AnimatePresence>
  );
}
