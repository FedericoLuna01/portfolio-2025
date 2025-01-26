import Hero from "@/components/hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <section
        id="section2"
        className="flex items-center justify-center flex-col gap-4 min-h-screen relative"
      >
        <div className="absolute inset-0 -z-10 h-full w-full transform rotate-180 items-center px-5 py-24 [background:radial-gradient(165%_165%_at_50%_10%,#171717_40%,#63e_100%)]"></div>
        section 2
      </section>
      <section
        id="section3"
        className="flex items-center justify-center flex-col gap-4 min-h-screen"
      >
        section 3
      </section>
      <section
        id="section4"
        className="flex items-center justify-center flex-col gap-4 min-h-screen"
      >
        section 4
      </section>
    </main>
  );
}
