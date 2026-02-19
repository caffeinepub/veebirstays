import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, ExternalLink } from 'lucide-react';

const AIRBNB_URL = 'https://www.airbnb.co.in/rooms/1582766952093298603';

export default function BookingCTA() {
  const handleBooking = () => {
    window.open(AIRBNB_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="booking-section" className="bg-gradient-to-br from-terracotta/5 via-sage/5 to-warm-white py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <Card className="mx-auto max-w-4xl overflow-hidden border-0 shadow-2xl">
          <CardContent className="p-8 sm:p-12">
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-terracotta/10">
                  <Calendar className="h-10 w-10 text-terracotta" />
                </div>
              </div>
              
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Ready to Book Your Stay?
              </h2>
              
              <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
                Check availability and reserve your dates on Airbnb. We can't wait to host you!
              </p>
              
              <Button
                size="lg"
                onClick={handleBooking}
                className="group bg-terracotta text-lg font-semibold text-white shadow-xl transition-all hover:bg-terracotta-dark hover:scale-105"
              >
                <span>Book Now on Airbnb</span>
                <ExternalLink className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <p className="mt-6 text-sm text-muted-foreground">
                Secure booking through Airbnb's trusted platform
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
