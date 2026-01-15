'use client';

import Image from 'next/image';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { subscribeToNewsletter, type FormState } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, Loader2 } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <Loader2 className="animate-spin" />
      ) : (
        <>
          Get Early Access <ArrowRight className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  );
}

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'pawme-hero');
  const initialState: FormState = { message: '', success: false };
  const [state, formAction] = useActionState(subscribeToNewsletter, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? 'Success!' : 'Oops!',
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
      if (state.success) {
        formRef.current?.reset();
      }
    }
  }, [state, toast]);

  return (
    <section id="signup" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Meet <span className="text-primary">PawMe</span>
            </h1>
            <p className="mx-auto max-w-[600px] text-lg text-muted-foreground md:mx-0 md:text-xl">
              The open-source AI pet companion that learns and grows with you. Get ready for a new best friend.
            </p>
            <form
              ref={formRef}
              action={formAction}
              className="mx-auto max-w-md space-y-4 md:mx-0"
            >
              <div className="flex flex-col gap-2 sm:flex-row">
                <Input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                  required
                />
                <SubmitButton />
              </div>
              {!state.success && state.message && (
                <p className="text-sm text-destructive">{state.message}</p>
              )}
            </form>
            <p className="text-xs text-muted-foreground">
              Sign up to be the first to know when our Kickstarter launches!
            </p>
          </div>
          <div className="relative h-64 md:h-auto md:aspect-square">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
                fill
                priority
                className="rounded-xl object-cover shadow-2xl"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
