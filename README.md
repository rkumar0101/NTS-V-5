cat > README.md << 'EOF'
# NTS-V-5 – Narayani Thoughts (Final)

Frontend lives in `/web` (Next.js 16 + Tailwind v4 CSS-first).
- Navbar v2 (HI/EN/BN, dark switch, search)
- NewsCarousel (thumbnails, category icons, audio headlines)
- Editors’ Picks + CategoryChips (client filter)
- FeaturedColumnists (sliding carousel)
- StatsCounter (animated counters)

Dev:
```bash
cd web
npm i
npm run dev


Narayani Thoughts Project Structure

web/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── page.module.css
│   └── globals.css
├── components/
│   ├── header/
│   │   ├── Header.tsx
│   │   ├── Navbar.tsx
│   │   ├── NotificationBell.tsx
│   │   └── SavedStoriesButton.tsx
│   ├── home/
│   │   ├── AskNarayaniShowcase.tsx
│   │   ├── CivicClassroomShowcase.tsx
│   │   ├── CorruptionTrackerShowcase.tsx
│   │   ├── FactDoseShowcase.tsx
│   │   ├── GlossaryShowcase.tsx
│   │   ├── HeroesShowcase.tsx
│   │   ├── NarayaniSenaShowcase.tsx
│   │   ├── WhistleblowerShowcase.tsx
│   │   └── YouthWallShowcase.tsx
│   └── ui/
│   │   ├── FloatingToggles.tsx
│   │   ├── FocusTrap.tsx
│   │   ├── Input.tsx
    │
│   ├── Archives.tsx
│   ├── ArticleCard.tsx
│   ├── ArticleList.tsx
│   ├── BreakingNews.tsx
│   ├── CategoryChips.tsx
│   ├── DailyQuiz.tsx
│   ├── DataPoint.tsx
│   ├── EconomicDashboard.tsx
│   ├── EditorsPicks.tsx
│   ├── FeaturedColumnists.tsx
│   ├── FeaturedMedia.tsx
│   ├── FollowUs.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── NewsCarousel.tsx
│   ├── NewsletterSignup.tsx
│   ├── OnThisDay.tsx
│   ├── SectionTitle.tsx
│   ├── StatsCounter.tsx
│   ├── SupportBlock.tsx
│   └── ThemeProvider.tsx
├── data/
│   ├── ask.json
│   ├── classroom.json
│   ├── factdose.json
│   ├── glossary.json
│   ├── heroes.json
│   ├── sena.json
│   ├── tracker.json
│   ├── whistleblower.json
│   └── youth.json
├── lib/
│   ├── columnists.ts
│   ├── dailyQuiz.ts
│   ├── dataPoints.ts
│   ├── date.ts
│   ├── economy.ts
│   ├── featured.ts
│   ├── news.ts
│   ├── onThisDay.ts
│   ├── siteConfig.ts
│   └── socials.ts
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── .gitignore
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
└── tsconfig.json
