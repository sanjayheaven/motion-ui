---
nav:
  path: /components
---

# Popover

## Demo

```tsx
import React, { useState } from "react"
import { Popover, Button as BasicButton } from "headless-motion"

export default function Demo() {
  const [visible, setVisible] = useState(false)

  const content = (
    <>
      <div className=" w-[100px] h-[120px] bg-white drop-shadow-xl p-2">Hello, this is content!</div>
    </>
  )
  const buttonWidth = 70
  const Button = ({ children }: { children: ReactNode }) => {
    return (
      <BasicButton>
        <div
          className={` box-border p-2 border-solid border-[1px] border-[#f1f1f1] 
            cursor-pointer w-[${buttonWidth}px]`}
        >
          {children}
        </div>
      </BasicButton>
    )
  }
  return (
    <>
      <div>
        <div className={` ml-[${buttonWidth}px] flex gap-2 items-center`}>
          <Popover placement="topLeft" content={content}>
            <div>
              <Button> TL</Button>
            </div>
          </Popover>
          <Popover placement="top" content={content}>
            <div>
              <Button>Top</Button>
            </div>
          </Popover>
          <Popover placement="topRight" content={content}>
            <div>
              <Button>TR</Button>
            </div>
          </Popover>
        </div>
        <div className={` float-left w-[${buttonWidth}px] flex flex-col gap-2`}>
          <Popover placement="leftTop" content={content}>
            <div>
              <Button>LT</Button>
            </div>
          </Popover>
          <Popover placement="left" content={content}>
            <div>
              <Button>Left</Button>
            </div>
          </Popover>
          <Popover placement="leftBottom" content={content}>
            <div>
              <Button>LB</Button>
            </div>
          </Popover>
        </div>
        <div className={` ml-[${buttonWidth * 4 + 16}px] w-[${buttonWidth}px] flex flex-col gap-2`}>
          <Popover placement="rightTop" content={content}>
            <div>
              <Button> RT</Button>
            </div>
          </Popover>
          <Popover placement="right" content={content}>
            <div>
              <Button> Right</Button>
            </div>
          </Popover>
          <Popover placement="rightBottom" content={content}>
            <div>
              <Button> RB</Button>
            </div>
          </Popover>
        </div>
        <div className={` ml-[${buttonWidth}px] flex gap-2 items-center`}>
          <Popover placement="bottomLeft" content={content}>
            <div>
              <Button> BL</Button>
            </div>
          </Popover>
          <Popover placement="bottom" content={content}>
            <div>
              <Button> Bottom</Button>
            </div>
          </Popover>
          <Popover placement="bottomRight" content={content}>
            <div>
              <Button> BR</Button>
            </div>
          </Popover>
        </div>
      </div>
    </>
  )
}
```

## Props

|      Name       |                  Desc                  |             Type              | Default |
| :-------------: | :------------------------------------: | :---------------------------: | :-----: |
|     content     |              pop content               |           ReactNode           |    -    |
|    children     |              ReactElement              |         ReactElement          |
|    placement    |        position of pop content         |           ReactNode           |    -    |
|     trigger     |      trigger to show pop content       | hover,focus,click,contextMenu |    -    |
| mouseEnterDelay | time delay to set pop content show (s) |                               |    -    |
| mouseLeaveDelay | time delay to set pop content hide (s) |                               |   0.1   |
|     visible     | controll the visibility of pop content |            boolean            |  false  |
| onVisibleChange |  callback when pop content show/hide   |  (visible: boolean) => void   |  false  |

<Alert>
make sure children can accept onMouseEnter, onMouseLeave, onFocus, onBlur, onClick events
</Alert>
