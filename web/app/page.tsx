"use client";

import { useState } from "react";
import Navbar from "@/components/header/Navbar";
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

export default function HomePage() {
  const [activeCat, setActiveCat] = useState<string>("All");

  return (
    <main>
      <BreakingNews />
      {/* Carousel sits between nav (from layout) and hero */}
      <NewsCarousel category={activeCat} />
      <Hero />
      
      <CategoryChips active={activeCat} onChange={setActiveCat} />
      <EditorsPicks category={activeCat} />
      <DataPoint />
      <EconomicDashboard />
      <HeroesShowcase/>
      <FeaturedMedia />
      <CorruptionTrackerShowcase />
      <StatsCounter
        stats={[
          { value: 250, label: "In-Depth Articles", plus: true },
          { value: 49, label: "Columnists" },
          { value: 100, label: "Fact Checkers", plus: true },
          { value: 78000, label: "Readers", format: "compact" },
        ]}
      />
      <DailyQuiz />
      <FeaturedColumnists />
      <NarayaniSenaShowcase/>
      <ArticleList />
      <OnThisDay />
      <NewsletterSignup />
      <SupportBlock />
      <FollowUs />
      <Archives />
      <Footer />
    </main>
  );
}
