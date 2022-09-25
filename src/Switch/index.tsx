import type { ISwitchProps } from "./type";
import { motion as Motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Switch({
  checked,
  onChange,
  className = "",
  children,
}: ISwitchProps) {
  const [innerChecked, setInnerChecked] = useState(false);
  useEffect(() => {
    setInnerChecked(checked);
  }, [checked]);
  return (
    <Motion.div
      className={className}
      onClick={() => {
        setInnerChecked(!innerChecked);
        onChange?.(!innerChecked);
      }}
    >
      {typeof children === "function" ? children?.({ checked }) : children}
    </Motion.div>
  );
}
