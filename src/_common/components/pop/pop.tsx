import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { fadeIn } from "../../utils/presets"
import { useEventListener } from "ahooks"
import { IPopProps } from "./type"

/** Pop is the basic Component for Drawer & Modal */
export default function Pop({
  children,
  visible,
  onClose,
  maskClosable = true,
  keyboard = true,
  maskStyle,
}: IPopProps) {
  const [show, setShow] = useState(false)
  const handleChangeShow = (show: boolean) => {
    setShow(show)
    if (!show) onClose?.()
  }
  useEffect(() => handleChangeShow(visible), [visible])
  useEventListener("keydown", (e) => {
    if (!keyboard) return
    if (e.code == "Escape") {
      show && handleChangeShow(false)
    }
  })

  let dialog = (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            onClick={() => maskClosable && handleChangeShow(false)}
            {...fadeIn}
            className=" z-50 fixed top-0 bottom-0 left-0 right-0 bg-[#97979799] "
            style={maskStyle}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
  return createPortal(dialog, document.body)
}
