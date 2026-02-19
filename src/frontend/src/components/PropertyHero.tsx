import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

export default function PropertyHero() {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-section');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[70vh] min-h-[500px] max-h-[800px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-property.dim_1920x800.png"
          alt="Veebirstays Property"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>
      
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          Veebirstays
        </h1>
        <p className="mb-2 flex items-center gap-2 text-lg text-white/90 sm:text-xl md:text-2xl">
          <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
          <span>Your Perfect Getaway Awaits</span>
        </p>
        <p className="mb-8 max-w-2xl text-base text-white/80 sm:text-lg">
          Experience comfort and tranquility in our thoughtfully designed space
        </p>
        <Button
          size="lg"
          onClick={scrollToBooking}
          className="bg-terracotta text-lg font-semibold text-white shadow-xl transition-all hover:bg-terracotta-dark hover:scale-105"
        >
          Check Availability
        </Button>
      </div>
    </section>
  );
}
