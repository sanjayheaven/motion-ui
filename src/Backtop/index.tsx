import { useScroll } from "ahooks"
import { AnimatePresence, motion as Motion } from "framer-motion"
import { useEffect, useState } from "react"
import { fadeIn } from "../_common/utils/presets"
import { IBackTopProps } from "./type"

export default function BackTop({ children, height = 400, onClick, motion, bottom = 50, right = 100 }: IBackTopProps) {
  const scroll = useScroll()
  const [show, setShow] = useState(false)

  const { top = 0, left } = scroll || {}
  useEffect(() => {
    if (top <= height) return setShow(false)
    if (top >= height && show) return
    if (top >= height && !show) return setShow(true)
  }, [top, show])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    onClick?.()
  }
  return (
    <>
      <AnimatePresence>
        {show && (
          <Motion.div
            {...fadeIn}
            {...motion}
            onClick={() => handleClick()}
            className=" fixed"
            style={{ bottom, right }}
          >
            {children}
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
