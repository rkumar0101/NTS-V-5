"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryChips from "../components/CategoryChips";
import EditorsPicks from "../components/EditorsPicks";
import ArticleList from "../components/ArticleList";
import Footer from "../components/Footer";
import NewsCarousel from "../components/NewsCarousel";
import FeaturedColumnists from "@/components/FeaturedColumnists";
import StatsCounter from "@/components/StatsCounter";

export default function HomePage() {
  const [activeCat, setActiveCat] = useState<string>("All");

  return (
    <main>
      {/* Carousel sits between nav (from layout) and hero */}
      <NewsCarousel category={activeCat} />
      <Hero />
      <CategoryChips active={activeCat} onChange={setActiveCat} />
      <EditorsPicks category={activeCat} />
      <StatsCounter
        stats={[
          { value: 250, label: "In-Depth Articles", plus: true },
          { value: 49, label: "Columnists" },
          { value: 100, label: "Fact Checkers", plus: true },
          { value: 78000, label: "Readers", format: "compact" },
        ]}
      />
      <FeaturedColumnists />
      <ArticleList />
      <Footer />
    </main>
  );
}
