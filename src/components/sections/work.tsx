"use client"

import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"

const Work = () => {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  })

  const borderRadius = useTransform(scrollYProgress, [0, 1], [1, 100])
  const margin = useTransform(scrollYProgress, [0, 1], [0, 20])

  return (
    <motion.section
      id="section3"
      className="min-h-screen bg-[#e2e2e2] relative flex items-center justify-center"
      ref={ref}
    >
      <motion.div
        style={{ borderRadius, marginLeft: margin, marginRight: margin }}
        className="bg-background inset-0 absolute"
      >
        WORK
      </motion.div>
    </motion.section>
  )
}

export default Work