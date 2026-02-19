import { Card } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const galleryImages = [
  {
    src: '/assets/generated/hero-property.dim_1920x800.png',
    alt: 'Property exterior view',
    title: 'Welcome to Veebirstays'
  },
  {
    src: '/assets/generated/hero-property.dim_1920x800.png',
    alt: 'Interior living space',
    title: 'Comfortable Living Area'
  },
  {
    src: '/assets/generated/hero-property.dim_1920x800.png',
    alt: 'Bedroom view',
    title: 'Cozy Bedrooms'
  }
];

export default function PropertyGallery() {
  return (
    <section className="bg-warm-white py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Explore Our Space
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Take a visual tour of our beautiful property
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index}>
                  <Card className="overflow-hidden border-0 shadow-lg">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-md transition-shadow hover:shadow-xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground">{image.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
