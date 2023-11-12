import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { Cat1, Cat2, Discord, Opensea, Twitter } from "@/assets/cat";
import cat1 from "@/assets/cat1.png";
import cat2 from "@/assets/cat2.png";
import { motion } from "framer-motion";
import { easeInOut } from "framer-motion/dom";

export default function Homepage() {
  const variant = {
    animate: {
      y: ["3rem", "-10rem", "3rem"],
      transition: {
        repeat: Infinity,
        duration: 3,
        ease: easeInOut,
      },
    },
  };
  const variant2 = {
    animate: {
      y: ["10rem", "3rem", "10rem"],
      transition: {
        repeat: Infinity,
        duration: 3,
        ease: easeInOut,
      },
    },
  };
  return (
    <motion.div
      className="relative w-full min-h-[200vh] min-w-[100vh] overflow-hidden"
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <div className="relative">
        {Array.from({ length: 1 }).map((_, index1) => (
          <div key={index1} className="relative">
            {Array.from({ length: 4 }).map((_, index) => (
              <motion.div
                key={index}
                style={{
                  left: `${index1 * 200 + 600 * index - 300}px`, // Adjusted the left calculation
                  top: `${-900 + 150 * index}px`,
                }}
                className={`absolute z-[${index1}]`}
                variants={
                  index % 2 === 0
                    ? index1 % 2
                      ? variant2
                      : variant
                    : index1 % 2
                    ? variant
                    : variant2
                }
                animate="animate"
              >
                {index % 2 ? (
                  <Image
                    className="relative"
                    src={cat1}
                    alt="cats"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                  />
                ) : (
                  // <Cat1 className="xl:h-[200vh] lg:h-[200vh] md:h-[200vh] h-[140vh]" />
                  <Image
                    className="relative"
                    src={cat2}
                    alt="cats"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                  />
                  // <Cat2 className="xl:h-[200vh] lg:h-[200vh] md:h-[200vh] h-[140vh]" />
                )}
              </motion.div>
            ))}
          </div>
        ))}
        {Array.from({ length: 1 }).map((_, index1) => (
          <div key={index1} className="relative">
            {Array.from({ length: 4 }).map((_, index) => (
              <motion.div
                key={index}
                style={{
                  left: `${index1 * 200 + 600 * index - 300}px`, // Adjusted the left calculation
                  top: `${-450 + 150 * index}px`,
                }}
                className={`absolute z-[${index1}]`}
                variants={
                  index % 2 === 0
                    ? index1 % 2
                      ? variant2
                      : variant
                    : index1 % 2
                    ? variant
                    : variant2
                }
                animate="animate"
              >
                {index % 2 ? (
                  <Image
                    className="relative"
                    src={cat1}
                    alt="cats"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                  />
                ) : (
                  // <Cat1 className="xl:h-[200vh] lg:h-[200vh] md:h-[200vh] h-[140vh]" />
                  <Image
                    className="relative"
                    src={cat2}
                    alt="cats"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                  />
                  // <Cat2 className="xl:h-[200vh] lg:h-[200vh] md:h-[200vh] h-[140vh]" />
                )}
              </motion.div>
            ))}
          </div>
        ))}
        {Array.from({ length: 1 }).map((_, index1) => (
          <div key={index1} className="relative">
            {Array.from({ length: 4 }).map((_, index) => (
              <motion.div
                key={index}
                style={{
                  left: `${index1 * 200 + 600 * index - 300}px`, // Adjusted the left calculation
                  top: `${-150 + 150 * index}px`,
                }}
                className={`absolute z-[${index1}]`}
                variants={
                  index % 2 === 0
                    ? index1 % 2
                      ? variant2
                      : variant
                    : index1 % 2
                    ? variant
                    : variant2
                }
                animate="animate"
              >
                {index % 2 ? (
                  <Image
                    className="relative"
                    src={cat1}
                    alt="cats"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                  />
                ) : (
                  // <Cat1 className="xl:h-[200vh] lg:h-[200vh] md:h-[200vh] h-[140vh]" />
                  <Image
                    className="relative"
                    src={cat2}
                    alt="cats"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                  />
                  // <Cat2 className="xl:h-[200vh] lg:h-[200vh] md:h-[200vh] h-[140vh]" />
                )}
              </motion.div>
            ))}
          </div>
        ))}
        {Array.from({ length: 1 }).map((_, index1) => (
          <div key={index1} className="relative">
            {Array.from({ length: 4 }).map((_, index) => (
              <motion.div
                key={index}
                style={{
                  left: `${index1 * 200 + 600 * index - 300}px`, // Adjusted the left calculation
                  top: `${450 + 150 * index}px`,
                }}
                className={`absolute z-[${index1}]`}
                variants={
                  index % 2 === 0
                    ? index1 % 2
                      ? variant2
                      : variant
                    : index1 % 2
                    ? variant
                    : variant2
                }
                animate="animate"
              >
                {index % 2 ? (
                  <Image
                    className="relative"
                    src={cat1}
                    alt="cats"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                  />
                ) : (
                  // <Cat2 className="xl:h-[200vh] lg:h-[200vh] md:h-[200vh] h-[140vh]" />
                  <Image
                    className="relative"
                    src={cat2}
                    alt="cats"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                  />
                  // <Cat1 className="xl:h-[200vh] lg:h-[200vh] md:h-[200vh] h-[140vh]" />
                )}
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
  {
    /* <motion.div
      style={{
        left: `${-10}vw`,
        top: `${0}vw`,
      }}
      className={`flex absolute`}
      variants={variant}
      animate="animate"
    >
      <Cat1 wandh="50vw" />
    </motion.div> */
  }
}
