import { useMotionValue } from "framer-motion";

export const useTransformX = () => {
  const x = useMotionValue(0);

  const minPageX = useMotionValue(0);
  const maxPageX = useMotionValue(0);
  return {
    /** calc the transform x according to the page */
    x,

    minPageX,
    maxPageX,
  };
};
