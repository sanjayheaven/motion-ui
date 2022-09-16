import { AnimatePresence, MotionProps, useMotionValue } from "framer-motion";
import { motion as Motion, animate } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { isArray } from "../_common/utils/bool";
import { useSize, useThrottleFn } from "ahooks";
import { ICarouselProps, IDotsFunciton } from "./type";

export default function Carousel({
  children,
  className = "",
  dragFree = false,
  next,
  prev,
  dots,
}: ICarouselProps) {
  const [page, setPage] = useState(0); // from 0
  const newChildren = useMemo(
    () => (isArray(children) ? children : [children]),
    [children]
  );
  const childrenCount = useMemo(() => newChildren.length, newChildren);
  const minPage = 0;
  const maxPage = useMemo(
    () => (childrenCount >= 1 ? childrenCount - 1 : 0),
    [childrenCount]
  );
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const wrapperSize = useSize(wrapperRef);
  const wrapperWidth = useMemo(
    () => wrapperSize?.width || 0,
    [wrapperSize?.width]
  );

  const maxLeft = useMemo(
    () => -maxPage * wrapperWidth,
    [maxPage, wrapperWidth]
  );
  const maxRight = 0;

  const calcX = useCallback(
    (v: number) => v * -1 * wrapperWidth,
    [wrapperWidth]
  );
  const x = useMotionValue(0);

  const [percent, setPercent] = useState(0);

  const { run } = useThrottleFn(
    () => setPercent(Math.abs(x.get() / maxLeft) * 100),
    { wait: 120 }
  );

  useEffect(() => {
    if (!dragFree) return;
    const unsubscribeX = x.onChange(run);
    return () => unsubscribeX();
  }, []);

  const handleNext = () => {
    if (page >= maxPage) return animate(x, calcX(maxPage));
    const newValue = page >= maxPage ? maxPage : page + 1;
    setPage(newValue);
  };
  const handlePrev = () => {
    if (page <= minPage) return animate(x, calcX(0));
    const newValue = page <= minPage ? minPage : page - 1;
    setPage(newValue);
  };

  const goTo: IDotsFunciton["goTo"] = (page: number) => {
    if (page < minPage || page > maxPage) return;
    setPage(page);
  };

  const handleDragEnd: MotionProps["onDragEnd"] = (e, { offset }) => {
    if (dragFree) return;
    if (offset.x > wrapperWidth / 2) {
      handlePrev();
    } else if (offset.x < -wrapperWidth / 2) {
      handleNext();
    } else {
      animate(x, calcX(page));
    }
  };
  useEffect(() => {
    const controls = animate(x, calcX(page));
    return controls.stop;
  }, [page]);

  return (
    <>
      {/* wrapper */}
      <div ref={wrapperRef} className={className}>
        {/* container */}
        <Motion.div
          ref={containerRef}
          className=" w-full h-full flex overflow-hidden relative"
        >
          <>
            {/* children */}
            <AnimatePresence>
              {newChildren.map((item, index) => {
                return (
                  <Motion.div
                    key={index}
                    className=" w-full h-full inline-block flex-none"
                    style={{ left: (index + 1) * wrapperWidth, x }}
                    drag="x"
                    onDragEnd={handleDragEnd}
                    dragConstraints={{ left: maxLeft, right: maxRight }}
                  >
                    {item}
                  </Motion.div>
                );
              })}
            </AnimatePresence>

            {/* prev node */}
            {typeof prev === "function" ? prev?.({ handlePrev }) : prev}
            {/* next node */}
            {typeof next === "function" ? next?.({ handleNext }) : prev}
            {/* dots node */}
            {typeof dots === "function"
              ? dots?.({ childrenCount, active: page, goTo, percent })
              : dots}
          </>
        </Motion.div>
      </div>
    </>
  );
}
