import { IProgressProps } from "./type";

export default function Progress({
  children,
  percent,
  className = "",
}: IProgressProps) {
  return (
    <div className={`${className}`}>
      {typeof children === "function" ? children({ percent }) : children}
    </div>
  );
}
