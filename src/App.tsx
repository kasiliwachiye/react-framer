import { motion, useScroll } from "framer-motion";

function App() {
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    shown: { opacity: 1, transition: { staggerChildren: 0.25 } },
  };
  const gridSquareVariants = { hidden: { opacity: 0 }, shown: { opacity: 1 } };

  const { scrollYProgress: completionProgress } = useScroll();

  const svgIconVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(0, 0, 0, 0)",
    },
    shown: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(0, 0, 0, 1)",
    },
  };

  return (
    <div className="flex flex-col gap-10 overflow-x-hidden">
      <motion.section
        variants={gridContainerVariants}
        initial="hidden"
        animate="shown"
        className="grid grid-cols-1 p-4 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:p-10 lg:gap-10"
      >
        <motion.div
          variants={gridSquareVariants}
          className="bg-zinc-300 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.div
            className="w-1/3 h-1/3 bg-stone-400 rounded-xl"
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                ease: "easeOut",
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1,
              },
            }}
          />
          <motion.div
            className="w-1/3 h-1/3 bg-stone-400 rounded-full"
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                ease: "easeOut",
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1,
              },
            }}
          />
        </motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.div
            className="w-1/3 h-1/3 bg-rose-400 rounded-xl"
            animate={{
              scale: [1, 2, 2, 1],
              rotate: [0, 90, 90, 0],
              borderRadius: ["10%", "10%", "50%", "10%"],
            }}
            transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity }}
          />
        </motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-400 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.button
            className="relative bg-stone-200 px-4 py-2 rounded-2xl overflow-hidden text-black"
            whileHover="hover"
            whileTap={{ scale: 0.9 }}
            transition={{ bounceDamping: 10, bounceStiffness: 600 }}
          >
            <motion.span
              className="relative z-10"
              variants={{
                hover: { color: "white", transition: { duration: 0.5 } },
              }}
            >
              Hover Me
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-black rounded-xl"
              initial={{ y: "100%" }}
              variants={{
                hover: {
                  y: 0,
                  transition: { duration: 0.5, ease: "easeInOut" },
                },
              }}
            />
          </motion.button>
        </motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.div
            className="w-1/3 h-1/3 bg-sky-800 rounded-xl cursor-grab flex justify-center items-center text-white"
            drag
            dragConstraints={{ top: -50, bottom: 50, left: -50, right: 50 }}
            dragTransition={{ bounceStiffness: 1000, bounceDamping: 25 }}
          >
            Grab me
          </motion.div>
        </motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-50 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.div className="w-1/3 h-1/2 aspect-square bg-slate-400 rounded-3xl">
            <motion.div
              className="w-full h-full bg-slate-700 origin-bottom rounded-3xl"
              style={{ scaleY: completionProgress }}
            />
          </motion.div>
        </motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="bg-sky-200 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.svg
            className="w-1/3 h-1/3 stroke-slate-900 stroke-[0.25]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <motion.path
              variants={svgIconVariants}
              initial="hidden"
              animate="shown"
              transition={{
                duration: 2,
                ease: "easeIn",
                delay: 2,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1,
              }}
              d="M17.537 12.625a4.421 4.421 0 0 0 2.684 4.047 10.96 10.96 0 0 1-1.384 2.845c-.834 1.218-1.7 2.432-3.062 2.457-1.34.025-1.77-.794-3.3-.794-1.531 0-2.01.769-3.275.82-1.316.049-2.317-1.318-3.158-2.532-1.72-2.484-3.032-7.017-1.27-10.077A4.9 4.9 0 0 1 8.91 6.884c1.292-.025 2.51.869 3.3.869.789 0 2.27-1.075 3.828-.917a4.67 4.67 0 0 1 3.66 1.984 4.524 4.524 0 0 0-2.16 3.805m-2.52-7.432A4.4 4.4 0 0 0 16.06 2a4.482 4.482 0 0 0-2.945 1.516 4.185 4.185 0 0 0-1.061 3.093 3.708 3.708 0 0 0 2.967-1.416Z"
            />
          </motion.svg>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default App;
