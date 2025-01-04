import Introduction from '@/components/Introduction';
import Navbar from '@/components/Navbar';
import AboutMe from '@/components/AboutMe';
import Experience from "@/components/Experience"; // Ensure the file exists at this path or update the path
import Services from '@/components/Services';
import Portafolio from '@/components/Portafolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';



export default function Home() {
  return (
    <main className="pb-40">
      <Navbar />
      <Introduction />
      <AboutMe />
      <Experience />
      <Services />
      <Portafolio />
      <Testimonials />
      <Contact />
      <Footer />

    </main>
  );
}
