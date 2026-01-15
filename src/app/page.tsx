import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { ProductShowcase } from '@/components/landing/product-showcase';
import { Features } from '@/components/landing/features';
import { OpenSource } from '@/components/landing/open-source';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductShowcase />
        <Features />
        <OpenSource />
      </main>
      <Footer />
    </div>
  );
}
