import { useThrottleFn } from "ahooks";
import {
  animate,
  AnimatePresence,
  motion as Motion,
  useMotionValue,
} from "framer-motion";

import React, {
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRect } from "../_common/hooks/useRect";
import { useWidth } from "../_common/hooks/useWidth";

import { fadeIn } from "../_common/utils/presets";
import { ISliderProps } from "./type";

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

  const handleChange = (value: number) => {
    let newValue = value;
    newValue = newValue < min ? min : newValue;
    newValue = newValue > max ? max : newValue;
    setInnerValue(newValue);
    onChange?.(newValue);
  };
  const barWidth = useWidth(barRef);
  const trailWidth = useWidth(trailRef);
  const handleWidth = useWidth(handleRef);

  const barRect = useRect(barRef);

  const x = useMotionValue(0);

  /** calc transform-x by value */
  const calcX = (value: number) => {
    return ((value - min) / (max - min)) * barWidth;
  };

  /** calc value by transform-x */
  const calcValue = (x: number) => {
    if (!barWidth) return 0;
    return (x / barWidth) * (max - min) + min;
  };

  useEffect(() => {
    const transformX = calcX(value);
    x.set(transformX); // do not use animate here, here only do data Synchronize
  }, [value, barWidth, min, max]);

  const handleXChange = () => {
    const currentX = x.get();
    const newValue = Math.round(calcValue(currentX));
    if (innerValue == newValue) return newValue;
    console.log(newValue, currentX, innerValue);
    handleChange(newValue);
    return newValue;
  };

  const { run } = useThrottleFn(
    () => {
      handleXChange();
    },
    { wait: 0 }
  );

  useEffect(() => {
    // here, may re-create a new onXChange. Thus will not get latest value
    const unsubscribeX = x.onChange(run);
    return () => unsubscribeX();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const clientX = e.clientX;
    const barClientX = barRect.left;
    const newTransformX = clientX - barClientX;
    // x.set(newTransformX);
    animate(x, newTransformX); // whether  should open this animation ????
    console.log(clientX, barClientX, newTransformX, "handleClick");
  };
  useEffect(() => {
    if (value <= min) return handleChange(min);
    if (value >= max) return handleChange(max);
    setInnerValue(value);
  }, [value]);

  return (
    <AnimatePresence>
      <Motion.div className=" relative w-full" {...fadeIn}>
        <div onClick={(e) => handleClick(e)} ref={barRef}>
          {bar}
        </div>

        {(innerValue >= 0 && (
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
              dragConstraints={{ left: 0, right: barWidth }}
              onDragEnd={(e, { offset }) => {
                console.log("dragend");
                console.log(offset.x);

                // let newValue = handleXChange();
                // newValue = newValue < min ? min : newValue;
                // newValue = newValue > min ? max : newValue;
                // onAfterChange?.(newValue);
              }}
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
