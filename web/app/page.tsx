"use client";

import HeroSection from "@/components/home/HeroSection";
import NewsTicker from "@/components/home/NewsTicker";
import LatestStories from "@/components/home/LatestStories";
import VisualJourneys from "@/components/home/VisualJourneys";
import Sidebar from "@/components/home/Sidebar";
import CitizenToolkit from "@/components/home/CitizenToolkit";

/* ── Existing showcase sections (carried forward) ── */
import StatsCounter from "@/components/StatsCounter";
import FeaturedColumnists from "@/components/FeaturedColumnists";
import DailyQuiz from "@/components/DailyQuiz";
import EconomicDashboard from "@/components/EconomicDashboard";
import OnThisDay from "@/components/OnThisDay";
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
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* ═══ 1. IMMERSIVE HERO ═══ */}
      <HeroSection />

      {/* ═══ 2. LIVE NEWS TICKER ═══ */}
      <NewsTicker />

      {/* ═══ 3. MAIN CONTENT GRID ═══ */}
      <div className="container mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* ── Main feed (8 cols) ── */}
          <div className="lg:col-span-8 space-y-20">
            <LatestStories />
            <VisualJourneys />
          </div>

          {/* ── Sidebar (4 cols) ── */}
          <div className="lg:col-span-4">
            <Sidebar />
          </div>
        </div>

        {/* ═══ 4. CITIZEN TOOLKIT ═══ */}
        <CitizenToolkit />
      </div>

      {/* ═══ 5. EXISTING SHOWCASE SECTIONS ═══ */}
      <div className="space-y-6">
        {/* Quick knowledge */}
        <OnThisDay />

        {/* Public-interest showcases */}
        <CorruptionTrackerShowcase />
        <HeroesShowcase />
        <NarayaniSenaShowcase />
        <CivicClassroomShowcase />
        <FactDoseShowcase />
        <GlossaryShowcase />

        {/* Community voice */}
        <YouthWallShowcase />
        <AskNarayaniShowcase />
        <WhistleblowerShowcase />

        {/* Economy & metrics */}
        <EconomicDashboard />
        <StatsCounter
          stats={[
            { value: 250, label: "In-Depth Articles", plus: true },
            { value: 49, label: "Columnists" },
            { value: 100, label: "Fact Checkers", plus: true },
            { value: 78000, label: "Readers", format: "compact" },
          ]}
        />

        {/* Engagement */}
        <DailyQuiz />
        <FeaturedColumnists />
      </div>
    </div>
  );
}
