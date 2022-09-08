---
nav:
  path: /components
---

# File Upload

## Props

|       Name        | Desc |                    Type                    | Default |
| :---------------: | :--: | :----------------------------------------: | :-----: |
|                   |      |                                            |
|   showFileList    |      |                  boolean                   |  true   |
|    showDelete     |      |                  boolean                   |
|    showPreview    |      |                  boolean                   |
| showTopRightClose |      |                  boolean                   |
|     maxCount      |      |                   number                   |
|     fileList      |      |                 IFileObj[]                 |
|     onChange      |      |                                            |
|     onPreview     |      |        (fileObj: IFileObj) => void         |
|      onClick      |      | (fileObj: IFileObj, index: number) => void |

## Hooks

|    Name     |               Desc                |                   Return                   |
| :---------: | :-------------------------------: | :----------------------------------------: |
|             |                                   |                                            |
| useFileList | a convienent hook to use fileList | {fileList:IFileObj[],setFileList:Function} |

## File Type - IFileObj

| Name | Desc |  Type  | Default |
| :--: | :--: | :----: | ------- |
| url  |      | string |         |
| uuid |      |        |         |
| file |      |  File  |         |
