import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import PhilosophySection from './sections/PhilosophySection';
import MovementMattersSection from './sections/MovementMattersSection';
import SixFoundationsSection from './sections/SixFoundationsSection';
import ChildUnderstandingSection from './sections/ChildUnderstandingSection';
import DailyRhythmSection from './sections/DailyRhythmSection';
import PeopleExpertiseSection from './sections/PeopleExpertiseSection';
import CentresSection from './sections/CentresSection';
import AdmissionsSection from './sections/AdmissionsSection';
import FAQSection from './sections/FAQSection';
import FinalCTASection from './sections/FinalCTASection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import MobileStoryTour from './components/MobileStoryTour';
import MobileBottomBar from './components/MobileBottomBar';

function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [storiesOpen, setStoriesOpen] = useState(false);
  const [storiesKey, setStoriesKey] = useState(0);
  const [selectedCentre, setSelectedCentre] = useState('nanakramguda');

  const handleOpenBooking = (centreId = 'nanakramguda') => {
    setSelectedCentre(centreId);
    setBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingOpen(false);
  };

  const handleOpenStories = () => {
    setStoriesOpen(true);
  };

  const handleCloseStories = () => {
    setStoriesOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F9F6EF] text-[#6B5B3E] overflow-x-hidden selection:bg-[#F2D58A]/50 selection:text-[#3D2F1F]">
      <Navigation
        onOpenBooking={handleOpenBooking}
        onOpenStories={handleOpenStories}
      />
      
      <main>
        {/* Hero Section: A Different Way to Begin */}
        <HeroSection
          onOpenBooking={handleOpenBooking}
          onOpenStories={handleOpenStories}
        />

        {/* Our Philosophy: A preschool designed around how young children learn */}
        <PhilosophySection onOpenBooking={handleOpenBooking} />

        {/* Why Movement Matters: Confidence begins long before words */}
        <MovementMattersSection />

        {/* Six Foundations: Growing in Every Way */}
        <SixFoundationsSection />

        {/* Understanding Every Child: Child Understanding Report */}
        <ChildUnderstandingSection />

        {/* A Morning at Rock Tumblerz: 7-part daily rhythm */}
        <DailyRhythmSection onOpenBooking={handleOpenBooking} />

        {/* People & Expertise: Dr. Ritika Srivastava, Dr. Saroj Arya, Our Educators */}
        <PeopleExpertiseSection />

        {/* Our Centres: Nanakramguda, Kokapet, Kismathpur */}
        <CentresSection onOpenBooking={handleOpenBooking} />

        {/* Admissions: Every child begins differently */}
        <AdmissionsSection onOpenBooking={handleOpenBooking} />

        {/* Frequently Asked Questions: Categorized 13 FAQs with AAP, NEP 2020, NCERT citations */}
        <FAQSection />

        {/* Come See Childhood in Motion */}
        <FinalCTASection onOpenBooking={handleOpenBooking} />
      </main>

      <Footer onOpenBooking={handleOpenBooking} />

      {/* Mobile Floating Bottom Thumb Dock */}
      <MobileBottomBar
        onOpenStories={handleOpenStories}
        onOpenBooking={handleOpenBooking}
      />

      {/* Global Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={handleCloseBooking}
        initialCentre={selectedCentre}
      />

      {/* 60-Sec Interactive Mobile Story Mode */}
      <MobileStoryTour
        isOpen={storiesOpen}
        onClose={handleCloseStories}
        onOpenBooking={handleOpenBooking}
      />
    </div>
  );
}

export default App;
