import { ReactNode } from "react"
import type { ICloseProps } from "../_common/components/close/type"

export type IAlertProps = Pick<ICloseProps, "children" | "onClose" | "motion">
