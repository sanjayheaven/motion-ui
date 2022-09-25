import type { ISwitchProps } from "./type";
import { useMerge } from "../_common/hooks/useMerge";

export default function Switch({
  checked,
  onChange,
  className = "",
  children,
}: ISwitchProps) {
  const [innerChecked, setInnerChecked] = useMerge(checked);
  return (
    <div
      className={className}
      onClick={() => {
        setInnerChecked(!innerChecked);
        onChange?.(!innerChecked);
      }}
    >
      {typeof children === "function" ? children?.({ checked }) : children}
    </div>
  );
}
