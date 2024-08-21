import { motion } from "framer-motion";

function App() {
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    shown: { opacity: 1, transition: { staggerChildren: 0.25 } },
  };
  const gridSquareVariants = { hidden: { opacity: 0 }, shown: { opacity: 1 } };

  return (
    <div className="flex flex-col gap-10 overflow-x-hidden">
      <motion.section
        variants={gridContainerVariants}
        initial="hidden"
        animate="shown"
        className="grid grid-cols-3 p-10 gap-10"
      >
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.div
            className="w-20 h-20 bg-stone-400 rounded-xl"
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { ease: "easeOut", duration: 1 },
            }}
          />
          <motion.div
            className="w-20 h-20 bg-stone-400 rounded-full"
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { ease: "easeOut", duration: 1 },
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
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.button
            className="relative bg-stone-100 px-4 py-2 rounded-2xl overflow-hidden text-black"
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
              initial={{ x: "-100%" }}
              variants={{
                hover: {
                  x: 0,
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
            dragTransition={{ bounceStiffness: 1000, bounceDamping: 50 }}
          >
            Grab me
          </motion.div>
        </motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        ></motion.div>
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        ></motion.div>
      </motion.section>
    </div>
  );
}

export default App;
