import { Input } from "headless-motion";
import { useState } from "react";
import { X } from "phosphor-react";
export default function () {
  const [value, setValue] = useState("");
  return (
    <>
      <span className=" inline-flex items-center px-2 py-1 border-[1px] border-[#d9d9d9] border-solid">
        <Input
          className=" min-w-[200px] placeholder:text-[#c4c4c4] "
          placeholder="input something here"
          value={value}
          onChange={setValue}
        ></Input>
        {(value && (
          <X
            onClick={() => setValue("")}
            size={16}
            weight="fill"
            color="#c4c4c4"
            className=" cursor-pointer"
          />
        )) || <></>}
      </span>

      <div className=" mt-1">{value}</div>
    </>
  );
}
