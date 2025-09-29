"use client"
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'motion/react'
import { accent } from '@/styles/fonts'
import { useRef } from 'react'
import { Button } from '../ui/button'
import { TextAnimate } from '../ui/text-animate'

const About = () => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <section
      id="about"
      className="flex items-center justify-between gap-4 min-h-screen relative bg-background py-[15vh] px-4 xl:py-0 xl:px-0"
      ref={ref}
    >
      <div className='container flex flex-col xl:flex-row items-center justify-between gap-20 xl:gap-4 mx-auto'>
        <div className='max-w-3xl text-center xl:text-left '>
          <h1 className={`${accent.className} text-2xl md:text-4xl font-bold uppercase`}>
            <TextAnimate
              animation="slideUp"
              by="word"
              duration={200}
            >
              Soy Federico Luna, desarrollador web fullstack.
            </TextAnimate>
          </h1>
          <p className='text-xl md:text-3xl mt-4 text-[#e2e2e2]'>
            Tengo 22 años y soy de Zavalla, Argentina, actualmente estudio Tecnicatura en Programación en la Universidad Tecnológica Nacional.
          </p>
          <div className='mt-4 flex gap-2 flex-col items-center xl:items-start'>
            <p className='text-xl'>Te interesa saber mas sobre mi?</p>
            <Button className='w-fit'
              asChild>
              <a
                href="https://drive.google.com/file/d/1o1vbbI7M_yXd18wspwfGc0JSSxORK2Ge/view?usp=sharing"
                target='_blank'
              >
                Ver CV
              </a>
            </Button>
          </div>
        </div>
        <div className='relative'>
          <motion.div
            style={{ y }}
            className='absolute bg-[#e2e2e2] rounded-xl p-4 -top-28 -left-2 md:-left-28 text-center text-black font-semibold ring-2 md:ring-4 ring-border'>
            <p className='text-3xl md:text-6xl'>+20</p>
            <div className='w-full h-[1px] bg-black/70' />
            <p className='text-base md:text-xl text-muted'>Proyectos</p>
          </motion.div>
          <motion.div
            style={{ y: y2 }}
            className='absolute bg-background rounded-xl p-4 top-16 md:top-0 -right-[1vw] text-center text-white font-semibold ring-2 md:ring-4 ring-border'>
            <p className='text-3xl md:text-6xl'>+5</p>
            <div className='w-full h-[1px] bg-white/50' />
            <p className='text-base md:text-xl text-white/80'>Clientes</p>
          </motion.div>
          <motion.div
            style={{ y: y3 }}
            className='absolute bg-accent rounded-xl p-4 bottom-4 left-5 text-center text-white font-semibold ring-2 md:ring-4 ring-[#e2e2e2]'>
            <p className='text-3xl md:text-6xl'>+3</p>
            <div className='w-full h-[1px] bg-white/90' />
            <p className='text-base md:text-xl text-white/80 leading-tight'>Años de <br /> Experiencia</p>
          </motion.div>
          <Image
            src="/federico-luna.webp"
            alt="Federico Luna"
            height={350}
            width={350}
            className='rounded-xl shadow-2xl ring-4 ring-border'
          />
        </div>
      </div>
    </section>
  )
}

export default About