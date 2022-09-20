import { MotionProps, MotionStyle, useMotionValue } from "framer-motion";
import { motion as Motion, animate } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { isArray } from "../_common/utils/bool";
import { useInterval, useSize, useThrottleFn } from "ahooks";
import { ICarouselProps, IDotsFunciton } from "./type";

export default function Carousel({
  children,
  className = "",
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
  const newChildren = useMemo(
    () => (isArray(children) ? children : [children]),
    [children]
  );
  const childrenCount = useMemo(() => newChildren.length || 0, newChildren);

  const newChildrenArrary = useMemo(
    () => new Array(childrenCount).fill(null).map((_, index: number) => index),
    [childrenCount]
  );

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

  /** maxLeft should be negative */
  const maxLeft = useMemo(
    () => -maxPage * wrapperWidth,
    [maxPage, wrapperWidth]
  );
  const maxRight = 0;

  /** calc the transform x according to the page */

  const x = useMotionValue(0);
  const minPageX = useMotionValue(0);
  const maxPageX = useMotionValue(0);

  const [percent, setPercent] = useState(0);

  const handleSetPage = (page: number) => {
    setPage(page);
    setPercent((page + 1 / childrenCount) * 100);
    onChange?.({ page });
  };

  useInterval(() => {
    if (!autoplay) return;
    if (!loop && page == maxPage) {
      goTo(minPage);
    }
    handleNext();
  }, interval);

  const calcXByPage = useCallback(
    (page: number) => page * -1 * wrapperWidth,
    [wrapperWidth]
  );

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
    // if loop, back to minPage, when current page is maxPage
    animate(x, calcXByPage(page + 1), {
      type: "tween",
      onComplete: () => {
        if (x.get() < maxLeft) {
          x.set(0);
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
    // if loop, go to maxPage, when current page is minPage
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
    animate(x, calcXByPage(page), { type: "tween" });
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
            drag="x"
            dragConstraints={{ left: maxLeft, right: maxRight }}
            onDragEnd={handleDragEnd}
            className=" w-full h-full whitespace-nowrap "
            style={{ x }}
          >
            <>
              {/* <AnimatePresence> */}
              {newChildrenArrary.map((item, index) => {
                return (
                  <Motion.div
                    key={index}
                    className=" w-full h-full inline-block "
                    style={calcStyle(index)}
                  >
                    {newChildren[item]}
                  </Motion.div>
                );
              })}
              {/* </AnimatePresence> */}
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
