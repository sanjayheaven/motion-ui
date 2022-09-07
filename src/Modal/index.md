---
nav:
  path: /components
---

# Modal

## Demo

```tsx
import React, { useState } from "react"
import { Modal, Button } from "headless-motion"

export default function Demo() {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Button motion={{ whileTap: { scale: 0.9 } }}>
        <div onClick={() => setVisible(true)} className=" bg-[red] p-2 w-max text-white cursor-pointer">
          click me
        </div>
      </Button>

      <Modal visible={visible} onClose={() => setVisible(false)}>
        <div className=" bg-white">
          <div className=" py-2 px-4 flex items-center justify-between">
            <div className=" font-bold text-lg">Headless Motion</div>
            <div className=" cursor-pointer px-2" onClick={() => setVisible(false)}>
              X
            </div>
          </div>
          <div className=" p-4 w-[500px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </div>
          <div className=" flex gap-2 px-4 py-2 items-center justify-center">
            <Button motion={{ whileTap: { scale: 0.9 } }}>
              <div
                onClick={() => setVisible(false)}
                className=" border-solid border-[1px] border-[red] p-2 w-max cursor-pointer"
              >
                Cancel
              </div>
            </Button>
            <Button motion={{ whileTap: { scale: 0.9 } }}>
              <div className=" bg-[red] p-2 w-max text-white cursor-pointer">Confirm</div>
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}
```

## Props

|   Name   | Desc |   Type    | Default |
| :------: | :--: | :-------: | :-----: |
| children |      | ReactNode |    -    |

## Pop Props

|     Name     |                   Desc                   |   Type    | Default |
| :----------: | :--------------------------------------: | :-------: | :-----: |
|   keyboard   |   allow press ESC to close the Drawer    |  boolean  |  true   |
| maskClosable | allow Click the mask to close the Drawer |  boolean  |  true   |
|   visible    |      control the Drawer show or not      | ReactNode |  false  |
|   onClose    |        Callback when Drawer close        | ReactNode |    -    |
|  maskStyle   |              style of Mask               | ReactNode |    -    |
|   children   |                                          | ReactNode |    -    |
