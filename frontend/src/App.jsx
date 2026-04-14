import { GALLERY_PHOTOS } from "./data/constants";
import useReveal from "./hooks/useReveal";
import useSpotlight from "./hooks/useSpotlight";
import useLightbox from "./hooks/useLightbox";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Stats from "./components/Stats";
import About from "./components/About";
import Techniques from "./components/Techniques";
import Process from "./components/Process";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import Extra from "./components/Extra";
import LeadForm from "./components/LeadForm";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Lightbox from "./components/Lightbox";

import "./styles/base.css";
import "./styles/header.css";
import "./styles/hero.css";
import "./styles/sections.css";
import "./styles/form.css";
import "./styles/contacts.css";
import "./styles/footer.css";
import "./styles/effects.css";
import "./styles/lightbox.css";
import "./styles/responsive.css";

export default function App() {
  useReveal();
  useSpotlight();
  const lightbox = useLightbox(GALLERY_PHOTOS.length);

  return (
    <div className="page">
      <div className="grain" />
      <div id="spotlight" className="spotlight" />

      <Header />

      <main>
        <Hero />
        <Marquee />
        <Stats />
        <About />
        <Techniques />
        <Process />
        <Gallery onPhotoClick={lightbox.open} />
        <Pricing />
        <Extra />
        <LeadForm />
        <Contacts />
      </main>

      <Footer />
      <Lightbox
        index={lightbox.index}
        onClose={lightbox.close}
        onPrev={lightbox.prev}
        onNext={lightbox.next}
      />
    </div>
  );
}
