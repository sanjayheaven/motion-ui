import { useEffect, useState } from "react";

export function useMerge<T>(
  value: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [innerValue, setInnerValue] = useState<T>(value);

  useEffect(() => {
    setInnerValue(value);
  }, [value]);

  return [innerValue, setInnerValue];
}
