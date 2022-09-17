import { motion as Motion } from "framer-motion";
import { ISkeletonProps } from "./type";

export default function Skeleton({ children }: ISkeletonProps) {
  return (
    <>
      <Motion.div
        // className=" animate-pulse"
        // initial={{ opacity: 1 }}
        animate={{
          opacity: [1, 0.5, 1],
          transition: { duration: 2, repeat: Infinity },
        }}
        // exit={{ opacity: 1 }}
      >
        {children}
      </Motion.div>
    </>
  );
}
