import type { Placement } from "./type";

import {
  RefObject,
  ReactNode,
  useReducer,
  useMemo,
  useEffect,
  CSSProperties,
  MouseEventHandler,
} from "react";

export default function ContentContainer({
  placement = "bottomLeft",
  content,
  childrenRef,
  onMoustEnter,
  onMoustLeave,
}: {
  placement?: Placement;
  content?: ReactNode;
  childrenRef?: RefObject<HTMLDivElement>;
  onMoustEnter?: MouseEventHandler<HTMLDivElement>;
  onMoustLeave?: MouseEventHandler<HTMLDivElement>;
}) {
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);
  const scrollTop = document.documentElement.scrollTop;

  const { left, top, height, width }: Partial<DOMRect> = useMemo(() => {
    if (!childrenRef.current) return {};
    const info = childrenRef.current?.getBoundingClientRect() || {};
    return info;
  }, [childrenRef.current, _]);

  const positionStyle: {
    [key: string]: CSSProperties;
  } = useMemo(() => {
    return {
      bottom: {
        transform: `translateX(calc(${width / 2}px - 50%))`,
      },
      bottomLeft: {},
      bottomRight: {
        transform: `translateX(calc(${width}px - 100%)) `,
      },
      top: {
        top: top + scrollTop,
        transform: `translateX(calc(${width / 2}px - 50%)) translateY(-100%)`,
      },
      topLeft: {
        top: top + scrollTop,
        transform: `translateY(-100%)`,
      },
      topRight: {
        top: top + scrollTop,
        transform: `translateX(calc(${width}px - 100%))  translateY(-100%)`,
      },
      left: {
        transform: `translateX(-100%) translateY(calc(-${
          height / 2
        }px - 50%)) `,
      },
      leftTop: {
        top: top + scrollTop,
        transform: `translateX(-100%) `,
      },
      leftBottom: {
        transform: `translateX(-100%) translateY(-100%) `,
      },
      right: {
        transform: `translateX(${width}px) translateY(calc(-${
          height / 2
        }px - 50%)) `,
      },
      rightTop: {
        top: top + scrollTop,
        transform: `translateX(${width}px) `,
      },
      rightBottom: {
        transform: `translateX(${width}px) translateY(-100%) `,
      },
    };
  }, [placement, width, top, scrollTop]);

  useEffect(() => {
    const handler = () => forceUpdate();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return useMemo(
    () => (
      <div
        onMouseEnter={onMoustEnter}
        onMouseLeave={onMoustLeave}
        className=" absolute z-[10001]"
        style={{
          top: top + height + scrollTop,
          left,
          ...positionStyle[placement],
        }}
      >
        {content}
      </div>
    ),
    [content, top, height, scrollTop, left, placement]
  );
}
