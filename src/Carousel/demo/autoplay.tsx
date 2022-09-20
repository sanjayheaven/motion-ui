import { Carousel } from "headless-motion";
/**
 * Default use for Carousel
 */
export default function App() {
  return (
    <Carousel
      className=" w-full h-[300px]"
      autoplay
      dots={({ active, maxPage, goTo }) => {
        console.log(active);
        const arr = new Array(maxPage + 1).fill(null);
        return (
          <>
            <div className=" absolute bottom-2 left-1/2 translate-x-[-50%]">
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
