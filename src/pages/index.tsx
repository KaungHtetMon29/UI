import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

import Homepage from "@/component/hompagecomponent";
import Secpage from "@/component/secondpagecomponent";
import Thirdpage from "@/component/thirdpage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [startY, setStartY] = useState(0);
  const [deltaY, setDeltaY] = useState(0);
  var scrollvalue = scrollY;
  const [scroll, setscroll] = useState(false);

  const handleTouchStart = (e: any) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: any) => {
    const currentY = e.touches[0].clientY;
    const deltaYValue = startY - currentY;
    setDeltaY(deltaYValue);
  };

  const handleTouchEnd = () => {
    setScrollY((prevScrollY) => prevScrollY + deltaY);
    setDeltaY(0);
    setStartY(0);
  };
  useEffect(() => {
    console.log(Math.floor(scrollY / 90));
  }, [scrollY]);
  return (
    <div
      className="w-full relative flex"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onWheel={(e) => {
        scrollvalue = scrollvalue + e.deltaY;
        setScrollY(scrollvalue);
      }}
    >
      {Math.floor(scrollY / 90) <= 1 && <Homepage />}
      {Math.floor(scrollY / 90) > 1 && Math.floor(scrollY / 90) <= 3 && (
        <Secpage />
      )}
      {Math.floor(scrollY / 90) >= 4 && <Thirdpage />}
    </div>
  );
}
