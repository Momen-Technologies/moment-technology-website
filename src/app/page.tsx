import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

export default function Home() {
  return (
      <>
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Testimonials />
          <Contact />
        </main>
      </>
  );
}