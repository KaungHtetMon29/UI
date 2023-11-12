import { Cat1, Discord, Opensea, Twitter } from "@/assets/cat";
import { motion } from "framer-motion";
import { easeInOut } from "framer-motion/dom";
export default function Secpage() {
  const variants = {
    animate: {},
  };
  return (
    <div className="w-full h-full relative">
      <h1 className="z-[999] lg:text-[8rem] md:text-[5rem] text-[3rem] text-white font-bold absolute inset-0 my-0 h-full mx-0 left-0 right-0 md:top-80 top-[16rem] bottom-0 w-full justify-center items-center flex">
        Fluffy HuGs
      </h1>
      <motion.div
        animate={{ rotate: [40, -40, 40] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="z-[999] lg:text-6xl text-4xl text-white font-bold absolute inset-0 my-0 h-full mx-0 left-0 right-0 md:top-[40rem] top-[28rem] bottom-0 w-full justify-center items-center flex -scale-x-100 -rotate-90"
      >
        <Cat1 className="md:w-[30rem] md:h-[30rem] w-[15rem] h-[15rem]" />
      </motion.div>
      <img
        src="https://media.tenor.com/9vRAkntogEMAAAAd/background.gif" // Replace with the URL of your GIF
        alt="Background GIF"
        className="w-full h-full object-cover left-0 right-0 fixed"
      />
    </div>
  );
}
