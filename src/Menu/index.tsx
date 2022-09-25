import { useMerge } from "../_common/hooks/useMerge";
import { IMenuProps } from "./type";

export default function Menu({
  items,
  value,
  onChange,
  className = "",
}: IMenuProps) {
  const [innerValue, setInnerValue] = useMerge(value);

  return (
    <div className={className}>
      {items.map((item) => {
        return <div>{item.label}</div>;
      })}
    </div>
  );
}
