import { Cursor } from "@/components/cursor";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Work } from "@/components/sections/work";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Cursor />
      <Nav />
      <main className="relative">
        <Hero />
        <Marquee />
        <Work />
        <Services />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
