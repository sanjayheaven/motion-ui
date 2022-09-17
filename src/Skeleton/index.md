---
nav:
  path: /components
---

# Skeleton

## Demo

```tsx
import React, { useState } from "react";
import { Skeleton } from "headless-motion";

export default function Demo() {
  const [visible, setVisible] = useState(false);
  const [percent, setPercent] = useState(40);

  const handleSet = (_percent: number) => {
    if (_percent < 0) _percent = 0;
    if (_percent > 100) _percent = 100;
    console.log(_percent);
    setPercent(_percent);
  };

  return (
    <>
      <Skeleton>
        <div className=" w-[150px] h-[150px] rounded-[50%] bg-[#bebebe33]"></div>
      </Skeleton>
    </>
  );
}
```

## Props

|  Name   |           Desc           |   Type    | Default |
| :-----: | :----------------------: | :-------: | :-----: |
| percent | percentage from 0 to 100 |  number   |    0    |
|   bar   |      bar child node      | ReactNode |         |
|  trail  |     trail child node     | ReactNode |         |

<!-- | active  | whether show animation in trail node |  boolean  |         | -->
