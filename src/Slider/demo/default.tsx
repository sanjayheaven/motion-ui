import { Slider } from "headless-motion";

export default function () {
  return (
    <>
      <Slider
        onChange={(value) => {
          console.log(value);
        }}
        value={50}
        bar={<div className="  h-[20px] bg-[#f2f2f2] rounded-xl" />}
        trail={
          <div className=" h-[20px] bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl "></div>
        }
        handle={
          <div className=" box-border cursor-pointer border-solid border-[1px] border-[#c4c4c4] w-[26px] h-[26px] rounded-[50%] bg-white"></div>
        }
      />
    </>
  );
}
