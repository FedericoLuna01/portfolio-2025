import React from 'react'
import { Button } from '@/components/ui/button'
import { accent } from '@/styles/fonts'
import { data } from '@/data/data'

const Contact = () => {
  const year = new Date().getFullYear()
  return (
    <section
      id="contact"
      className='relative h-[600px] bg-[#e2e2e2]'
      style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
      }}
    >
      <div className='relative h-[calc(100vh+600px)] -top-[100vh]'>
        <div className='sticky top-[calc(100vh-600px)] h-[600px]'>
          <div className='flex text-black items-center justify-center h-full flex-col'>
            <div className='flex flex-col items-center justify-center gap-4 h-full text-center '>
              <p className='text-xl'>Algún proyecto en mente?</p>
              <p className={`${accent.className} uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-9xl font-bold`}>Trabajemos juntos</p>
              <Button
                className='text-xl md:text-2xl lg:text-3xl px-8 py-6'
              >
                Contactame
              </Button>
              <div className='flex gap-2 md:gap-4 flex-col lg:flex-row'>
                {
                  data.socials.map((social, index) => (
                    <Button
                      asChild
                      key={index}
                      variant="link"
                      className='text-xl md:text-3xl'
                    >
                      <a
                        href={social.url}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {social.name}
                      </a>

                    </Button>
                  ))
                }
              </div>
            </div>
            <footer className='mt-auto p-4'>
              <p className='text-base text-center md:text-xl '>© {year} Fede. Todos los derechos reservados.</p>
            </footer>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact