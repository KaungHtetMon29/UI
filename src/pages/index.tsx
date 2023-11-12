import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { Cat1 } from "@/assets/cat";
import { motion } from "framer-motion";
import { easeInOut } from "framer-motion/dom";
import Homepage from "@/component/hompagecomponent";
import Secpage from "@/component/secondpagecomponent";
import Thirdpage from "@/component/thirdpage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  var scrollvalue = 0;
  const [scrollY, setScrollY] = useState(0);
  const [scroll, setscroll] = useState(false);

  useEffect(() => {
    console.log("rendered");
  }, []);
  return (
    <div
      className="w-full relative flex"
      onWheel={(e) => {
        scrollvalue = scrollvalue + e.deltaY;
        console.log(scrollvalue);
        scrollfunc(setscroll, scrollY, scroll, setScrollY);
      }}
    >
      {/* <Thirdpage /> */}
      {/* <Secpage /> */}
      <Homepage />
    </div>
  );
}
export const scrollfunc = (
  setscroll: any,
  scrollY: any,
  scroll: any,
  setScrollY: any
) => {
  let scrolldata = scrollY;
  if (!scroll) {
    setscroll(true);
  }
  scrolldata = scrolldata++;

  // setTimeout(() => {
  //   setscroll(false);
  //   setScrollY(scrolldata);
  //   console.log(scrolldata);
  // }, 500);
};
