import { AnimatePresence, motion, MotionProps } from "framer-motion"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { createRoot } from "react-dom/client"
import { IMessageConfig } from "./type"

/** auto generate key for each message item */
const generateKey = () => {
  return `motion-ui-message-${new Date().getTime()}`
}

/** default config  */
const MAX_COUNT = 0

const defaultConfig: IMessageConfig = {
  duration: 3,
  top: 8,
}

const defaultMotion: MotionProps = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -2 },
}

// let config
let destroy: (key?: IMessageConfig["key"]) => void = undefined
let add: (config: IMessageConfig) => void = undefined

function MessageContainer() {
  const [data, setData] = useState<IMessageConfig[]>([])
  /** remove messgae item by key */
  const remove = (key: string) => {
    setData((previousData) => {
      let previousItem = previousData.find((i) => i.key == key)
      if (previousItem) {
        previousItem?.onClose?.()
      }
      return previousData.filter((i) => i.key != key)
    })
  }

  useEffect(() => {
    /** override */
    destroy = (key?: IMessageConfig["key"]) => (key ? remove(key) : setData([]))

    add = (config: IMessageConfig) => {
      let { key, duration, onClose } = config
      setData((previousData) => [...previousData, config])
      /** duration equal 0, then won't remove */
      if (!duration) return
      setTimeout(() => remove(key), duration * 1000)
    }
  }, [])

  return createPortal(
    <div className=" z-[10001] fixed top-0 left-0 right-0 flex justify-center pointer-events-none">
      <div>
        <AnimatePresence initial={false}>
          {data.map((item, index) => {
            let { content, key, top } = item
            return (
              <motion.div key={key} {...defaultMotion} style={{ marginTop: top }}>
                <div className=" pointer-events-auto">
                  {typeof content == "function" ? content?.({ close: () => remove(key) }) : content}
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </div>,
    document.body,
  )
}

const creaetMessageWrapper = () => {
  let el = document.querySelector("#motion-ui-message-wrapper")
  if (!el) {
    el = document.createElement("div")
    el.className = "motion-ui-message-wrapper"
    el.id = "motion-ui-message-wrapper"
    document.body.append(el)
    let root = createRoot(el)
    root.render(<MessageContainer />)
  }
}
creaetMessageWrapper()

const message = {
  open: (config: IMessageConfig) => {
    add?.({ ...defaultConfig, key: generateKey(), ...config })
  },
  /** global destroy */
  destroy: (key?: IMessageConfig["key"]) => destroy?.(key),
  /** global config */
  // config: (config: IMessageConfig) => {
  //   for (let key in config) {
  //     defaultConfig[key] = config[key]
  //   }
  // },
}

export default message
