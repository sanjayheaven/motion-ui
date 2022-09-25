import React, { useState } from "react";
import { Progress, Button } from "headless-motion";

import { motion } from "framer-motion";
export default function Demo() {
  const [percent, setPercent] = useState(40);

  const handleSet = (_percent: number) => {
    if (_percent < 0) _percent = 0;
    if (_percent > 100) _percent = 100;
    console.log(_percent);
    setPercent(_percent);
  };

  return (
    <>
      <Progress
        className=" relative h-[10px] bg-[#f2f2f2] rounded-xl"
        percent={percent}
      >
        <motion.div
          animate={{ width: `${percent}%` }}
          className={` absolute h-[10px] bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl `}
        ></motion.div>
      </Progress>

      <div className=" flex items-center gap-2 mt-4">
        <Button
          onClick={() => handleSet(percent - 10)}
          className=" cursor-pointer p-2 px-4 bg-purple-300"
        >
          -
        </Button>
        <Button
          onClick={() => handleSet(percent + 10)}
          className=" cursor-pointer p-2 px-4 bg-purple-300"
        >
          +
        </Button>
      </div>
    </>
  );
}
