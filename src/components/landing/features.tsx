
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { BrainCircuit, Heart, Gamepad2, Zap, ToyBrick, Sparkles } from 'lucide-react';
import { ScrollFadeIn } from '../scroll-fade-in';

function getIconForFeature(featureName: string) {
  const lowerCaseName = featureName.toLowerCase();
  const iconProps = { className: "h-8 w-8 text-primary mb-4" };

  if (lowerCaseName.includes('personality') || lowerCaseName.includes('emotion')) return <Heart {...iconProps} />;
  if (lowerCaseName.includes('learn') || lowerCaseName.includes('adaptive')) return <BrainCircuit {...iconProps} />;
  if (lowerCaseName.includes('play') || lowerCaseName.includes('game')) return <Gamepad2 {...iconProps} />;
  if (lowerCaseName.includes('routine') || lowerCaseName.includes('energy')) return <Zap {...iconProps} />;
  if (lowerCaseName.includes('skill') || lowerCaseName.includes('trick')) return <ToyBrick {...iconProps} />;

  return <Sparkles {...iconProps} />;
}

const staticFeatures = [
    { name: "Adaptive Personality", description: "PawMe's personality evolves based on your interactions, creating a unique bond." },
    { name: "Continuous Learning", description: "It learns new tricks and understands your preferences over time." },
    { name: "Emotional Empathy", description: "Responds to your tone of voice and expressions with lifelike emotions." },
    { name: "Interactive Playtime", description: "Initiates games and activities, keeping both you and your pet engaged." },
    { name: "Smart Routine Assistant", description: "Helps you stick to your pet's schedule for feeding, walks, and playtime." },
    { name: "Skill Progression", description: "Unlocks new abilities and behaviors as it grows and learns with you." }
];


export function Features() {
  const features = staticFeatures.map(f => `${f.name}: ${f.description}`);

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollFadeIn className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Intelligent, Not Just Automated
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            PawMe uses cutting-edge AI to create a truly unique and engaging experience, going beyond what older robotic pets could do.
          </p>
        </ScrollFadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const parts = feature.split(':');
            const name = parts[0];
            const description = parts.slice(1).join(':').trim();

            return (
              <ScrollFadeIn key={name} delay={`${index * 100}ms`}>
                <Card className="h-full text-center transition-transform hover:scale-105 hover:shadow-lg">
                  <CardHeader>
                    <div className="flex justify-center">
                      {getIconForFeature(name)}
                    </div>
                    <h3 className="font-headline text-xl font-semibold">{name}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{description}</p>
                  </CardContent>
                </Card>
              </ScrollFadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
