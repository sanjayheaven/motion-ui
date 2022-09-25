import { ReactNode } from "react";

type IMenuItem = {
  label?: ReactNode;
  value?: string;
};
export interface IMenuProps {
  items?: IMenuItem[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}
