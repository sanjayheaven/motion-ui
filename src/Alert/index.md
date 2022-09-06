---
nav:
  path: /components
---

# Alert

something to describe

## Demo

```tsx
import React from "react"
import { Alert } from "motion-ui"

export default function Demo() {
  return (
    <Alert>
      {({ close }) => {
        return (
          <>
            <div className=" flex items-center justify-between bg-[pink]  p-2">
              <div>This is Motion Alert</div>
              <div className=" cursor-pointer" onClick={() => close()}>
                X
              </div>
            </div>
          </>
        )
      }}
    </Alert>
  )
}
```

## Props

|   Name   | Desc |                          Type                          | Default |
| :------: | :--: | :----------------------------------------------------: | :-----: |
| children |      | ReactNode or ({close}: {close: Function}) => ReactNode |    -    |
|  motion  |      |                      MotionProps                       |    -    |
| onClose  |      |                        Function                        |    -    |
