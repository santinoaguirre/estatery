import HeroSection from "@/components/hero/heroSection";
import HeroImageSection from "@/components/hero/heroImageSection";
import PropertyCard from "@/components/benefits/propertyCard";
import BenefitsGrid from "@/components/benefits/benefitsGrid";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-hero-start to-hero-end min-h-screen lg:pt-16 2xl:pt-0 px-6 lg:px-0 pt-12">
      <div className="lg:flex lg:flex-row lg:items-center">
        <HeroSection />
        <HeroImageSection />
      </div>

      <div className="lg:px-12 xl:px-40 xl:flex xl:flex-row xl:gap-x-16 pb-4 xl:pb-24 4xl:justify-between">
        <PropertyCard />
        <BenefitsGrid />
      </div>
    </main>
  );
}
