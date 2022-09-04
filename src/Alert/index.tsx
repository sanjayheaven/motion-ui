import Close from "../_common/components/close"
import { IAlertProps } from "./type"

export default function Alert({ children, onClose }: IAlertProps) {
  return (
    <>
      <Close
        onClose={onClose}
        motion={{
          animate: { height: "max-content", overflow: "visible" },
          exit: { height: 0, overflow: "hidden", opacity: 0 },
        }}
      >
        {children}
      </Close>
    </>
  )
}
