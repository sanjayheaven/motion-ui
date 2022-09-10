---
nav:
  path: /components
---

# message

## Demo

```tsx
import React, { useState } from "react";
import { Button, message } from "headless-motion";

export default function Demo() {
  const [visible, setVisible] = useState(false);

  return (
    <Button
      onClick={() => {
        message.open({
          content: ({ close }) => {
            return (
              <div className=" p-2 bg-[pink] w-[300px] flex items-center justify-between">
                <div>This is Message!</div>
                <div className=" cursor-pointer" onClick={() => close()}>
                  X
                </div>
              </div>
            );
          },
        });
      }}
    >
      <div className=" cursor-pointer p-2 bg-purple-300">Message</div>
    </Button>
  );
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
