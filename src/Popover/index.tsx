import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useClickAway } from "ahooks";
import React from "react";
import ContentContainer from "./contentContainer";
import { IPopoverProps } from "./type";

export default function Popover({
  content,
  children,
  placement = "top",
  trigger = "hover",
  mouseEnterDelay = 0.1,
  mouseLeaveDelay = 0.1,
  visible = false,
  onVisibleChange,
}: IPopoverProps) {
  const [show, setShow] = useState(false);
  const childrenRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const delayTimerRef = useRef<any>(null);

  const handleChangeShow = useCallback((value: boolean) => {
    setShow(value);
    onVisibleChange?.(value);
  }, []);

  const handleOnMouseEnter = () => {
    delayTimerRef.current && clearTimeout(delayTimerRef.current);
    delayTimerRef.current = setTimeout(() => {
      handleChangeShow(true);
    }, mouseEnterDelay * 1000);
  };
  const handleOnMouseLeave = () => {
    delayTimerRef.current && clearTimeout(delayTimerRef.current);
    delayTimerRef.current = setTimeout(() => {
      handleChangeShow(false);
    }, mouseLeaveDelay * 1000);
  };

  useEffect(() => {
    handleChangeShow(visible);
  }, [visible]);

  // hover event can still improve
  useClickAway(() => handleChangeShow(false), [childrenRef], trigger);

  const cloneChildren = useMemo(() => {
    return React.cloneElement(children, {
      ref: childrenRef,
      onMouseEnter: () => trigger == "hover" && handleOnMouseEnter(),
      onMouseLeave: () => trigger == "hover" && handleOnMouseLeave(),
      onClick: () => trigger == "click" && handleChangeShow(!show),
      onFocus: () => trigger == "focus" && handleChangeShow(true),
      onBlur: () => trigger == "focus" && handleChangeShow(false),
      ...children.props,
    });
  }, [childrenRef, children]);

  return (
    <>
      {cloneChildren}
      {/* <Portal /> */}

      {createPortal(
        <AnimatePresence>
          {show && (
            <motion.div
              // onClick={() => trigger == "hover" && setShow(false)}
              ref={contentRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ContentContainer
                onMoustEnter={() => trigger == "hover" && handleOnMouseEnter()}
                onMoustLeave={() => trigger == "hover" && handleOnMouseLeave()}
                content={content}
                placement={placement}
                childrenRef={childrenRef}
              />
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
