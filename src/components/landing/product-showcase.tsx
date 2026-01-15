import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollFadeIn } from '@/components/scroll-fade-in';

export function ProductShowcase() {
  const interactionImage = PlaceHolderImages.find((img) => img.id === 'pawme-interaction');
  const playingImage = PlaceHolderImages.find((img) => img.id === 'pawme-playing');

  const showcases = [
    {
      image: interactionImage,
      title: 'Expressive & Interactive',
      description: 'PawMe features a dynamic display for a range of emotions. It purrs when you pet it and wags its tail on its screen when happy.',
    },
    {
      image: playingImage,
      title: 'Playful & Autonomous',
      description: 'Equipped with sensors, PawMe can navigate your home, play with its toys, and even find its charging dock on its own.',
    },
  ];

  return (
    <section className="bg-white dark:bg-card py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollFadeIn className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Designed for Joyful Companionship
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Every detail of PawMe is crafted to bring a smile to your face.
          </p>
        </ScrollFadeIn>
        <div className="grid gap-8 md:grid-cols-2">
          {showcases.map((item, index) => (
            <ScrollFadeIn key={item.title} delay={`${index * 150}ms`}>
              <Card className="h-full overflow-hidden transition-shadow hover:shadow-xl">
                {item.image && (
                  <div className="aspect-video relative">
                    <Image
                      src={item.image.imageUrl}
                      alt={item.image.description}
                      data-ai-hint={item.image.imageHint}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
