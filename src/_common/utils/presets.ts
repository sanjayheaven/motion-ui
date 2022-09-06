import { MotionProps } from "framer-motion"

const transition: MotionProps["transition"] = {
  type: "spring",
  stiffness: 400,
  damping: 30,
  mass: 1,
  delay: 0,
}
const animate: MotionProps["animate"] = {
  x: 0,
  y: 0,
  opacity: 1,
  scale: 1,
  rotateY: 0,
  rotateX: 0,
}
const fadeIn: MotionProps = {
  initial: { opacity: 0 },
  exit: { opacity: 0 },
  animate,
  transition,
}
const scaleIn: MotionProps = {
  initial: { opacity: 0, scale: 0.5 },
  exit: { opacity: 0, scale: 0.5 },
  animate,
  transition,
}
const scaleInBottom: MotionProps = {
  initial: { opacity: 0, scale: 0.5, y: 50 },
  exit: { opacity: 0, scale: 0.5, y: 50 },
  animate,
  transition,
}
const flipHorizontal: MotionProps = {
  initial: { opacity: 1, rotateY: -180 },
  exit: { opacity: 1, rotateY: -180 },
  animate,
  transition,
}
const flipVertical: MotionProps = {
  initial: { opacity: 1, rotateX: -180 },
  exit: { opacity: 1, rotateX: -180 },

  animate,
  transition,
}
const slideInTop: MotionProps = {
  initial: { opacity: 0, y: -150 },
  exit: { opacity: 0, y: -150 },
  animate,
  transition,
}
const slideInLeft: MotionProps = {
  initial: { opacity: 0, x: -150 },
  exit: { opacity: 0, x: -150 },
  animate,
  transition,
}
const slideInRight: MotionProps = {
  initial: { opacity: 0, x: 150 },
  exit: { opacity: 0, x: 150 },
  animate,
  transition,
}
const slideInBottom: MotionProps = {
  initial: { opacity: 0, y: 150 },
  exit: { opacity: 0, y: 150 },
  animate,
  transition,
}

export {
  fadeIn,
  scaleIn,
  scaleInBottom,
  flipHorizontal,
  flipVertical,
  slideInTop,
  slideInLeft,
  slideInRight,
  slideInBottom,
}

export type IPreset =
  | "fadeIn"
  | "scaleIn"
  | "scaleInBottom"
  | "flipHorizontal"
  | "flipVertical"
  | "slideInTop"
  | "slideInLeft"
  | "slideInRight"
  | "slideInBottom"

// export const presetMotionOptions: {
//   label: string
//   value: IPreset
//   motion: MotionProps
// }[] = [
//   { label: "Fade In", value: "fadeIn", motion: fadeIn },
//   { label: "Scale In", value: "scaleIn", motion: scaleIn },
//   { label: "Scale In Bottom", value: "scaleInBottom", motion: scaleInBottom },
//   { label: "Flip Horizontal", value: "flipHorizontal", motion: flipHorizontal },
//   { label: "Flip Vertical", value: "flipVertical", motion: flipVertical },
//   { label: "Slide In Top", value: "slideInTop", motion: slideInTop },
//   { label: "Slide In Left", value: "slideInLeft", motion: slideInLeft },
//   { label: "Slide In Right", value: "slideInRight", motion: slideInRight },
//   { label: "Slide In Bottom", value: "slideInBottom", motion: slideInBottom },
// ]

// export const presetMotionObj: {
//   [key in IPreset]?: MotionProps
// } = presetMotionOptions.reduce((acc, item) => {
//   // @ts-ignore
//   acc[item.value] = item.motion
//   return acc
// }, {})
