import { ReactNode } from "react"

interface IBarFunction {
  percent: number
}

export interface IProgressProps {
  /** percentage from 0 to 100 */
  percent?: number
  /** bar child node */
  bar?: ReactNode | (({}: IBarFunction) => ReactNode)
  /** trail child node */
  trail?: ReactNode
  /** whether show animation in trail node */
  active?: boolean
}
