"use client"

import { accent } from "@/styles/fonts";
import { data } from "@/data/data";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TextAnimate } from "../ui/text-animate";

const Hero = () => {
  const month = new Date().toLocaleString('default', { month: 'long' });
  const year = new Date().getFullYear();

  const targetRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, .2])
  const filter = useTransform(scrollYProgress, [0, 0.5], ["blur(0px)", "blur(5px)"])
  const scale = useTransform(scrollYProgress, [0, 1.2], [1, .6])

  function setVH() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  window.addEventListener('resize', setVH);
  window.addEventListener('load', setVH);

  return (
    <motion.section
      id="home"
      className="min-h-screen flex relative"
      style={{
        opacity,
      }}
      ref={targetRef}
    >
      <motion.div
        style={{ filter, scale }}
        className="bg-[#e2e2e2] text-black rounded-xl p-5 sm:p-10 lg:p-24 flex justify-between flex-col fixed inset-0 m-4 sm:m-8"
      >
        <Image
          src="/openToWork.png"
          alt="Open to work"
          width={250}
          height={250}
          className="absolute animate-spin bottom-1/2 md:bottom-5 left-1/2"
          style={{
            animationDuration: "8s",
          }}
        />
        <div className="flex items-center justify-between w-full">
          <p className={`text-3xl font-bold uppercase ${accent.className}`}>Fede.</p>
          <div className="flex items-center gap-4">
            <div className="bg-white py-1 pr-[.75rem] pl-4 rounded-full hidden md:flex items-center gap-2 shadow-lg border border-background/30">
              <p>Disponible para <span className="font-bold">{month} {year}</span></p>
              <div className="bg-green-500 animate-pulse size-3 rounded-full" />
            </div>
            <div>
              <Button
                asChild
              >
                <a
                  href="mailto:fede29833@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hablemos
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 lg:gap-14 flex-col lg:flex-row">
            <div
              className={`${accent.className} w-auto lg:w-2/3 uppercase font-black text-4xl lg:text-6xl xl:text-8xl tracking-tighter`}
            >
              <TextAnimate
                animation="slideUp"
                by="word"
                className="max-w-lg lg:max-w-full"
              >
                Fullstack Developer. Diseñador web.
              </TextAnimate>
              <h1 className="sr-only">
                Fullstack Developer
              </h1>
              <h2 className="sr-only">
                Diseñador web.
              </h2>
            </div>
            <div className="w-auto lg:w-1/3 self-auto lg:self-end">
              <TextAnimate
                animation="slideUp"
                by="word"
                className="text-xl sm:text-3xl"
              >
                Me gusta crear aplicaciones y sitios webs copados e intento que queden lindos.
              </TextAnimate>
            </div>
            <div className="bg-white py-1 pr-[.75rem] pl-4 rounded-full flex md:hidden items-center gap-2 shadow-lg border border-background/30 w-fit">
              <p>Disponible para <span className="font-bold">{month} {year}</span></p>
              <div className="bg-green-500 animate-pulse size-3 rounded-full" />
            </div>
          </div>
          <div className="flex gap-4 items-start lg:items-center justify-between flex-col lg:flex-row">
            <div className="flex gap-5">
              <ul className="flex gap-5 items-center">
                {
                  data.socials.map((social) => (
                    <li
                      key={social.name}
                    >
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 group"
                      >
                        <social.icon className="hover:fill-black/70 fill-black" />
                      </a>
                    </li>
                  ))
                }
              </ul>
              <Button
                variant="outline" className="bg-transparent"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              >
                Sobre mi
              </Button>
            </div>
            <svg
              width={59}
              height={103}
              viewBox="0 0 59 103"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="self-center lg:self-auto"
            >
              <motion.path
                initial={{ pathLength: 0, pathOffset: 1 }}
                animate={{ pathLength: 1, pathOffset: 0 }}
                transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
                d="M11.812 2c-.31 2.802-2.356 5.781-3.47 8.317-2.46 5.603-4.801 11.169-5.672 17.267-.595 4.162-2.338 17.439 4.075 17.542 4.93.08 10.284-4.105 14.734-5.92 2.292-.937 7.932-3.786 9.666-.69 2.782 4.969 3.87 11.958 4.35 17.515 1.281 14.782.607 29.786.607 44.613m-13.826-19.73c0-.639.367 1.226.606 1.819 1.166 2.9 3.39 5.587 5.309 8.014 1.321 1.672 2.706 3.243 3.883 5.028 1.035 1.57 1.714 3.317 2.728 4.894.135.21.422.717.763.404 1.77-1.622 3.15-3.815 4.838-5.545 3.67-3.76 7.217-7.678 11.055-11.269a73.311 73.311 0 004.22-4.265c.469-.516.975-1.024 1.146-1.706"
                stroke="#000"
                strokeWidth={4}
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Hero