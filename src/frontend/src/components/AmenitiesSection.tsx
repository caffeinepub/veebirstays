import { Card, CardContent } from '@/components/ui/card';
import { Wifi, Utensils, Tv, Car, Wind, Coffee, Waves, Shield } from 'lucide-react';

const amenities = [
  {
    icon: Wifi,
    name: 'High-Speed WiFi',
    description: 'Stay connected with fast internet'
  },
  {
    icon: Utensils,
    name: 'Full Kitchen',
    description: 'Fully equipped for home cooking'
  },
  {
    icon: Tv,
    name: 'Smart TV',
    description: 'Entertainment at your fingertips'
  },
  {
    icon: Car,
    name: 'Free Parking',
    description: 'Convenient on-site parking'
  },
  {
    icon: Wind,
    name: 'Air Conditioning',
    description: 'Climate control for comfort'
  },
  {
    icon: Coffee,
    name: 'Coffee Maker',
    description: 'Start your day right'
  },
  {
    icon: Waves,
    name: 'Hot Water',
    description: '24/7 hot water supply'
  },
  {
    icon: Shield,
    name: 'Safe & Secure',
    description: 'Your safety is our priority'
  }
];

export default function AmenitiesSection() {
  return (
    <section className="bg-warm-white py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Amenities & Features
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Everything you need for a comfortable and convenient stay
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="mb-12 overflow-hidden rounded-2xl shadow-xl">
            <img
              src="/assets/generated/amenities-icons.dim_600x400.png"
              alt="Property amenities"
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <Card
                  key={index}
                  className="group border-terracotta/10 bg-card shadow-md transition-all hover:shadow-xl hover:border-terracotta/30"
                >
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-terracotta/10 transition-colors group-hover:bg-terracotta/20">
                      <Icon className="h-8 w-8 text-terracotta" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-foreground">
                      {amenity.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {amenity.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
