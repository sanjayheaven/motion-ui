import { MotionProps } from "framer-motion"
import { ReactNode } from "react"

export interface IButtonProps {
  children?: ReactNode
  motion?: MotionProps
  onClick?: Function
}
