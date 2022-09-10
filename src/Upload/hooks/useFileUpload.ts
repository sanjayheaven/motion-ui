import { ChangeEvent, DragEvent, useEffect, useRef } from "react";
// import { useModal, useSelectedItem } from "../../../hooks"
import { IFileObj, IFileUploadProps } from "../type";
import { generateUuid } from "../utils";
import useFileList from "./useFileList";

type IUseFileUploadProps = Pick<
  IFileUploadProps,
  "fileList" | "maxCount" | "onChange"
>;

export default function useFileUpload({
  onChange,
  fileList = [],
  maxCount,
}: IUseFileUploadProps) {
  // for internal use, name it as fileObjList
  const { fileList: fileObjList, setFileList: setFileObjList } = useFileList();
  // const { modal, setModal } = useModal()
  // const { selectedItem: previewItem, setSelectedItem: setPreviewItem } =
  //   useSelectedItem<Partial<IFileObj>>({})
  const uploadAreaRef = useRef(null);

  const update = (newFileObjList: IFileObj[], forceUpdate?: boolean) => {
    // compare to update
    let shouldUpdate = false;
    if (fileObjList.length != newFileObjList.length) {
      shouldUpdate = true;
    } else {
      // to compare if the item is all same
      for (const fileObj of fileObjList) {
        if (!newFileObjList.find((i) => i.uuid == fileObj.uuid)) {
          shouldUpdate = true;
          break;
        }
      }
    }
    if (!shouldUpdate && !forceUpdate) return;
    console.log(9999, "fileObjList change");

    // update
    setFileObjList(newFileObjList);
    onChange?.(newFileObjList);
    // update filelist
    while (fileList.length) {
      fileList.pop();
    }
    newFileObjList.forEach((fileObj) => {
      fileList.push(fileObj);
    });
  };

  useEffect(() => {
    // if (!fileList.length) return
    const newFileObjList = [
      ...fileList.map((fileObj) => {
        const uuid = fileObj.uuid || generateUuid();
        const url = fileObj.url || URL.createObjectURL(fileObj?.file!);
        return { ...fileObj, uuid, url };
      }),
    ].slice(0, maxCount);
    update(newFileObjList);
  }, [fileList]);

  const deleteFileObj = (index: number) => {
    update([...fileObjList.slice(0, index), ...fileObjList.slice(index + 1)]);
  };

  const imageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files || [];
    const newFileObjList = [
      ...fileObjList,
      ...[...Object.values(files)].map((file: File) => {
        return { file, uuid: generateUuid(), url: URL.createObjectURL(file) };
      }),
    ].slice(0, maxCount);
    update(newFileObjList);
  };
  const imageChangeDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files || [];
    const newFileObjList = [
      ...fileObjList,
      ...[...Object.values(files)].map((file: File) => {
        return { file, uuid: generateUuid(), url: URL.createObjectURL(file) };
      }),
    ].slice(0, maxCount);
    update(newFileObjList);
  };

  return {
    fileObjList,
    setFileObjList,
    // modal,
    // setModal,
    // previewItem,
    // setPreviewItem,
    imageChange,
    imageChangeDrop,
    deleteFileObj,
    uploadAreaRef,
  };
}
