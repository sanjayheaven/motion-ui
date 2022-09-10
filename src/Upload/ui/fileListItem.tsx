import { Eye, Trash, XCircle } from "phosphor-react";
import { useEffect, useState } from "react";
import { IFileObj, IFileUploadProps } from "../type";

interface IFileListItemProps {
  fileObj: IFileObj;
  showPreview: IFileUploadProps["showPreview"];
  showDelete: IFileUploadProps["showDelete"];
  showTopRightClose: IFileUploadProps["showTopRightClose"];
  width: IFileUploadProps["width"];
  height: IFileUploadProps["height"];
  onClick: () => void;
  onPreview: () => void;
  onDelete: () => void;
}
export default function FileListItem({
  fileObj,
  showPreview,
  showDelete,
  showTopRightClose,
  onClick,
  onDelete,
  onPreview,
  width,
  height,
}: IFileListItemProps) {
  const [showHide, setShowHide] = useState(false);
  useEffect(() => {
    console.log("item render");
  });
  return (
    <div
      onClick={() => onClick?.()}
      onMouseEnter={() => setShowHide(true)}
      onMouseLeave={() => setShowHide(false)}
      className=" relative"
      style={{ width, height }}
    >
      {/* top right close  */}
      {(showTopRightClose && (
        <XCircle
          onClick={() => onDelete?.()}
          size={20}
          className=" z-[1] absolute -top-[10px] -right-[10px] cursor-pointer bg-white rounded-[50%]"
        />
      )) || <></>}

      {/* image show */}
      <div className=" w-full h-full">
        <img
          src={fileObj.url}
          className=" object-contain w-full h-full"
          alt="upload"
        />
      </div>

      {/* hide shadow */}
      <div
        className={`z-0 absolute top-0 w-full h-full flex items-center justify-center gap-1 opacity-[0.6] bg-[gray] transition-all duration-200 text-white
          ${(showHide && "flex") || "hidden"}
          `}
      >
        {(showPreview && (
          <Eye
            onClick={() => onPreview?.()}
            size={20}
            className="cursor-pointer"
          />
        )) || <></>}

        {(showDelete && (
          <Trash
            onClick={() => onDelete?.()}
            size={20}
            className="cursor-pointer"
          />
        )) || <></>}
      </div>
    </div>
  );
}

// export {}
