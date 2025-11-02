// web/components/header/Header.tsx
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur">
      <Navbar />
    </header>
  );
}
