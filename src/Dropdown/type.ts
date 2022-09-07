import { ReactElement, ReactNode } from "react"
import { IPopoverProps } from "../Popover/type"

export type Placement = "top" | "topLeft" | "topRight" | "bottom" | "bottomLeft" | "bottomRight"

export type Trigger = "hover" | "click"

export interface IDropdownProps {
  overlay?: ReactNode
  content?: IPopoverProps["content"]
  children?: IPopoverProps["children"]
  placement?: Placement
  trigger?: Trigger
}
