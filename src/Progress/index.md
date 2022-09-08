---
nav:
  path: /components
---

# Progress

## Demo

```tsx
import React, { useState } from "react"
import { Progress, Button } from "headless-motion"

export default function Demo() {
  const [visible, setVisible] = useState(false)
  const [percent, setPercent] = useState(40)

  const handleSet = (_percent: number) => {
    if (_percent < 0) _percent = 0
    if (_percent > 100) _percent = 100
    console.log(_percent)
    setPercent(_percent)
  }

  return (
    <>
      <Progress
        bar={<div className="  h-[10px] bg-[#f2f2f2] rounded-xl" />}
        trail={<div className=" h-[10px] bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl "></div>}
        percent={percent}
      />
      <div className=" flex items-center gap-2 mt-4">
        <Button onClick={() => handleSet(percent - 10)} className=" cursor-pointer p-2 px-4 bg-purple-300">
          -
        </Button>
        <Button onClick={() => handleSet(percent + 10)} className=" cursor-pointer p-2 px-4 bg-purple-300">
          +
        </Button>
      </div>
    </>
  )
}
```

## Props

|  Name   |           Desc           |   Type    | Default |
| :-----: | :----------------------: | :-------: | :-----: |
| percent | percentage from 0 to 100 |  number   |    0    |
|   bar   |      bar child node      | ReactNode |         |
|  trail  |     trail child node     | ReactNode |         |

<!-- | active  | whether show animation in trail node |  boolean  |         | -->
