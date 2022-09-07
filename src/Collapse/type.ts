import { MotionProps } from "framer-motion"
import { ReactNode } from "react"

export interface ICollapseProps {
  header: ReactNode | (({ show }: { show: boolean }) => ReactNode)
  children?: ReactNode
  motion?: MotionProps
}
