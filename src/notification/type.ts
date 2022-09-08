/** when content is a function type, expost those props outside for use */

import { MotionProps } from "framer-motion"
import { ReactNode } from "react"

interface IContentFunctionProps {
  /** a function to close item  */
  close?: Function
}

export type Placement = "top" | "bottom" | "topLeft" | "topRight" | "bottomLeft" | "bottomRight"

export interface INotificationConfig {
  /** motion  */
  motion?: MotionProps
  /** position or notification */
  placement?: Placement
  /** content of the notification */
  content?: ReactNode | (({}: IContentFunctionProps) => ReactNode)
  /** time for notification exist. Won't exit is set to zero */
  duration?: number
  /** callback when a notification item is clicked */
  onClick?: Function
  /** callback when a notification item is closed */
  onClose?: Function
  /** unique key for each notification*/
  key?: string
  /** */
  top?: number
}
