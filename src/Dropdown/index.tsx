import type { IDropdownProps } from "./type";
import Popover from "../Popover";

export default function Dropdown({
  placement = "bottomLeft",
  overlay,
  children,
  trigger = "click",
}: IDropdownProps) {
  return (
    <Popover content={overlay} placement={placement} trigger={trigger}>
      {children}
    </Popover>
  );
}
