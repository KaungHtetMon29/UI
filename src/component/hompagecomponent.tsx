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
      <h1 className="z-[999] lg:text-6xl text-[120px] text-blue-900 font-bold  fixed w-full p-8">
        Fluffy Hugs
      </h1>
      <div className="flex fixed gap-4 bottom-0 z-[999] p-8">
        <div className="lg:w-10 w-20">
          <Discord />
        </div>
        <div className="lg:w-10  w-20">
          <Twitter />
        </div>
        <div className="lg:w-10 w-20">
          <Opensea />
        </div>
      </div>
      <div className="bg-blue-900 fixed z-[999] p-10 text-white text-3xl rounded-l-3xl bottom-0 right-0">
        <p>View Collection</p>
      </div>
      <div className="relative">
        {Array.from({ length: 6 }).map((_, index1) => (
          <div key={index1} className="relative">
            {Array.from({ length: 3 }).map((_, index) => (
              <motion.div
                key={index}
                style={{
                  left: `${index1 * 200 + 450 * index - 450}px`, // Adjusted the left calculation
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
                  <Cat1 className="lg:h-[80vh] h-[90vh]" />
                ) : (
                  <Cat2 className="lg:h-[80vh] h-[90vh]" />
                )}
              </motion.div>
            ))}
          </div>
        ))}
        {Array.from({ length: 6 }).map((_, index1) => (
          <div key={index1} className="relative">
            {Array.from({ length: 3 }).map((_, index) => (
              <motion.div
                key={index}
                style={{
                  left: `${index1 * 200 + 450 * index - 450}px`, // Adjusted the left calculation
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
                  <Cat1 className="lg:h-[80vh] h-[90vh]" />
                ) : (
                  <Cat2 className="lg:h-[80vh] h-[90vh]" />
                )}
              </motion.div>
            ))}
          </div>
        ))}
        {Array.from({ length: 6 }).map((_, index1) => (
          <div key={index1} className="relative">
            {Array.from({ length: 3 }).map((_, index) => (
              <motion.div
                key={index}
                style={{
                  left: `${index1 * 200 + 150 * index - 450}px`, // Adjusted the left calculation
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
                  <Cat2 className="lg:h-[80vh] h-[90vh]" />
                ) : (
                  <Cat1 className="lg:h-[80vh] h-[90vh]" />
                )}
              </motion.div>
            ))}
          </div>
        ))}
        {Array.from({ length: 6 }).map((_, index1) => (
          <div key={index1} className="relative">
            {Array.from({ length: 3 }).map((_, index) => (
              <motion.div
                key={index}
                style={{
                  left: `${index1 * 200 + 150 * index - 450}px`, // Adjusted the left calculation
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
                  <Cat2 className="lg:h-[80vh] h-[90vh]" />
                ) : (
                  <Cat1 className="lg:h-[80vh] h-[90vh]" />
                )}
              </motion.div>
            ))}
          </div>
        ))}
        {Array.from({ length: 6 }).map((_, index1) => (
          <div key={index1} className="relative">
            {Array.from({ length: 3 }).map((_, index) => (
              <motion.div
                key={index}
                style={{
                  left: `${index1 * 200 + 150 * index - 450}px`, // Adjusted the left calculation
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
                  <Cat1 className="lg:h-[80vh] h-[90vh]" />
                ) : (
                  <Cat2 className="lg:h-[80vh] h-[90vh]" />
                )}
              </motion.div>
            ))}
          </div>
        ))}
        {Array.from({ length: 6 }).map((_, index1) => (
          <div key={index1} className="relative">
            {Array.from({ length: 3 }).map((_, index) => (
              <motion.div
                key={index}
                style={{
                  left: `${index1 * 200 + 150 * index - 450}px`, // Adjusted the left calculation
                  top: `${1350 + 150 * index}px`,
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
                  <Cat2 className="lg:h-[80vh] h-[90vh]" />
                ) : (
                  <Cat1 className="lg:h-[80vh] h-[90vh]" />
                )}
              </motion.div>
            ))}
          </div>
        ))}
        {Array.from({ length: 6 }).map((_, index1) => (
          <div key={index1} className="relative">
            {Array.from({ length: 3 }).map((_, index) => (
              <motion.div
                key={index}
                style={{
                  left: `${index1 * 200 + 150 * index - 450}px`, // Adjusted the left calculation
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
                  <Cat1 className="lg:h-[80vh] h-[90vh]" />
                ) : (
                  <Cat2 className="lg:h-[80vh] h-[90vh]" />
                )}
              </motion.div>
            ))}
          </div>
        ))}
        {Array.from({ length: 6 }).map((_, index1) => (
          <div key={index1} className="relative">
            {Array.from({ length: 3 }).map((_, index) => (
              <motion.div
                key={index}
                style={{
                  left: `${index1 * 200 + 150 * index - 450}px`, // Adjusted the left calculation
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
                  <Cat2 className="lg:h-[80vh] h-[90vh]" />
                ) : (
                  <Cat1 className="lg:h-[80vh] h-[90vh]" />
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
            <Cat1 className="lg:h-[80vh] h-[90vh]" />
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
            <Cat1 className="lg:h-[80vh] h-[90vh]" />
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
