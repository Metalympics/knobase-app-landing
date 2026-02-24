import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Features, Hosting } from "@/components/features";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Features />
      <Hosting />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
