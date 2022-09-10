---
nav:
  path: /components
---

# Collapse

## Demo

```tsx
import React from "react";
import { CaretRight } from "phosphor-react";
import { Collapse } from "headless-motion";

export default function Demo() {
  return (
    <Collapse
      header={({ show }) => {
        return (
          <>
            <div className="bg-[#fafafa] p-2 flex items-center gap-2">
              <CaretRight
                className={` transition-all ${
                  (show && " rotate-90") || " rotate-0"
                }`}
              />
              <div>This is header</div>
            </div>
          </>
        );
      }}
    >
      <div className=" p-2 px-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </div>
    </Collapse>
  );
}
```

## Props

|   Name   | Desc |                          Type                           | Default |
| :------: | :--: | :-----------------------------------------------------: | :-----: |
|  header  |      | ReactNode or ({ show }: { show: boolean }) => ReactNode |    -    |
| children |      |                        ReactNode                        |    -    |
|  motion  |      |                       MotionProps                       |    -    |
