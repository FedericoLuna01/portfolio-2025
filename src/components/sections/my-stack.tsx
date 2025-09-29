"use client"

import { useScroll } from "motion/react"
import { useRef } from "react"
import Word from "../word"

const TEXT = "Mi forma preferida de empezar un proyecto es diseñando en Figma, luego desarrollo el frontend y backend con Next.js y aplico estilos con Tailwind CSS. Para la base de datos, utilizo PostgreSQL junto con Prisma."

const MyStack = () => {
  const ref = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.45", "center start"]
  })

  const words = TEXT.split(" ")

  return (
    <section className="bg-background relative pb-0 lg:pb-[15vh]">
      <div ref={ref} className="container mx-auto bg-background flex items-center justify-center flex-col">
        <div
          className="text-2xl lg:text-4xl xl:text-7xl px-10 md:p-0 font-bold uppercase max-w-md md:max-w-md xl:max-w-3xl text-center flex flex-wrap items-center justify-center overflow-hidden lg:overflow-visible"
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + (1 / words.length);

            return (
              <Word
                key={i}
                progress={scrollYProgress}
                range={[start, end]}
              >
                {word}
              </Word>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default MyStack
