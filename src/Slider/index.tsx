import type { MotionProps } from "framer-motion";
import type { ISliderProps } from "./type";
import {
  AnimatePresence,
  motion as Motion,
  useMotionValue,
} from "framer-motion";

import React, { useEffect, useRef, useState } from "react";
import { useRect } from "../_common/hooks/useRect";
import { useWidth } from "../_common/hooks/useWidth";

import { fadeIn } from "../_common/utils/presets";

export default function Slider({
  bar,
  trail,
  handle,
  value,
  range = false,
  min = 0,
  max = 100,
  step = 1,
  className = "",
  onChange,
  onAfterChange,
}: ISliderProps) {
  const [innerValue, setInnerValue] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const barWidth = useWidth(barRef);
  const trailWidth = useWidth(trailRef);
  const handleWidth = useWidth(handleRef);
  const barRect = useRect(barRef);

  const validValueArray = [];
  for (let i = min; i <= max; i += step) {
    validValueArray.push(i);
  }

  /** make sure value passed from min to max */
  const transformValueToStepValue = (value: number) => {
    for (let i = 0; i <= validValueArray.length - 1; i++) {
      if (validValueArray[i] == value) {
        return value;
      }
      if (validValueArray[i] < value && value < validValueArray[i + 1]) {
        let diffWithPrev = value - validValueArray[i];
        let diffWithNext = validValueArray[i + 1] - value;
        return diffWithNext > diffWithPrev
          ? validValueArray[i]
          : validValueArray[i + 1];
      }
    }
  };

  const handleChange = (value: number) => {
    let newValue = value;
    newValue = newValue < min ? min : newValue;
    newValue = newValue > max ? max : newValue;
    let newStepValue = transformValueToStepValue(newValue);
    setInnerValue(newStepValue);
    let newTransformX = calcX(newStepValue);
    x.set(newTransformX);
    if (newStepValue == innerValue) return;
    onChange?.(newStepValue);
  };

  const x = useMotionValue(0);

  /** calc transform-x by value */
  const calcX = (value: number) => {
    return ((value - min) / (max - min)) * barWidth;
  };

  /** calc value by transform-x, return value is integer */
  const calcValue = (x: number) => {
    if (!barWidth) return 0;
    let newValue = (x / barWidth) * (max - min) + min;
    return Math.round(newValue);
  };

  useEffect(() => {
    const transformX = calcX(value);
    x.set(transformX); // do not use animate here, here only do data Synchronize
  }, [value, barWidth, min, max]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const clientX = e.clientX;
    const barClientX = barRect.left;
    const newTransformX = clientX - barClientX;
    let newValue = calcValue(newTransformX);
    handleChange(newValue);
  };
  useEffect(() => {
    handleChange(value);
  }, [value]);

  const handleDrag: MotionProps["onDrag"] = (e, { offset }) => {
    let newTransformX = x.get();
    let newValue = calcValue(newTransformX);
    console.log(newTransformX, newValue, 191999);
    handleChange(newValue);
  };

  return (
    <AnimatePresence>
      <Motion.div className=" relative" {...fadeIn}>
        <div onClick={(e) => handleClick(e)} ref={barRef}>
          {bar}
        </div>

        {(innerValue >= min && innerValue <= max && (
          <>
            {/* trail node */}
            <Motion.div
              initial={{ width: 0 }}
              ref={trailRef}
              onClick={(e) => handleClick(e)}
              className={` absolute top-0 bottom-0 h-full `}
              style={{ width: x }}
            >
              {typeof trail === "function" ? trail({ value }) : trail}
            </Motion.div>

            {/* handle node*/}
            <Motion.div
              ref={handleRef}
              drag="x"
              dragElastic={false}
              dragMomentum={false}
              // dragConstraints={barRef}
              // can use useTransform here.  to calc barwidth
              // dragConstraints={{ left: 0, right: barWidth }}
              dragConstraints={{ left: 0, right: barWidth }}
              onDrag={handleDrag}
              className=" absolute top-1/2"
              style={{ translateY: "-50%", translateX: "-50%", x }}
            >
              {typeof handle === "function" ? handle({ value }) : handle}
            </Motion.div>
          </>
        )) || <></>}
      </Motion.div>
    </AnimatePresence>
  );
}
