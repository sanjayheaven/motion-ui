import { Carousel, Progress } from "headless-motion";
import { CaretLeft, CaretRight } from "phosphor-react";
/**
 * Default use for Carousel
 */
export default function App() {
  return (
    <Carousel
      className=" w-full h-[300px]"
      loop
      dots={({ active, maxPage, goTo }) => {
        console.log(active);
        const arr = new Array(maxPage + 1).fill(null);
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
                      key={index}
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
        <div className=" absolute left-2 top-[50%] translate-y-[-50%]">
          <div
            className=" flex items-center justify-center rounded-[50%] cursor-pointer h-[40px] w-[40px] bg-[#f2f2f2]"
            onClick={() => handlePrev()}
          >
            <CaretLeft size={26} />
          </div>
        </div>
      )}
      next={({ handleNext }) => (
        <div className=" absolute right-2 top-[50%] translate-y-[-50%] ">
          <div
            className=" flex items-center justify-center rounded-[50%] cursor-pointer h-[40px] w-[40px] bg-[#f2f2f2] "
            onClick={() => handleNext()}
          >
            <CaretRight size={26} />
          </div>
        </div>
      )}
    >
      <div
        key={1}
        className=" text-white text-5xl flex items-center justify-center h-full bg-gradient-to-r from-cyan-500 to-blue-500"
      >
        1
      </div>
      <div
        key={2}
        className=" text-white text-5xl flex items-center justify-center h-full bg-gradient-to-r from-sky-500 to-indigo-500"
      >
        2
      </div>
      <div
        key={3}
        className=" text-white text-5xl flex items-center justify-center h-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
      >
        3
      </div>
      <div
        key={4}
        className=" text-white text-5xl flex items-center justify-center h-full bg-gradient-to-r from-purple-500 to-pink-500"
      >
        4
      </div>
    </Carousel>
  );
}
