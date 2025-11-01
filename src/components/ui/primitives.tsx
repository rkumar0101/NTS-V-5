// src/components/ui/primitives.tsx
import { styled } from "styled-system/jsx";  // <-- changed from "@/styled-system/jsx"

export const Container = styled("div", {
  base: { maxW: "maxw", mx: "auto", px: "5", w: "full" }
});

export const Section = styled("section", {
  base: { py: "6", w: "full" }
});

export const Heading = styled("h2", {
  base: { fontSize: "24px", fontWeight: "600", mb: "3" }
});
