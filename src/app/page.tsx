import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Introduction } from "@/components/Introduction";
import { WhoThisIsFor } from "@/components/WhoThisIsFor";
import { CoachingFramework } from "@/components/CoachingFramework";
import { MindfulnessSection } from "@/components/MindfulnessSection";
import { CoachingPrinciples } from "@/components/CoachingPrinciples";
import { AboutPreview } from "@/components/AboutPreview";
import { QuoteSection } from "@/components/QuoteSection";
import { CoachingExperience } from "@/components/CoachingExperience";
import { CTASection } from "@/components/CTASection";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <WhoThisIsFor />
      <CoachingFramework />
      <MindfulnessSection />
      <CoachingPrinciples />
      <AboutPreview />
      <QuoteSection />
      <CoachingExperience />
      <CTASection />
    </>
  );
}
