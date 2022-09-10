import Close from "../_common/components/close";
import { ITagProps } from "./type";

export default function Tag({ children, onClose, motion }: ITagProps) {
  return (
    <Close className=" inline-flex" onClose={onClose} motion={motion}>
      {children}
    </Close>
  );
}
