import { motion as Motion, MotionProps } from "framer-motion";
import { IButtonProps } from "./type";

const defaultMotion: MotionProps = {
  whileTap: { scale: 0.9 },
};
export default function Button({
  children,
  motion,
  onClick,
  className = "",
}: IButtonProps) {
  return (
    <>
      <Motion.button
        {...(motion || defaultMotion)}
        className={`select-none bg-transparent border-0 p-0 focus:no-underline ${className}`}
        onClick={() => onClick?.()}
      >
        {children}
      </Motion.button>
    </>
  );
}
