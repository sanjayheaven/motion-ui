---
nav:
  path: /components
---

# Tag

## Demo

```tsx
import React, { useState } from "react";
import { Tag } from "headless-motion";

export default function Demo() {
  return (
    <Tag
      children={({ close }) => {
        return (
          <>
            <div className=" text-white flex items-center justify-between gap-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 p-2">
              <div>This is Motion Tag</div>
              <div className=" cursor-pointer" onClick={() => close()}>
                X
              </div>
            </div>
          </>
        );
      }}
    />
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
