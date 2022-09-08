import { IFileObj } from "./type"

import { v4 as uuidv4 } from "uuid"

export const generateUuid = () => uuidv4()

export const mapUrlToFileObj = (url: string): IFileObj => {
  return { url, uuid: generateUuid() }
}
