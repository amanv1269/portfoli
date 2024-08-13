import { RiReactjsLine } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiThymeleaf } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-6xl text-cyan-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(3.0)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaBootstrap className="text-6xl text-purple-600" />
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaJava className="text-6xl text-red-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3.7rem"
            height="3.7rem"
            viewBox="0 0 24 24"
            className="text-6xl text-green-600"
          >
            <path
              fill="currentColor"
              d="M20.205 16.392c-2.469 3.289-7.741 2.179-11.122 2.338c0 0-.599.034-1.201.133c0 0 .228-.097.519-.198c2.374-.821 3.496-.986 4.939-1.727c2.71-1.388 5.408-4.413 5.957-7.555c-1.032 3.022-4.17 5.623-7.027 6.679c-1.955.722-5.492 1.424-5.493 1.424l-.143-.076c-2.405-1.17-2.475-6.38 1.894-8.059c1.916-.736 3.747-.332 5.818-.825c2.208-.525 4.766-2.18 5.805-4.344c1.165 3.458 2.565 8.866.054 12.21m.042-13.28a9.2 9.2 0 0 1-1.065 1.89a9.98 9.98 0 0 0-7.167-3.031C6.492 1.971 2 6.463 2 11.985a9.98 9.98 0 0 0 3.205 7.334l.22.194a.856.856 0 1 1 .001.001l.149.132A9.96 9.96 0 0 0 12.015 22c5.278 0 9.613-4.108 9.984-9.292c.274-2.539-.476-5.763-1.752-9.596"
            />
          </svg>
        </motion.div>

        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-6xl text-green-800" />
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoPostgresql className="text-6xl text-blue-600" />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiThymeleaf className="text-6xl text-green-700" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
