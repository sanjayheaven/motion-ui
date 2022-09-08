---
nav:
  path: /components
---

# notification

## Demo

```tsx
import React, { useState } from "react"
import { Button, message, notification } from "headless-motion"

export default function Demo() {
  const [visible, setVisible] = useState(false)
  const [placement, setPlacement] = useState("topRight")

  return (
    <Button
      className=" text-white cursor-pointer p-2 bg-purple-300 bg-gradient-to-r from-purple-500 to-pink-500"
      onClick={() => {
        notification.open({
          content: ({ close }) => {
            return (
              <div className=" text-white p-2 bg-gradient-to-r from-cyan-500 to-blue-500 w-[300px] flex items-center justify-between">
                <div>This is Notification!</div>
                <div className=" cursor-pointer" onClick={() => close()}>
                  X
                </div>
              </div>
            )
          },
        })
      }}
    >
      Notification
    </Button>
  )
}
```

## Props

|   Name    |            Desc             |             Type              | Default |
| :-------: | :-------------------------: | :---------------------------: | :-----: |
| placement |   position of pop content   |           ReactNode           |    -    |
|  trigger  | trigger to show pop content | hover,focus,click,contextMenu |    -    |
|  overlay  |         pop content         |           ReactNode           |    -    |

## Props

|   Name   |     Desc     |     Type     | Default |
| :------: | :----------: | :----------: | :-----: |
| content  | pop content  |  ReactNode   |    -    |
| children | ReactElement | ReactElement |         |
