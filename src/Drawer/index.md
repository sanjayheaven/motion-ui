---
nav:
  path: /components
---

# Drawer

## Demo

```tsx
import React, { useState } from "react";
import { Drawer, Button } from "headless-motion";

export default function Demo() {
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState("right");

  const handleShow = (placement: string) => {
    console.log(placement, 1929929);
    setPlacement(placement);
    setVisible(true);
  };
  return (
    <>
      <div className=" flex items-center gap-4">
        {["Top", "Right", "Bottom", "Left"].map((item) => {
          return (
            <Button motion={{ whileTap: { scale: 0.9 } }}>
              <div
                onClick={() => handleShow(item.toLowerCase())}
                className=" bg-[red] p-2 w-max text-white cursor-pointer"
              >
                {item}
              </div>
            </Button>
          );
        })}
      </div>

      <Drawer
        visible={visible}
        onClose={() => setVisible(false)}
        placement={placement}
      >
        <div className="bg-white h-full drop-shadow-2xl">
          <div className=" py-2 px-4 flex items-center justify-between">
            <div className=" font-bold text-lg">hello</div>
            <div
              className=" cursor-pointer px-2"
              onClick={() => setVisible(false)}
            >
              X
            </div>
          </div>
          <div className=" p-4 max-w-[400px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
      </Drawer>
    </>
  );
}
```

## Props

|   Name    | Desc |           Type           | Default |
| :-------: | :--: | :----------------------: | :-----: |
| placement |      | top、right、bottom、left |  right  |
| children  |      |        ReactNode         |    -    |

## Pop Props

|     Name     |                   Desc                   |   Type    | Default |
| :----------: | :--------------------------------------: | :-------: | :-----: |
|   keyboard   |   allow press ESC to close the Drawer    |  boolean  |  true   |
| maskClosable | allow Click the mask to close the Drawer |  boolean  |  true   |
|   visible    |      control the Drawer show or not      | ReactNode |  false  |
|   onClose    |        Callback when Drawer close        | ReactNode |    -    |
|  maskStyle   |              style of Mask               | ReactNode |    -    |
|   children   |                                          | ReactNode |    -    |

<!-- |  motion   |      |       MotionProps        |    -    | -->
