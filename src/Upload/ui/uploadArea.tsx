import type { DragEvent, ChangeEvent, RefObject } from "react";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { IFileUploadProps } from "../type";

interface IUploadAreaProps {
  width: IFileUploadProps["width"];
  height: IFileUploadProps["height"];
  uploadIcon: IFileUploadProps["uploadIcon"];
  multiple: IFileUploadProps["multiple"];
  onDrop: (e: DragEvent<HTMLDivElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
function UploadArea(
  { width, height, onDrop, onChange, uploadIcon, multiple }: IUploadAreaProps,
  ref: RefObject<unknown>
) {
  const [dragFlag, setDragFlag] = useState(false);
  const uploadRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => {
    return {
      callUpload: () => uploadRef.current?.click(),
    };
  });

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setDragFlag(true);
      }}
      onDragEnter={() => setDragFlag(true)}
      onDragLeave={() => setDragFlag(false)}
      onDrop={(e) => {
        onDrop(e);
        setDragFlag(false);
      }}
      className="duration-200 transition-all border-[#e5e7eb] border-[1px] border-dashed cursor-pointer hover:border-[#202020] flex items-center justify-center"
      style={{ borderColor: (dragFlag && "#202020") || "", width, height }}
    >
      {/* this upload part can be partial,  */}
      <div
        className="w-full h-full flex items-center justify-center"
        onClick={() => uploadRef.current?.click()}
      >
        <>{uploadIcon}</>
        <input
          style={{ display: "none" }}
          multiple={multiple}
          id="file"
          name="file"
          type="file"
          ref={uploadRef}
          accept="image/png, image/jpeg, video/mp4,"
          onChange={(e) => onChange(e)}
        />
      </div>
    </div>
  );
}

export default forwardRef(UploadArea);
