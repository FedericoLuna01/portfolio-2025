const Hero = () => {
  return (
    <section
      id="section1"
      className="flex items-center justify-center flex-col min-h-screen"
    >
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(165%_165%_at_50%_10%,#171717_40%,#63e_100%)]"></div>
      <div className='flex items-center gap-4'>
        <p className="text-[#63e] text-xl font-bold">
          Hola, soy Fede
        </p>
      </div>
      <p className="text-3xl">
        Me gusta hacer aplicaciones con NextJS, TailwindCSS y TypeScript
      </p>
    </section>
  )
}

export default Hero

