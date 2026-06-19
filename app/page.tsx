import About from "@/components/About";
import BeforeAfter from "@/components/BeforeAfter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Instagram from "@/components/Instagram";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import WhatsAppFab from "@/components/WhatsAppFab";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <BeforeAfter />
        <Gallery />
        <Instagram />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
