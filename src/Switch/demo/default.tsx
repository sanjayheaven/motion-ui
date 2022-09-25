import { Switch } from "headless-motion";
import { useState } from "react";
export default function () {
  const [checked, setChecked] = useState(false);
  return (
    <Switch
      checked={checked}
      onChange={setChecked}
      className=" relative cursor-pointer w-[60px] h-[30px] rounded-[15px] bg-[#d9d9d9]"
    >
      {({ checked }) => {
        return (
          <div
            className={` 
            ${(!checked && "translate-x-[2px]") || "translate-x-[32px]"} 
            transition 
            absolute top-1/2  translate-y-[-50%] w-[26px] h-[26px] rounded-[50%] bg-white`}
          ></div>
        );
      }}
    </Switch>
  );
}
