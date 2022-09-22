import { Input } from "headless-motion";
import { useState } from "react";

export default function () {
  const [value, setValue] = useState("");
  return (
    <>
      <Input
        className=" 
            min-w-[200px] py-1 border-b-[1px] border-[#f2f2f2] border-solid
        placeholder:text-[#c4c4c4]"
        placeholder="input something here"
        autoFocus={true}
        value={value}
        onChange={setValue}
      ></Input>

      <div className=" mt-1">{value}</div>
    </>
  );
}
