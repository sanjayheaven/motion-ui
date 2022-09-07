import { ReactElement, ReactNode } from "react"

export type Placement =
  | "topLeft"
  | "top"
  | "topRight"
  | "leftTop"
  | "left"
  | "leftBottom"
  | "bottomLeft"
  | "bottom"
  | "bottomRight"
  | "rightTop"
  | "right"
  | "rightBottom"

export type Trigger = "hover" | "click" | "focus" | "contextMenu"

export interface IPopoverProps {
  /**  pop content  */
  content?: ReactNode
  /** ReactElement, make sure children can accept onMouseEnter, onMouseLeave, onFocus, onBlur, onClick events */
  children?: ReactElement
  /** position of pop content  */
  placement?: Placement
  /** trigger to show pop content  */
  trigger?: Trigger
  /** time delay to set pop content show */
  mouseEnterDelay?: number
  /** time delay to set pop content hide */
  mouseLeaveDelay?: number
  /** controll the visibility of pop content */
  visible?: boolean
  /** callback when pop content show/hide */
  onVisibleChange?: Function
}
