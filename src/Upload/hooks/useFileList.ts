import { useState } from "react"
import { IFileObj } from "../type"

export default function useFileList() {
  const [fileList, setFileList] = useState<IFileObj[]>([])
  return { fileList, setFileList }
}
