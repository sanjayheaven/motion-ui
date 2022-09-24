import { Slider } from "headless-motion";
import { useState } from "react";

export default function () {
  const [value, setValue] = useState(50);
  const min = 4;
  const max = 10;
  return (
    <>
      <Slider
        min={min}
        max={max}
        step={1}
        onChange={(value) => {
          // console.log(value, 111);
          setValue(value);
        }}
        onAfterChange={(value) => {
          console.log(value, "newValue");
        }}
        value={value}
        bar={
          <div className=" cursor-pointer  h-[20px] bg-[#f2f2f2] rounded-xl" />
        }
        trail={
          <div className=" cursor-pointer h-[20px] bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl "></div>
        }
        handle={
          <div className=" box-border cursor-pointer border-solid border-[1px] border-[#c4c4c4] w-[26px] h-[26px] rounded-[50%] bg-white"></div>
        }
      />
      <div className=" flex items-center justify-between mt-1">
        <div>min: {min}</div>
        <div>current: {value}</div>
        <div>max: {max}</div>
      </div>
    </>
  );
}
