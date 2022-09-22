import type { MotionProps } from "framer-motion";
import type { IInputProps } from "./type";
import {
  AnimatePresence,
  motion as Motion,
  useMotionValue,
} from "framer-motion";

import React, { useEffect, useRef, useState } from "react";
import { useRect } from "../_common/hooks/useRect";
import { useWidth } from "../_common/hooks/useWidth";

import { fadeIn } from "../_common/utils/presets";

export default function Input({
  value,
  onChange,
  placeholder,
  autoFocus = false,
  className = "",
  onBlur,
  onFocus,
  type = "text",
}: IInputProps) {
  return (
    <Motion.input
      type={type}
      onBlur={onBlur}
      onFocus={onFocus}
      autoFocus={autoFocus}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className={`p-0 focus:outline-0 border-0 ${className}`}
    ></Motion.input>
  );
}
