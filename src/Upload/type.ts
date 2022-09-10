import { CSSProperties, ReactNode } from "react";

export interface IFileObj {
  url: string;
  uuid: string;
  file?: File;
}
export interface IFileUploadProps {
  uploadIcon?: ReactNode;
  showDelete?: boolean;
  showPreview?: boolean;
  showTopRightClose?: boolean;
  // showHide?: boolean
  width?: CSSProperties["width"]; // default 72px
  height?: CSSProperties["height"]; // default 72px
  showFileList?: boolean;
  maxCount?: number;
  multiple?: boolean;
  fileList?: IFileObj[];
  draggable?: boolean; // 可拖动的
  onChange?: (fileObjList: IFileObj[]) => void;
  onPreview?: (fileObj: IFileObj) => void;
  onClick?: (fileObj: IFileObj, index: number) => void; //
  className?: string;
}
