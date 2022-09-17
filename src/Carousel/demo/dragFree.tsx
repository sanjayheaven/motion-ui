import { Carousel, Progress } from "headless-motion";

export default function App() {
  return (
    <Carousel
      className=" w-full h-[300px]"
      dragFree
      dots={({ percent }) => {
        return (
          <>
            <div className=" absolute bottom-2 left-1/2 translate-x-[-50%]">
              <div className=" w-[104px]">
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
            </div>
          </>
        );
      }}
    >
      <div
        key={1}
        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
      ></div>
      <div
        key={2}
        className="h-full bg-gradient-to-r from-sky-500 to-indigo-500"
      ></div>
      <div
        key={3}
        className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
      ></div>
      <div
        key={4}
        className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
      ></div>
    </Carousel>
  );
}
