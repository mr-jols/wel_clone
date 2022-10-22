import { useEffect, useRef, Fragment } from "react";
import gsap from "gsap";

export default function ChipMarqueeSection() {
  return (
    <section className="py-[4rem] max-w-[100vw] overflow-hidden">
      <div className="rotate-[-3deg] ">
        <ScrollChipContainer />
      </div>
    </section>
  );
}

const repeatArray: string[] = ["Deposit", "Investment", "Earnings", "Savings"];
const scrollChipsData: string[] = [...repeatArray, ...repeatArray, ...repeatArray, ...repeatArray]

function ScrollChipContainer() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const viewPortWidth = containerRef.current?.clientWidth!;
    const scrollWidth = containerRef.current?.scrollWidth!

    gsap.to(containerRef.current, {
      x: scrollWidth - 10 < viewPortWidth ? -1800 : viewPortWidth - scrollWidth,
      duration: 20,
      repeatDelay: 0,
      repeat: -1,
      ease: "linear"
    })
  }, []);

  return <div className="flex" ref={containerRef}>
    {scrollChipsData.map((item, index) => <Fragment key={index}> <ScrollChip child={item} /></Fragment>)}
  </div>
}

function ScrollChip({ child }: { child: string }) {
  return <div className=" 
   minitab:text-[1.8rem] minitab:px-[1.5rem] minitab:py-[0.7rem] 
 bg-primaryColors-purple200 text-[1rem] px-[1rem] py-[0.6rem] rounded-[1.8rem] font-[350]">
    {child}
  </div>
}