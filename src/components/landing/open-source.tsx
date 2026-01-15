import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollFadeIn } from '../scroll-fade-in';
import { Button } from '../ui/button';
import { Github } from 'lucide-react';

export function OpenSource() {
  const communityImage = PlaceHolderImages.find((img) => img.id === 'pawme-community');

  return (
    <section className="bg-white dark:bg-card py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollFadeIn>
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="relative aspect-video">
              {communityImage && (
                <Image
                  src={communityImage.imageUrl}
                  alt={communityImage.description}
                  data-ai-hint={communityImage.imageHint}
                  fill
                  className="rounded-xl object-cover shadow-lg"
                />
              )}
            </div>
            <div className="space-y-6">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Built by the Community, for the Community
              </h2>
              <p className="text-lg text-muted-foreground">
                PawMe is proudly open-source. We believe in transparency and the power of collaboration. Whether you're a developer, designer, or just an enthusiast, you can contribute to PawMe's evolution.
              </p>
              <p className="text-lg text-muted-foreground">
                Help us add new features, design new shells, and make PawMe the best AI companion for everyone.
              </p>
              <div>
                <Button variant="secondary" size="lg" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    Explore on GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
