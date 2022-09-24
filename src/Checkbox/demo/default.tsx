import { Checkbox } from "headless-motion";
import { useState } from "react";
import { Check } from "phosphor-react";

export default function () {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <Checkbox
        className=" cursor-pointer"
        checked={checked}
        onChange={setChecked}
        boxContent={<Check />}
      >
        <span className=" px-2">Checkbox</span>
      </Checkbox>
    </>
  );
}
