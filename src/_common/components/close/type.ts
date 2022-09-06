import { MotionProps } from "framer-motion"
import { ReactNode } from "react"

type IFunctionTypeProps = {
  close: Function
}
export interface ICloseProps {
  /** style of children */
  className?: string

  /** children in Tag */
  children?: ReactNode | (({ close }: IFunctionTypeProps) => ReactNode)
  /** callback when item close */
  onClose?: Function
  /** motion */
  motion?: MotionProps
}
