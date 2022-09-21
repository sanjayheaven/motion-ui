import { useThrottleFn } from "ahooks";
import {
  AnimatePresence,
  motion as Motion,
  useMotionValue,
} from "framer-motion";

import { useEffect, useRef, useState } from "react";
import { useWidth } from "../_common/hooks/useWidth";

import { fadeIn } from "../_common/utils/presets";
import { ISliderProps } from "./type";

export default function Slider({
  bar,
  trail,
  handle,
  value,
  min = 0,
  max = 100,
  onChange,
}: ISliderProps) {
  const [innerPercent, setInnerPercent] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);

  const barWidth = useWidth(barRef);
  // const trailWidth = useWidth(trailRef);
  // const handleWidth = useWidth(handleRef);

  const x = useMotionValue(0);

  /** calc transform-x by value  */
  const calcX = (value: number) => {
    return ((value - min) / (max - min)) * barWidth;
  };

  useEffect(() => {
    const transformX = calcX(value);
    x.set(transformX);
  }, [value, barWidth]);

  useThrottleFn(
    () => {
      console.log("");
    },
    { wait: 120 }
  );

  useEffect(() => {
    const unsubscribeX = x.onChange(() => {
      const roundedValue = Math.round(x.get());

      if (innerPercent == roundedValue) return;
      // console.log(innerPercent, roundedValue, value);

      onChange?.(roundedValue);
    });
    return () => unsubscribeX();
  }, []);

  useEffect(() => {
    if (value <= 0) return setInnerPercent(0);
    if (value >= 100) return setInnerPercent(100);
    setInnerPercent(value);
  }, [value]);

  return (
    <AnimatePresence>
      <Motion.div className=" relative" {...fadeIn}>
        <div onClick={console.log} ref={barRef}>
          {bar}
        </div>

        {(innerPercent >= 0 && (
          <>
            {/* trail node */}
            <Motion.div
              ref={trailRef}
              onClick={console.log}
              className={` absolute top-0 bottom-0 h-full `}
              style={{ width: x }}
            >
              {typeof trail === "function" ? trail({ value }) : trail}
            </Motion.div>

            {/* handle node*/}
            <Motion.div
              ref={handleRef}
              drag="x"
              dragConstraints={{ left: 0, right: barWidth }}
              onDragEnd={() => {
                onChange?.(x.get());
              }}
              className=" absolute top-1/2"
              style={{
                position: "absolute",
                translateY: "-50%",
                translateX: "-50%",
                x,
              }}
            >
              {typeof handle === "function" ? handle({ value }) : handle}
            </Motion.div>
          </>
        )) || <></>}
      </Motion.div>
    </AnimatePresence>
  );
}
