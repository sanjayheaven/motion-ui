---
nav:
  path: /components
---

# Carousel

## Demo

```tsx
import React from "react";
import { Carousel, Progress } from "headless-motion";

export default function Demo() {
  return (
    <>
      <Carousel
        className=" w-full h-[300px]"
        dots={({ active, childrenCount, goTo }) => {
          console.log(active);
          let arr = new Array(childrenCount).fill(null);
          return (
            <>
              <div className=" absolute bottom-2 left-1/2 translate-x-[-50%]">
                <div className=" mb-2">
                  <Progress
                    trail={
                      <div className=" bg-black h-[10px] rounded-t-[5px] rounded-b-[5px]"></div>
                    }
                    bar={
                      <div className=" bg-[#f2f2f2] h-[10px] rounded-t-[5px] rounded-b-[5px]"></div>
                    }
                    percent={Math.abs(active / 3) * 100}
                  />
                </div>
                <div className=" flex items-center gap-2">
                  {arr.map((_, index) => {
                    console.log(active == index);
                    return (
                      <div
                        onClick={() => goTo(index)}
                        className={`cursor-pointer w-[20px] h-[20px] rounded-[50%]
                              ${(active == index && "bg-black") || "bg-white"}
                            `}
                      ></div>
                    );
                  })}
                </div>
              </div>
            </>
          );
        }}
        prev={({ handlePrev }) => (
          <div className=" absolute left-2 top-[50%] translate-y-[-50%] ">
            <button className=" h-[100px]" onClick={() => handlePrev()}>
              Pre
            </button>
          </div>
        )}
        next={({ handleNext }) => (
          <button
            className=" absolute right-2 top-[50%] h-[100px] translate-y-[-50%] "
            onClick={() => handleNext()}
          >
            Next
          </button>
        )}
      >
        <div key={1} className="h-full bg-[red]">
          Slide
        </div>
        <div key={2} className="h-full bg-[blue]">
          Slide
        </div>
        <div key={3} className="h-full bg-[yellow]">
          Slide
        </div>
        <div key={4} className="h-full bg-[green]">
          Slide
        </div>
      </Carousel>
      <>Drag Free</>
      <Carousel
        className=" w-full h-[300px]"
        dragFree
        dots={({ active, childrenCount, goTo, percent }) => {
          let arr = new Array(childrenCount).fill(null);
          return (
            <>
              <div className=" absolute bottom-2 left-1/2 translate-x-[-50%]">
                <div className=" mb-2">
                  <Progress
                    trail={
                      <div className=" bg-black h-[10px] rounded-t-[5px] rounded-b-[5px]"></div>
                    }
                    bar={
                      <div className=" bg-[#f2f2f2] h-[10px] rounded-t-[5px] rounded-b-[5px]"></div>
                    }
                    percent={Math.abs(percent)}
                  />
                </div>
                <div className=" flex items-center gap-2">
                  {arr.map((_, index) => {
                    console.log(active == index);
                    return (
                      <div
                        onClick={() => goTo(index)}
                        className={`cursor-pointer w-[20px] h-[20px] rounded-[50%]
                              ${(active == index && "bg-black") || "bg-white"}
                            `}
                      ></div>
                    );
                  })}
                </div>
              </div>
            </>
          );
        }}
      >
        <div key={1} className="h-full bg-[red]">
          Slide
        </div>
        <div key={2} className="h-full bg-[blue]">
          Slide
        </div>
        <div key={3} className="h-full bg-[yellow]">
          Slide
        </div>
        <div key={4} className="h-full bg-[green]">
          Slide
        </div>
      </Carousel>
    </>
  );
}
```

## Props

|   Name   | Desc |    Type     | Default |
| :------: | :--: | :---------: | :-----: |
| children |      |  ReactNode  |    -    |
|  motion  |      | MotionProps |    -    |

## Reference

|      Name      |                       Link                        |
| :------------: | :-----------------------------------------------: |
|  React Slick   | [React Slick](https://react-slick.neostack.com/)  |
| Embla Carousel | [Embla Carousel](https://www.embla-carousel.com/) |
