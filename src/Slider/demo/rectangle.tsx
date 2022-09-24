import { Slider } from "headless-motion";
export default function () {
  return (
    <>
      <Slider
        onChange={(value) => {
          console.log(value);
        }}
        value={60}
        bar={<div className="  h-[20px] bg-[#f2f2f2] " />}
        trail={
          <div className=" h-[20px] bg-gradient-to-r from-sky-500 to-indigo-500 "></div>
        }
        handle={
          <>
            <div className=" h-[30px] w-[16px] bg-white cursor-pointer border-solid border-[1px] border-[#c4c4c4] "></div>
          </>
        }
      />
    </>
  );
}
