import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogosMarquee } from "@/components/LogosMarquee";
import { Services } from "@/components/Services";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { CaseStudies } from "@/components/CaseStudies";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <LogosMarquee />
        <Services />
        <ProcessTimeline />
        <CaseStudies />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
