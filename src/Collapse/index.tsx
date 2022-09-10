import { AnimatePresence, motion as Motion, MotionProps } from "framer-motion";
import { useState } from "react";
import { ICollapseProps } from "./type";

const defaultMotion: MotionProps = {
  initial: { height: 0, overflow: "hidden", opacity: 0 },
  animate: { height: "max-content", overflow: "visible", opacity: 1 },
  exit: { height: 0, overflow: "hidden", opacity: 0 },
};

export default function Collapse({ header, children, motion }: ICollapseProps) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div onClick={() => setShow(!show)}>
        {typeof header == "function" ? header?.({ show }) : header}
      </div>
      <AnimatePresence>
        {show && (
          <Motion.div {...(motion || defaultMotion)}>{children}</Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
