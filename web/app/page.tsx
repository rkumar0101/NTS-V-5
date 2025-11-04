"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import CategoryChips from "../components/CategoryChips";
import EditorsPicks from "../components/EditorsPicks";
import ArticleList from "../components/ArticleList";
import Footer from "../components/Footer";
import NewsCarousel from "../components/NewsCarousel";
import FeaturedColumnists from "@/components/FeaturedColumnists";
import StatsCounter from "@/components/StatsCounter";
import BreakingNews from "@/components/BreakingNews";
import DataPoint from "@/components/DataPoint";
import EconomicDashboard from "@/components/EconomicDashboard";
import OnThisDay from "@/components/OnThisDay";
import NewsletterSignup from "@/components/NewsletterSignup";
import SupportBlock from "@/components/SupportBlock";
import FollowUs from "@/components/FollowUs";
import Archives from "@/components/Archives";
import FeaturedMedia from "@/components/FeaturedMedia";
import DailyQuiz from "@/components/DailyQuiz";
import CorruptionTrackerShowcase from "@/components/home/CorruptionTrackerShowcase";
import HeroesShowcase from "@/components/home/HeroesShowcase";
import NarayaniSenaShowcase from "@/components/home/NarayaniSenaShowcase";
import CivicClassroomShowcase from "@/components/home/CivicClassroomShowcase";
import FactDoseShowcase from "@/components/home/FactDoseShowcase";
import YouthWallShowcase from "@/components/home/YouthWallShowcase";
import AskNarayaniShowcase from "@/components/home/AskNarayaniShowcase";
import GlossaryShowcase from "@/components/home/GlossaryShowcase";
import WhistleblowerShowcase from "@/components/home/WhistleblowerShowcase";

export default function HomePage() {
  const [activeCat, setActiveCat] = useState<string>("All");

  return (
    <main className="space-y-6">
      {/* 0. Urgent context first */}
      <BreakingNews />

      {/* 1. Primary discovery */}
      <NewsCarousel category={activeCat} />
      <Hero />

      {/* 2. Quick knowledge bites */}
      <OnThisDay />
      <DataPoint />

      {/* 3. Editorial layer */}
      <CategoryChips active={activeCat} onChange={setActiveCat} />
      <EditorsPicks category={activeCat} />
      <FeaturedMedia />

      {/* 4. Public-interest showcases */}
      <CorruptionTrackerShowcase />
      <HeroesShowcase />
      <NarayaniSenaShowcase />
      <CivicClassroomShowcase />

      {/* 5. Utility / habit builders */}
      <FactDoseShowcase />
      <GlossaryShowcase />

      {/* 6. Community voice */}
      <YouthWallShowcase />
      <AskNarayaniShowcase />
      <WhistleblowerShowcase />

      {/* 7. Metrics & quick signals */}
      <EconomicDashboard />
      <StatsCounter
        stats={[
          { value: 250, label: "In-Depth Articles", plus: true },
          { value: 49, label: "Columnists" },
          { value: 100, label: "Fact Checkers", plus: true },
          { value: 78000, label: "Readers", format: "compact" },
        ]}
      />

      {/* 8. Engagement & stickiness */}
      <DailyQuiz />
      <FeaturedColumnists />
      <ArticleList />
      <Archives />

      {/* 9. Conversion & trust */}
      <NewsletterSignup />
      <SupportBlock />
      <FollowUs />

      {/* 10. Footer */}
      <Footer />
    </main>
  );
}
