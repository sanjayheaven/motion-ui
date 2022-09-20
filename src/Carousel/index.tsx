import { AnimatePresence, MotionProps, MotionStyle } from "framer-motion";
import { motion as Motion, animate } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useInterval, useThrottleFn } from "ahooks";
import { ICarouselProps, IDotsFunciton } from "./type";
import { useWidth } from "./hooks/useWidth";
import { useChildren } from "./hooks/useChildren";
import { useTransformX } from "./hooks/useTransformX";

export default function Carousel({
  children,
  className = "",
  draggable = true,
  dragFree = false,
  loop = false,
  autoplay = false,
  interval = 3000,
  next,
  prev,
  dots,
  onChange,
}: ICarouselProps) {
  const [page, setPage] = useState(0); // from 0
  const [percent, setPercent] = useState(0);

  const { newChildren, childrenCount } = useChildren(children);

  const minPage = 0;
  const maxPage = useMemo(
    () => (childrenCount >= 1 ? childrenCount - 1 : 0),
    [childrenCount]
  );

  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const wrapperWidth = useWidth(wrapperRef);

  /** maxLeft should be negative */
  const maxLeft = useMemo(
    () => -maxPage * wrapperWidth,
    [maxPage, wrapperWidth]
  );
  const maxRight = 0;

  /** calc the transform x according to the page */
  const { x, minPageX, maxPageX } = useTransformX();

  const calcXByPage = useCallback(
    (page: number) => -page * wrapperWidth,
    [wrapperWidth]
  );

  const handleSetPage = (page: number) => {
    setPage(page);
    setPercent((page + 1 / childrenCount) * 100);
    onChange?.({ page });
  };

  /** autoplay interval */
  useInterval(() => {
    if (!autoplay) return;
    if (!loop && page == maxPage) return goTo(minPage);
    handleNext();
  }, interval);

  const { run } = useThrottleFn(
    () => {
      /** only for loop ,to show continue images */
      if (loop) {
        const currentX = x.get();
        // handleNext from maxPage to minPage
        if (currentX < maxLeft) {
          minPageX.set(childrenCount * wrapperWidth);
        }
        // handlePrev from minPage to maxPage
        else if (currentX > maxRight) {
          maxPageX.set(-childrenCount * wrapperWidth);
        } else {
          minPageX.set(0);
          maxPageX.set(0);
        }
      }
      setPercent(Math.abs(x.get() / maxLeft) * 100);
    },
    { wait: 120 }
  );

  useEffect(() => {
    const unsubscribeX = x.onChange(run);
    return () => unsubscribeX();
  }, []);

  const handleNext = () => {
    console.log(x.isAnimating(), "next");
    if (!loop && page == maxPage) return;
    if (childrenCount <= 1) return;
    animate(x, calcXByPage(page + 1), {
      type: "tween",
      onComplete: () => {
        if (x.get() < maxLeft) {
          x.set(maxRight);
          minPageX.set(0);
        }
      },
    });
    handleSetPage((page + 1) % childrenCount);
  };

  const handlePrev = () => {
    console.log(x.isAnimating(), "prev");
    if (!loop && page == minPage) return;
    if (childrenCount <= 1) return;
    animate(x, calcXByPage(page - 1), {
      type: "tween",
      onComplete: () => {
        if (x.get() > maxRight) {
          x.set(maxLeft);
          maxPageX.set(0);
        }
      },
    });
    handleSetPage((page - 1 + childrenCount) % childrenCount);
  };

  const goTo: IDotsFunciton["goTo"] = (page: number) => {
    if (page < minPage || page > maxPage) return;
    animate(x, calcXByPage(page), { type: "tween" });
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

  const calcStyle = (index: number): MotionStyle => {
    const style: MotionStyle = {};
    if (!loop) return style;
    if (index == minPage) {
      style.x = minPageX;
    } else if (index == maxPage) {
      style.x = maxPageX;
    }
    return style;
  };

  return (
    <>
      {/* wrapper */}
      <div
        ref={wrapperRef}
        className={className}
        style={{ position: "relative", overflow: "hidden" }}
      >
        <>
          {/* container */}
          <Motion.div
            ref={containerRef}
            drag={(draggable && "x") || undefined}
            dragConstraints={{ left: maxLeft, right: maxRight }}
            onDragEnd={handleDragEnd}
            className=" w-full h-full whitespace-nowrap "
            style={{ x }}
          >
            <>
              <AnimatePresence>
                {new Array(childrenCount).fill(null).map((item, index) => {
                  return (
                    <Motion.div
                      key={index}
                      className=" w-full h-full inline-block "
                      style={calcStyle(index)}
                    >
                      {newChildren[index]}
                    </Motion.div>
                  );
                })}
              </AnimatePresence>
            </>
          </Motion.div>

          {/* prev node */}
          {typeof prev === "function"
            ? prev?.({ handlePrev, active: page, maxPage, minPage })
            : prev}

          {/* next node */}
          {typeof next === "function"
            ? next?.({ handleNext, active: page, maxPage, minPage })
            : prev}

          {/* dots node */}
          {typeof dots === "function"
            ? dots?.({ goTo, active: page, percent, maxPage, minPage })
            : dots}
        </>
      </div>
    </>
  );
}
