import Close from "../_common/components/close";
import { IAlertProps } from "./type";

const defaultMotion: IAlertProps["motion"] = {
  animate: { height: "max-content", overflow: "visible" },
  exit: { height: 0, overflow: "hidden", opacity: 0 },
};
export default function Alert({ children, onClose, motion }: IAlertProps) {
  return (
    <>
      <Close onClose={onClose} motion={motion || defaultMotion}>
        {children}
      </Close>
    </>
  );
}
