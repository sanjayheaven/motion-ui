import { AnimatePresence, MotionProps, useMotionValue } from "framer-motion";
import { motion as Motion, animate } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { isArray } from "../_common/utils/bool";
import { useInterval, useSize, useThrottleFn } from "ahooks";
import { ICarouselProps, IDotsFunciton } from "./type";

export default function Carousel({
  children,
  className = "",
  dragFree = false,
  autoplay = false,
  interval = 3000,
  next,
  prev,
  dots,
  onChange,
}: ICarouselProps) {
  const [page, setPage] = useState(0); // from 0
  const newChildren = useMemo(
    () => (isArray(children) ? children : [children]),
    [children]
  );
  const childrenCount = useMemo(() => newChildren.length, newChildren);
  const newChildrenArrary = useMemo(
    () => new Array(childrenCount).fill(null).map((_, index: number) => index),
    [childrenCount]
  );

  const handleSetPage = (page: number) => {
    setPage(page);
    onChange?.({ page });
  };

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

  const calcXByPage = useCallback(
    (page: number) => page * -1 * wrapperWidth,
    [wrapperWidth]
  );

  const x = useMotionValue(0);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (!autoplay) return;
  }, [autoplay]);

  useInterval(() => {
    if (!autoplay) return;
    if (page == maxPage) {
      handleSetPage(minPage);
    }
    handleNext();
  }, interval);

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
    if (page >= maxPage) return animate(x, calcXByPage(maxPage));
    const newValue = page >= maxPage ? maxPage : page + 1;
    handleSetPage(newValue);
  };
  const handlePrev = () => {
    if (page <= minPage) return animate(x, calcXByPage(0));
    const newValue = page <= minPage ? minPage : page - 1;
    handleSetPage(newValue);
  };

  const goTo: IDotsFunciton["goTo"] = (page: number) => {
    if (page < minPage || page > maxPage) return;
    handleSetPage(page);
  };

  const handleDragEnd: MotionProps["onDragEnd"] = (e, { offset }) => {
    if (dragFree) return;
    if (offset.x > wrapperWidth / 2) {
      handlePrev();
    } else if (offset.x < -wrapperWidth / 2) {
      handleNext();
    } else {
      animate(x, calcXByPage(page));
    }
  };
  useEffect(() => {
    const controls = animate(x, calcXByPage(page));
    return controls.stop;
  }, [page]);

  return (
    <>
      {/* wrapper */}
      <div ref={wrapperRef} className={className}>
        {/* container */}
        <Motion.div
          ref={containerRef}
          className=" w-full h-full overflow-hidden flex relative"
        >
          <>
            {/* children */}
            <AnimatePresence>
              {newChildrenArrary.map((item, index) => {
                return (
                  <Motion.div
                    key={index}
                    className=" w-full h-full inline-block flex-none"
                    style={{ left: (index + 1) * wrapperWidth, x }}
                    drag="x"
                    onDragEnd={handleDragEnd}
                    dragConstraints={{ left: maxLeft, right: maxRight }}
                  >
                    {newChildren[item]}
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
