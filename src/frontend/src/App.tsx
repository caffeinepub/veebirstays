import PropertyHero from './components/PropertyHero';
import PropertyGallery from './components/PropertyGallery';
import PropertyInfo from './components/PropertyInfo';
import AmenitiesSection from './components/AmenitiesSection';
import BookingCTA from './components/BookingCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <PropertyHero />
      <main>
        <PropertyGallery />
        <PropertyInfo />
        <AmenitiesSection />
        <BookingCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
