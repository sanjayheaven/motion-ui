import { MotionProps } from "framer-motion"
import { ReactNode } from "react"

export interface ICloseProps {
  /** style of children */
  className?: string

  /** children in Tag */
  children?:
    | ReactNode
    | (({
        close,
      }?: {
        /** close item  */
        close: Function
      }) => ReactNode)
  /** callback when item close */
  onClose?: Function
  /** motion */
  motion?: MotionProps
}
