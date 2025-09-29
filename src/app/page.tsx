import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import MyStack from "@/components/sections/my-stack";
import Work from "@/components/sections/work";

export default function Home() {

  return (
    <main>
      <Hero />
      <About />
      <MyStack />
      <Work />
      <Contact />
    </main>
  );
}
