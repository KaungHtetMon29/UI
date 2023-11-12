import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    <motion.div
      key="main"
      className="w-full relative "
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onWheel={(e) => {
        scrollvalue = scrollvalue + e.deltaY;
        setScrollY(scrollvalue);
      }}
    >
      <AnimatePresence>
        {Math.floor(scrollY / 90) <= 1 && <Homepage key={"Homepage"} />}
      </AnimatePresence>
      <AnimatePresence>
        {Math.floor(scrollY / 90) > 1 && Math.floor(scrollY / 90) <= 3 && (
          <Secpage key="secpage" />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {Math.floor(scrollY / 90) >= 4 && <Thirdpage key="thirdpage" />}
      </AnimatePresence>
    </motion.div>
  );
}
