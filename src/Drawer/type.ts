import { ReactNode } from "react";
import { IPopProps } from "../_common/components/pop";

export type Placement = "top" | "right" | "bottom" | "left";

export interface IDrawerProps extends IPopProps {
  placement?: Placement;
  children?: ReactNode;
}
