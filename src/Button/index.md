---
nav:
  path: /components
---

# Button

## Demo

```tsx
import React from "react";
import { Button } from "headless-motion";

export default function Demo() {
  return (
    <Button motion={{ whileTap: { scale: 0.9 } }}>
      <div className=" cursor-pointer bg-[red] p-1 text-white rounded-[2px] ">
        click me
      </div>
    </Button>
  );
}
```

## Props

|   Name   | Desc |    Type     | Default |
| :------: | :--: | :---------: | :-----: |
| children |      |  ReactNode  |    -    |
|  motion  |      | MotionProps |    -    |
