---
nav:
  path: /components
---

# Backtop

something to describe

## Demo

```tsx
import React from "react"
import { BackTop, slideInBottom } from "motion-ui"

export default function Demo() {
  return (
    <BackTop
      motion={{ ...slideInBottom }}
      bottom={100}
      right={200}
      children={
        <>
          <div className=" rounded-[50%] opacity-40 hover:opacity-100 p-4 bg-[red] cursor-pointer">Up</div>
        </>
      }
    />
  )
}
```

## Props

|   Name   |             Desc             |    Type     | Default |
| :------: | :--------------------------: | :---------: | :-----: |
|  height  | scroll threshold height (px) |   number    |   400   |
|  bottom  |                              |   number    |   50    |
|  right   |                              |   number    |   100   |
| children |                              |  ReactNode  |    -    |
|  motion  |                              | MotionProps |    -    |
| onClick  |                              |  Function   |    -    |
