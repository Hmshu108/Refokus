import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ val }) {
  return (
    <motion.div
      whileHover={{ backgroundColor: val.hover === "true" && "#7443ff",padding:"25px" }}
      className={`bg-zinc-700 p-5 rounded-xl  ${val.w} min-h-[30rem] flex flex-col justify-between`}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>{val.p}</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-5">{val.h}</h1>
      </div>

      <div className="down w-full ">
        {val.start && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              Start a project
            </h1>
            <button className="rounded-full px-5 py-[2px] mt-5 border-2 border-zinc-100">
              Contact Us
            </button>
          </>
        )}

        {val.para && (
          <p className="text-sm text-zinc-400  font-medium">
            Explore what drive us our team.
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
