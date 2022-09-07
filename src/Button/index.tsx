import { motion as Motion } from "framer-motion"
import { IButtonProps } from "./type"

export default function Button({ children, motion }: IButtonProps) {
  return (
    <>
      <Motion.button {...motion} className="select-none bg-transparent border-0 p-0 focus:no-underline">
        {children}
      </Motion.button>
    </>
  )
}
