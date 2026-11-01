import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { HumanProblem } from "@/components/HumanProblem";
import { CoachingFramework } from "@/components/CoachingFramework";
import { KevinStoryPreview } from "@/components/KevinStoryPreview";
import { MindfulnessSection } from "@/components/MindfulnessSection";
import { WorkingTogether } from "@/components/WorkingTogether";
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
      <HumanProblem />
      <CoachingFramework />
      <KevinStoryPreview />
      <MindfulnessSection />
      <WorkingTogether />
      <CTASection />
    </>
  );
}
