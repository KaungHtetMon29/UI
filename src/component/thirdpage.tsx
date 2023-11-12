import Image from "next/image";
import cat1 from "@/assets/cat_(1).png";
import cat from "@/assets/cat.png";
import { motion } from "framer-motion";
import { Cat1, Discord, Opensea, Twitter } from "@/assets/cat";
function Thirdpage() {
  return (
    <motion.div
      className="bg-orange-200 w-full relative flex"
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <div className="z-[999] mx-auto tracking-wider lg:text-lg md:text-lg text-xs text-start lg:w-1/3 md:w-1/2 w-10/12 font-bold absolute inset-0 my-0 h-full left-0 right-0 md:top-[22rem] top-[14rem] bottom-0 justify-center items-center flex text-blue-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        totam nisi ad ducimus.Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Reprehenderit totam nisi ad ducimus.Lorem
      </div>
      <motion.div
        animate={{ y: ["4rem", "2rem", "4rem"] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="z-[999] lg:text-6xl text-4xl text-white font-bold absolute  my-auto h-full mx-0 lg:left-32 left-0 lg:top-[28rem] md:top-[42rem] top-[24rem]  w-full lg:justify-start justify-center items-center flex -scale-x-100 -rotate-90"
      >
        <Cat1 className="md:w-[30rem] md:h-[30rem] w-[15rem] h-[15rem]" />
      </motion.div>
      <Bg />
    </motion.div>
  );
}

export default Thirdpage;
export const Bg = () => {
  return (
    <div className="flex flex-col flex-shrink-0 gap-96 bg-orange-200  z-50 fixed">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="overflow-hidden">
          <motion.div
            className="flex gap-12"
            animate={{ x: [0, -295] }}
            transition={{
              duration: index % 2 === 0 ? 6 : 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          >
            <motion.div
              className="flex-shrink-0 "
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              <Image
                src={cat1}
                alt="cats"
                width={100}
                height={100}
                className="object-cover rotate-45"
              />
            </motion.div>
            <motion.div
              className="flex-shrink-0 "
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              <Image
                src={cat}
                alt="cats"
                width={100}
                height={100}
                className="object-cover -rotate-45"
              />
            </motion.div>
            <motion.div
              className="flex-shrink-0 "
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              <Image
                src={cat1}
                alt="cats"
                width={100}
                height={100}
                className="object-cover rotate-45"
              />
            </motion.div>
            <motion.div
              className="flex-shrink-0 "
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              <Image
                src={cat}
                alt="cats"
                width={100}
                height={100}
                className="object-cover -rotate-45"
              />
            </motion.div>
            <motion.div
              className="flex-shrink-0 "
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              <Image
                src={cat1}
                alt="cats"
                width={100}
                height={100}
                className="object-cover rotate-45"
              />
            </motion.div>
            <motion.div
              className="flex-shrink-0 "
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              <Image
                src={cat}
                alt="cats"
                width={100}
                height={100}
                className="object-cover -rotate-45"
              />
            </motion.div>
            <motion.div
              className="flex-shrink-0 "
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              <Image
                src={cat1}
                alt="cats"
                width={100}
                height={100}
                className="object-cover rotate-45"
              />
            </motion.div>
            <motion.div
              className="flex-shrink-0 "
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              <Image
                src={cat}
                alt="cats"
                width={100}
                height={100}
                className="object-cover -rotate-45"
              />
            </motion.div>
            <motion.div
              className="flex-shrink-0 "
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              <Image
                src={cat1}
                alt="cats"
                width={100}
                height={100}
                className="object-cover rotate-45"
              />
            </motion.div>
            <motion.div
              className="flex-shrink-0 "
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              <Image
                src={cat}
                alt="cats"
                width={100}
                height={100}
                className="object-cover -rotate-45"
              />
            </motion.div>
            <motion.div
              className="flex-shrink-0 "
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              <Image
                src={cat1}
                alt="cats"
                width={100}
                height={100}
                className="object-cover rotate-45"
              />
            </motion.div>
            <motion.div
              className="flex-shrink-0 "
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              <Image
                src={cat}
                alt="cats"
                width={100}
                height={100}
                className="object-cover -rotate-45"
              />
            </motion.div>
            <motion.div
              className="flex-shrink-0 "
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              <Image
                src={cat1}
                alt="cats"
                width={100}
                height={100}
                className="object-cover rotate-45"
              />
            </motion.div>
            <motion.div
              className="flex-shrink-0 "
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              <Image
                src={cat}
                alt="cats"
                width={100}
                height={100}
                className="object-cover -rotate-45"
              />
            </motion.div>
            <motion.div
              className="flex-shrink-0 "
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              <Image
                src={cat}
                alt="cats"
                width={100}
                height={100}
                className="object-cover rotate-45"
              />
            </motion.div>
            <motion.div
              className="flex-shrink-0 "
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              <Image
                src={cat1}
                alt="cats"
                width={100}
                height={100}
                className="object-cover -rotate-45"
              />
            </motion.div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};
