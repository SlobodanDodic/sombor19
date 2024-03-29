"use client";
import type { IHome } from "../../types";
import { useEffect, useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Typewriter from "../typewriter";
import SvgFilter from "./SvgFilter";

export function HeadingPage({ home }: IHome) {
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 520], [5, 50]);
  const y2 = useTransform(scrollY, [0, 550], [-5, 30]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <div className="absolute top-1 left-0 w-[90%] md:w-screen md:left-1/2 md:transform md:-translate-x-1/2 max-w-6xl flex">
        <div className="flex pl-3 ml-[5%] md:ml-[33%] mt-4 svg-parent">
          <h1 className="text-4xl md:text-[2.5rem] lg:text-5xl tracking-[1px] text-shadow-heading shadow-stone-900">
            <span className="relative text-[5rem] leading-none lg:text-8xl -mt-1 px-1 text-stone-700">
              <SvgFilter />
              <span
                className={`absolute letter-a-null rounded-lg top-0 left-0 w-full h-full bg-amber-600 transition-all duration-1000 -z-10 ${
                  isLoaded ? "letter-a" : ""
                }`}
              />
              {home.apartment.substring(0, 1)}
            </span>
          </h1>
        </div>
        <div className="flex mt-4">
          <Typewriter
            text={home.apartment.substring(1)}
            delay={200}
            className="text-4xl md:text-[2.5rem] lg:text-5xl tracking-[1px] -ml-3 text-shadow-heading shadow-stone-900 text-amber-600 z-0"
          />
        </div>
      </div>

      <div ref={ref} className="absolute w-screen -bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div
          className="flex flex-col justify-center items-center mx-10 mt-4"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <motion.div style={{ y: y1, x: 0 }} className="flex w-[90%] max-w-xs">
            <h1 className="text-4xl md:text-[2.5rem] lg:text-5xl tracking-[1px] font-extrabold text-amber-600 text-shadow-heading shadow-stone-900 italic">
              {home.welcome}
            </h1>
          </motion.div>
          <motion.div style={{ y: y2, x: 0 }} className="flex w-[90%] max-w-xs justify-end">
            <h1 className="text-4xl md:text-[2.5rem] lg:text-5xl tracking-[1px] font-extrabold text-amber-600 text-shadow-heading shadow-stone-900 italic">
              {home.sombor}
            </h1>
          </motion.div>
        </div>
      </div>
    </>
  );
}
