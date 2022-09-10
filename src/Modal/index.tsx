import { motion as Motion } from "framer-motion";
import { Pop } from "../_common/components/pop";
import { slideInTop } from "../_common/utils/presets";
import { IModalProps } from "./type";

export default function Modal({
  children,
  visible,
  onClose,
  maskClosable,
  draggable,
  motion,
}: IModalProps) {
  return (
    <Pop
      visible={visible}
      onClose={onClose}
      maskClosable={maskClosable}
      maskStyle={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Motion.div
        {...(draggable && { drag: true })}
        onClick={(e) => e.stopPropagation()}
        {...(motion || slideInTop)}
      >
        {children}
      </Motion.div>
    </Pop>
  );
}
