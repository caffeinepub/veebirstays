import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Users, Home, Bed, Bath } from 'lucide-react';

const propertyDetails = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'Prime Location',
    description: 'Easily accessible with nearby attractions'
  },
  {
    icon: Users,
    label: 'Guests',
    value: 'Up to 6 Guests',
    description: 'Perfect for families or groups'
  },
  {
    icon: Bed,
    label: 'Bedrooms',
    value: '3 Bedrooms',
    description: 'Comfortable sleeping arrangements'
  },
  {
    icon: Bath,
    label: 'Bathrooms',
    value: '2 Bathrooms',
    description: 'Modern and well-maintained'
  },
  {
    icon: Home,
    label: 'Property Type',
    value: 'Entire Home',
    description: 'Complete privacy for your stay'
  }
];

export default function PropertyInfo() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Property Details
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Everything you need to know about your stay
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {propertyDetails.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <Card
                key={index}
                className="group border-sage/20 bg-card shadow-md transition-all hover:shadow-xl hover:border-sage"
              >
                <CardHeader>
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-sage/10 transition-colors group-hover:bg-sage/20">
                    <Icon className="h-7 w-7 text-sage" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {detail.value}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium text-muted-foreground">
                    {detail.label}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground/80">
                    {detail.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="mx-auto mt-12 max-w-4xl border-sage/20 bg-sage/5 shadow-lg">
          <CardContent className="p-8">
            <h3 className="mb-4 text-2xl font-bold text-foreground">About This Space</h3>
            <p className="mb-4 text-base leading-relaxed text-muted-foreground">
              Welcome to Veebirstays, where comfort meets convenience. Our thoughtfully designed property offers
              the perfect retreat for your vacation or business trip. With spacious rooms, modern amenities, and
              a prime location, we ensure your stay is memorable.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Whether you're traveling with family, friends, or colleagues, our home provides the ideal setting
              for relaxation and creating lasting memories. Experience the warmth of a home away from home.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
