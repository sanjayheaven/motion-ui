import { ReactNode } from "react";

type IMark = Record<number, ReactNode>;

export interface ISwitchProps {
  className?: string;
  /** checked */
  checked?: boolean;
  /** callback when check change */
  onChange?: (checked: boolean) => void;
  /** child node, you can define handle here */
  children?: ReactNode | ((checked: { checked: boolean }) => ReactNode);
}
