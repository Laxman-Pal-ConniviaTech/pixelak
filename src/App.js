import { useEffect, useState } from "react";
import { Suspense, lazy } from 'react';
import Lenis from "@studio-freight/lenis";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Animation from "./Components/Animation";
import Preloader from "./Components/Preloader";

const Hero = lazy(() => import("./Sections/Hero"));
const Services = lazy(() => import("./Sections/Services"));
const Clients = lazy(() => import("./Sections/Clients"));
const FAQs = lazy(() => import("./Sections/FAQs"));
const Contact = lazy(() => import("./Sections/Contact"));
const Footer = lazy(() => import("./Sections/Footer"));
const Top = lazy(() => import("./Components/Top"));


function App() {
  const [isLoading, setIsLoading] = useState(false);

  const lenis = new Lenis({
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {!isLoading ? <Preloader/> : (
        <Suspense fallback={<Preloader />}>
          <Animation>
            <Top />
            <Hero />
            <Services />
            <Clients />
            <FAQs />
            <Contact />
            <Footer />
          </Animation>
    </Suspense>
      )}
    </>
  );
}

export default App;
