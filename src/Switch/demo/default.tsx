import { Switch } from "headless-motion";
import { useState } from "react";
export default function () {
  const [checked, setChecked] = useState(false);
  return (
    <Switch
      checked={checked}
      onChange={setChecked}
      className=" relative cursor-pointer w-[60px] h-[26px] rounded-[15px] bg-[#d9d9d9]"
    >
      {({ checked }) => {
        return (
          <div
            className={` 
            ${
              (!checked && "left-0 translate-x-[2px]") ||
              "right-0 translate-x-[-2px]"
            } 
            transition-all duration-200
            absolute top-1/2  translate-y-[-50%] w-[20px] h-[20px] rounded-[50%] bg-white`}
          ></div>
        );
      }}
    </Switch>
  );
}
