import { motion } from "framer-motion"
import { Pop } from "../_common/components/pop"
import { slideInTop } from "../_common/utils/presets"
import { IModalProps } from "./type"

export default function Modal({ children, visible, onClose }: IModalProps) {
  return (
    <Pop
      visible={visible}
      onClose={onClose}
      maskStyle={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div onClick={(e) => e.stopPropagation()} {...slideInTop}>
        {children}
      </motion.div>
    </Pop>
  )
}
