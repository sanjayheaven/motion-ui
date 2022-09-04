import { AnimatePresence, motion as Motion } from "framer-motion"
import { useState } from "react"
import { fadeIn } from "../../utils/presets"
import { ICloseProps } from "./type"

export default function Close({
  children,
  onClose,
  // className = "",
  motion,
}: ICloseProps) {
  const [show, setShow] = useState(true)

  const handleChangeShow = (show: boolean) => {
    setShow(show)
    if (!show) onClose?.()
  }

  console.log(motion, 1828288)
  return (
    <>
      <AnimatePresence initial={false}>
        {show && (
          <Motion.div {...fadeIn} {...motion}>
            {typeof children == "function"
              ? children?.({
                  close: () => handleChangeShow(false),
                })
              : children}
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
