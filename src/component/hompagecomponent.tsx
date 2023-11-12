import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { Cat1, Cat2, Discord, Opensea, Twitter } from "@/assets/cat";
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
    <div className="relative w-full">
      <div className="flex fixed gap-4 bottom-0 z-[999] p-8">
        <div className="lg:w-10 md:w-40 w-40">
          <Discord />
        </div>
        <div className="lg:w-10 md:w-40  w-40">
          <Twitter />
        </div>
        <div className="lg:w-10 md:w-40 w-40">
          <Opensea />
        </div>
      </div>
      <div className="bg-blue-900 fixed z-[999] lg:p-10 md:p-36 p-24 text-white lg:text-3xl text-[60px] lg:rounded-l-3xl rounded-l-[5rem] bottom-0 right-0">
        <p>View Collection</p>
      </div>
      <div className="relative">
        {Array.from({ length: 1 }).map((_, index1) => (
          <div key={index1} className="relative">
            {Array.from({ length: 4 }).map((_, index) => (
              <motion.div
                key={index}
                style={{
                  left: `${index1 * 200 + 700 * index - 1000}px`, // Adjusted the left calculation
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
                  <Cat1 className="xl:h-[200vh] lg:h-[200vh] md:h-[200vh] h-[200vh]" />
                ) : (
                  <Cat2 className="xl:h-[200vh] lg:h-[200vh] md:h-[200vh] h-[200vh]" />
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
                  left: `${index1 * 200 + 700 * index - 1000}px`, // Adjusted the left calculation
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
                  <Cat1 className="xl:h-[200vh] lg:h-[200vh] md:h-[200vh] h-[200vh]" />
                ) : (
                  <Cat2 className="xl:h-[200vh] lg:h-[200vh] md:h-[200vh] h-[200vh]" />
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
                  left: `${index1 * 200 + 700 * index - 1000}px`, // Adjusted the left calculation
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
                  <Cat1 className="xl:h-[200vh] lg:h-[200vh] md:h-[200vh] h-[200vh]" />
                ) : (
                  <Cat2 className="xl:h-[200vh] lg:h-[200vh] md:h-[200vh] h-[200vh]" />
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
                  left: `${index1 * 200 + 700 * index - 1000}px`, // Adjusted the left calculation
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
                  <Cat2 className="xl:h-[200vh] lg:h-[200vh] md:h-[200vh] h-[200vh]" />
                ) : (
                  <Cat1 className="xl:h-[200vh] lg:h-[200vh] md:h-[200vh] h-[200vh]" />
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
                  left: `${index1 * 200 + 700 * index - 1000}px`, // Adjusted the left calculation
                  top: `${900 + 150 * index}px`,
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
                  <Cat1 className="xl:h-[200vh] lg:h-[200vh] md:h-[200vh] h-[200vh]" />
                ) : (
                  <Cat2 className="xl:h-[200vh] lg:h-[200vh] md:h-[200vh] h-[200vh]" />
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
                  left: `${index1 * 200 + 700 * index - 1000}px`, // Adjusted the left calculation
                  top: `${1700 + 150 * index}px`,
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
                  <Cat2 className="xl:h-[200vh] lg:h-[200vh] md:h-[200vh] h-[200vh]" />
                ) : (
                  <Cat1 className="xl:h-[200vh] lg:h-[200vh] md:h-[200vh] h-[200vh]" />
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
                  left: `${index1 * 200 + 700 * index - 1000}px`, // Adjusted the left calculation
                  top: `${1800 + 150 * index}px`,
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
                  <Cat1 className="xl:h-[200vh] lg:h-[200vh] md:h-[200vh] h-[200vh]" />
                ) : (
                  <Cat2 className="xl:h-[200vh] lg:h-[200vh] md:h-[200vh] h-[200vh]" />
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
                  left: `${index1 * 200 + 700 * index - 1000}px`, // Adjusted the left calculation
                  top: `${2200 + 150 * index}px`,
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
                  <Cat2 className="xl:h-[200vh] lg:h-[200vh] md:h-[200vh] h-[200vh]" />
                ) : (
                  <Cat1 className="xl:h-[200vh] lg:h-[200vh] md:h-[200vh] h-[200vh]" />
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
                  left: `${index1 * 200 + 700 * index - 1000}px`, // Adjusted the left calculation
                  top: `${2650 + 150 * index}px`,
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
                  <Cat2 className="xl:h-[200vh] lg:h-[200vh] md:h-[200vh] h-[200vh]" />
                ) : (
                  <Cat1 className="xl:h-[200vh] lg:h-[200vh] md:h-[200vh] h-[200vh]" />
                )}
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      {/* {Array.from({ length: 20 }).map((e, index) =>
        index % 2 === 0 ? (
          <motion.div
            style={{
              left: `${-150 + 150 * index}px`,
              top: `${-150 + 150 * index}px`,
            }}
            className={`absolute`}
            variants={variant}
            animate="animate"
          >
            <Cat1 className="xl:h-[200vh] lg:h-[200vh] md:h-[200vh] h-[200vh]" />
          </motion.div>
        ) : (
          <motion.div
            style={{
              left: `${-150 + 150 * index}px`,
              top: `${-150 + 150 * index}px`,
            }}
            className={`absolute`}
            variants={variant2}
            animate="animate"
          >
            <Cat1 className="xl:h-[200vh] lg:h-[200vh] md:h-[200vh] h-[200vh]" />
          </motion.div>
        )
      )} */}
    </div>
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
