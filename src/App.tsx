import { Hero } from './components/Hero';
import { About } from './components/About';
import { Fleet } from './components/Fleet';
import { Packages } from './components/Packages';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Fleet />
      <Packages />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
