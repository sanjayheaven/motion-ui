import type { MotionProps } from "framer-motion";
import type { ICheckboxProps } from "./type";
import {
  AnimatePresence,
  motion as Motion,
  useMotionValue,
} from "framer-motion";

import React, { useEffect, useRef, useState } from "react";
import { useRect } from "../_common/hooks/useRect";
import { useWidth } from "../_common/hooks/useWidth";

import { fadeIn } from "../_common/utils/presets";

export default function Checkbox({
  onBlur,
  onFocus,
  onChange,
  checked,
  className = "",
  children,
  boxContent,
}: ICheckboxProps) {
  const [innerChecked, setInnerChecked] = useState(false);
  useEffect(() => {
    setInnerChecked(checked);
  }, [checked]);

  const handleChange = () => {
    console.log("change,1100100");

    setInnerChecked(!checked);
    onChange?.(!checked);
  };
  return (
    <Motion.label
      className={` inline-flex items-center ${className}`}
      onChange={() => handleChange()}
    >
      <Motion.div className="inline-block w-[16px] h-[16px] border-solid border-[1px] border-[#d9d9d9]">
        <AnimatePresence>
          {(innerChecked && (
            <Motion.div {...fadeIn}>
              {typeof boxContent == "function" ? boxContent?.() : boxContent}
            </Motion.div>
          )) || <></>}
        </AnimatePresence>
      </Motion.div>

      {typeof children == "function" ? children?.() : children}
    </Motion.label>
  );
}
