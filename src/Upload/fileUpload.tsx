import { forwardRef, RefObject, useEffect } from "react";
import { useImperativeHandle } from "react";
import { ImageSquare } from "phosphor-react";
import { IFileObj, IFileUploadProps } from "./type";
import FileListItem from "./ui/fileListItem";
import { UploadArea } from "./ui";
import { useFileUpload } from "./hooks";

function FileUpload(
  {
    width = 72,
    height = 72,
    fileList = [],
    uploadIcon = <ImageSquare size={32} />,
    maxCount = 1,
    multiple,
    showPreview = true,
    showDelete = true,
    showTopRightClose,
    showFileList = true,
    onPreview,
    onChange,
    onClick,
    className,
  }: IFileUploadProps,
  ref: RefObject<unknown>
) {
  // https://www.jianshu.com/p/7cdc223d8e97  ..
  const {
    fileObjList,
    // modal,
    // setModal,
    // previewItem,
    // setPreviewItem,
    deleteFileObj,
    imageChange,
    imageChangeDrop,
    uploadAreaRef,
  } = useFileUpload({
    fileList,
    maxCount,
    onChange,
  });

  useEffect(() => {
    console.log("fileUplaod render");
  });

  useImperativeHandle(ref, () => {
    return {
      callUpload: () => uploadAreaRef.current?.callUpload?.(),
    };
  });

  return (
    <>
      <div className={`flex items-center gap-3 ${className}`}>
        {/* list  */}

        {showFileList &&
          ((
            <>
              {fileObjList.map((fileObj: IFileObj, index: number) => {
                return (
                  <>
                    <FileListItem
                      key={fileObj.uuid}
                      onClick={() => onClick?.(fileObj, index)}
                      onPreview={() => {
                        if (onPreview) {
                          onPreview(fileObj);
                        }
                        // else {
                        //   setPreviewItem({ ...fileObj })
                        //   setModal({ ...modal, visible: true })
                        // }
                      }}
                      onDelete={() => deleteFileObj(index)}
                      fileObj={fileObj}
                      showPreview={showPreview}
                      showDelete={showDelete}
                      showTopRightClose={showTopRightClose}
                      width={width}
                      height={height}
                    />
                  </>
                );
              })}
            </>
          ) || <></>)}

        {/* {maxCount} */}
        {fileObjList.length < maxCount && (
          <>
            <UploadArea
              ref={uploadAreaRef}
              width={width}
              height={height}
              uploadIcon={uploadIcon}
              multiple={multiple}
              onDrop={imageChangeDrop}
              onChange={imageChange}
            />
          </>
        )}
      </div>

      {/* preview Modal */}
      {/* <PreviewModal src={previewItem?.url} {...modal} /> */}
    </>
  );
}

export default forwardRef(FileUpload);
