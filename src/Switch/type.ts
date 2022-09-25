import { ReactNode } from "react";

interface ITailFunction {
  value: number;
}

type IMark = Record<number, ReactNode>;

export interface ISwitchProps {
  className?: string;
  /** Switch bar */
  /** checked */
  checked?: boolean;
  /** callback when check change */
  onChange?: (checked: boolean) => void;
  /** */
  children?: ReactNode | ((checked: { checked: boolean }) => ReactNode);
}
