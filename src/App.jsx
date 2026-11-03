import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import PhilosophySection from './sections/PhilosophySection';
import ExperiencesSection from './sections/ExperiencesSection';
import DaySection from './sections/DaySection';
import GallerySection from './sections/GallerySection';
import ParentsSection from './sections/ParentsSection';
import CTASection from './sections/CTASection';

function App() {
  return (
    <div className="min-h-screen bg-[#F9F6EF] overflow-x-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <PhilosophySection />
        <ExperiencesSection />
        <DaySection />
        <GallerySection />
        <ParentsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
