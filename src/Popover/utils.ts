import { CSSProperties } from "react"

/** be careful to change  */
export const calcStyle: (
  width: number,
  height: number,
) => {
  [key: string]: CSSProperties
} = (width: number, height: number) => {
  return {
    topLeft: {
      top: 0,
      transform: `translateY(-100%)`,
    },
    top: {
      top: 0,
      transform: `translateX(calc(${width / 2}px - 50%)) translateY(-100%)`,
    },
    topRight: {
      top: 0,
      transform: `translateX(calc(${width}px - 100%))  translateY(-100%)`,
    },
    leftTop: {
      top: 0,
      transform: `translateX(-100%)`,
    },
    left: {
      top: 0,
      transform: `translateX(-100%) translateY(calc(${height / 2}px - 50%)) `,
    },
    leftBottom: {
      bottom: 0,
      transform: `translateX(-100%)`,
    },
    bottomLeft: {},
    bottom: {
      transform: `translateX(calc(${width / 2}px - 50%))`,
    },
    bottomRight: {
      transform: `translateX(calc(${width}px - 100%)) `,
    },
    rightTop: {
      top: 0,
      transform: `translateX(${width}px) `,
    },
    right: {
      top: 0,
      transform: `translateX(${width}px) translateY(calc(${height / 2}px - 50%))`,
    },
    rightBottom: {
      bottom: 0,
      transform: `translateX(${width}px) `,
    },
  }
}
