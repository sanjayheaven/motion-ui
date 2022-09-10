import type { INotificationConfig, Placement } from "./type";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { slideInRight, slideInTop } from "../_common/utils/presets";
import { slideInBottom, slideInLeft } from "../_common/utils/presets";

/** auto generate key for each notification item */
const generateKey = () => {
  return `motion-ui-notification-${new Date().getTime()}`;
};

const placementMotionMap: {
  [key in Placement]?: INotificationConfig["motion"];
} = {
  topLeft: slideInLeft,
  topRight: slideInRight,
  bottomLeft: slideInLeft,
  bottomRight: slideInRight,
  top: slideInTop,
  bottom: slideInBottom,
};

/** default config  */
// const MAX_COUNT = 0;

const defaultConfig: INotificationConfig = {
  duration: 4.5,
  placement: "topRight",
  top: 24,
};

let destroy: () => void = undefined;
let remove: (key: string) => void = undefined;
let add: (config: INotificationConfig) => void = undefined;

function NotificationContainer() {
  const [data, setData] = useState<INotificationConfig[]>([]);

  useEffect(() => {
    /** remove all data */
    destroy = () => setData([]);

    /** remove messgae item by key */
    remove = (key: string) => {
      setData((previousData) => {
        const previousItem = previousData.find((i) => i.key == key);
        if (previousItem) {
          previousItem?.onClose?.();
        }
        return previousData.filter((i) => i.key != key);
      });
    };
    /** add item  */
    add = (config: INotificationConfig) => {
      const { key, duration } = config;
      setData((previousData) => [...previousData, config]);
      /** duration equal 0, then won't remove */
      if (!duration) return;
      setTimeout(() => remove(key), duration * 1000);
    };
  }, []);

  const topData = data.filter((i) => i.placement == "top");
  const bottomData = data.filter((i) => i.placement == "bottom");
  const topLeftData = data.filter((i) => i.placement == "topLeft");
  const topRightData = data.filter((i) => i.placement == "topRight");
  const bottomLeftData = data.filter((i) => i.placement == "bottomLeft");
  const bottomRightData = data.filter((i) => i.placement == "bottomRight");

  const createItemsContainer = (items?: typeof data) => {
    return (
      <AnimatePresence initial={false}>
        {items.map((item) => {
          const { content, key, placement, top } = item;
          let { motion } = item;
          motion = motion ? motion : placementMotionMap[placement];
          return (
            <Motion.div key={key} {...motion} style={{ marginTop: top }}>
              <div className=" pointer-events-auto">
                {typeof content == "function"
                  ? content?.({ close: () => remove(key) })
                  : content}
              </div>
            </Motion.div>
          );
        })}
      </AnimatePresence>
    );
  };

  return (
    <>
      <div className=" z-[10001] fixed top-0 left-0 right-0 pointer-events-none h-full w-full">
        <div className=" absolute top-0 w-full flex justify-center">
          <div>{createItemsContainer(topData)}</div>
        </div>

        <div className=" absolute bottom-0 w-full flex justify-center">
          <div>{createItemsContainer(bottomData)}</div>
        </div>

        <div className=" absolute top-0 left-0">
          {createItemsContainer(topLeftData)}
        </div>

        <div className=" absolute top-0 right-0">
          {createItemsContainer(topRightData)}
        </div>

        <div className=" absolute bottom-0 left-0">
          {createItemsContainer(bottomLeftData)}
        </div>

        <div className=" absolute bottom-0 right-0">
          {createItemsContainer(bottomRightData)}
        </div>
      </div>
    </>
  );
}

const creaetNotificationWrapper = () => {
  let el = document.querySelector("#motion-ui-notification-wrapper");
  if (!el) {
    el = document.createElement("div");
    el.className = "motion-ui-notification-wrapper";
    el.id = "motion-ui-notification-wrapper";
    document.body.append(el);
    const root = createRoot(el);
    root.render(<NotificationContainer />);
  }
};
creaetNotificationWrapper();

export default {
  open: (config: INotificationConfig) => {
    add?.({ ...defaultConfig, key: generateKey(), ...config });
  },
  close: (key: string) => {
    remove?.(key);
  },
  destroy,
  /** global config */
  // config: (config: INotificationConfig) => {
  //   for (let key in config) {
  //     defaultConfig[key] = config[key]
  //   }
  // },
};
