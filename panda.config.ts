import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{ts,tsx}"],
  outdir: "styled-system",
  jsxFramework: "react",
  theme: {
    tokens: {
      colors: {
        bg:        { value: "#0b0c10" },
        bgElev:    { value: "#111218" },
        fg:        { value: "#e6e6e6" },
        muted:     { value: "#a3a3a3" },
        brand:     { value: "#6ea8fe" },
        brand700:  { value: "#467ff7" }
      },
      radii: {
        lg:   { value: "16px" },
        full: { value: "999px" }
      },
      spacing: {
        1: { value: "4px"  },
        2: { value: "8px"  },
        3: { value: "12px" },
        4: { value: "16px" },
        5: { value: "24px" },
        6: { value: "32px" }
      },
      sizes: {
        maxw: { value: "1200px" }
      }
    },
    semanticTokens: {
      colors: {
        appBg:     { value: "{colors.bg}" },
        appBgElev: { value: "{colors.bgElev}" },
        appFg:     { value: "{colors.fg}"   },
        appMuted:  { value: "{colors.muted}"},
        appBrand:  { value: "{colors.brand}"},
        appBrand2: { value: "{colors.brand700}" }
      }
    }
  }
});
