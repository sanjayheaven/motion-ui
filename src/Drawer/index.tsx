import type { IDrawerProps, Placement } from "./type";
import { motion, MotionProps } from "framer-motion";
import {
  slideInLeft,
  slideInRight,
  slideInTop,
  slideInBottom,
} from "../_common/utils/presets";
import { Pop } from "../_common/components/pop";

const placementOptions: {
  [key in Placement]?: { motion: MotionProps; className: string };
} = {
  left: { motion: slideInLeft, className: " h-full left-0" },
  right: { motion: slideInRight, className: " h-full right-0" },
  top: { motion: slideInTop, className: " w-full top-0" },
  bottom: { motion: slideInBottom, className: " w-full bottom-0" },
};

export default function Drawer({
  placement = "right",
  children,
  ...props
}: IDrawerProps) {
  const placementOption = placementOptions[placement];
  return (
    <Pop {...props}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        {...placementOption.motion}
        className={` absolute ${placementOption.className}`}
      >
        {children}
      </motion.div>
    </Pop>
  );
}

export * from "./type";
