const tokens = {
  "colors.bg": {
    "value": "#0b0c10",
    "variable": "var(--colors-bg)"
  },
  "colors.bgElev": {
    "value": "#111218",
    "variable": "var(--colors-bg-elev)"
  },
  "colors.fg": {
    "value": "#e6e6e6",
    "variable": "var(--colors-fg)"
  },
  "colors.muted": {
    "value": "#a3a3a3",
    "variable": "var(--colors-muted)"
  },
  "colors.brand": {
    "value": "#6ea8fe",
    "variable": "var(--colors-brand)"
  },
  "colors.brand700": {
    "value": "#467ff7",
    "variable": "var(--colors-brand700)"
  },
  "radii.lg": {
    "value": "16px",
    "variable": "var(--radii-lg)"
  },
  "radii.full": {
    "value": "999px",
    "variable": "var(--radii-full)"
  },
  "spacing.1": {
    "value": "4px",
    "variable": "var(--spacing-1)"
  },
  "spacing.2": {
    "value": "8px",
    "variable": "var(--spacing-2)"
  },
  "spacing.3": {
    "value": "12px",
    "variable": "var(--spacing-3)"
  },
  "spacing.4": {
    "value": "16px",
    "variable": "var(--spacing-4)"
  },
  "spacing.5": {
    "value": "24px",
    "variable": "var(--spacing-5)"
  },
  "spacing.6": {
    "value": "32px",
    "variable": "var(--spacing-6)"
  },
  "sizes.maxw": {
    "value": "1200px",
    "variable": "var(--sizes-maxw)"
  },
  "sizes.breakpoint-sm": {
    "value": "640px",
    "variable": "var(--sizes-breakpoint-sm)"
  },
  "sizes.breakpoint-md": {
    "value": "768px",
    "variable": "var(--sizes-breakpoint-md)"
  },
  "sizes.breakpoint-lg": {
    "value": "1024px",
    "variable": "var(--sizes-breakpoint-lg)"
  },
  "sizes.breakpoint-xl": {
    "value": "1280px",
    "variable": "var(--sizes-breakpoint-xl)"
  },
  "sizes.breakpoint-2xl": {
    "value": "1536px",
    "variable": "var(--sizes-breakpoint-2xl)"
  },
  "breakpoints.sm": {
    "value": "640px",
    "variable": "var(--breakpoints-sm)"
  },
  "breakpoints.md": {
    "value": "768px",
    "variable": "var(--breakpoints-md)"
  },
  "breakpoints.lg": {
    "value": "1024px",
    "variable": "var(--breakpoints-lg)"
  },
  "breakpoints.xl": {
    "value": "1280px",
    "variable": "var(--breakpoints-xl)"
  },
  "breakpoints.2xl": {
    "value": "1536px",
    "variable": "var(--breakpoints-2xl)"
  },
  "colors.appBg": {
    "value": "var(--colors-bg)",
    "variable": "var(--colors-app-bg)"
  },
  "colors.appBgElev": {
    "value": "var(--colors-bg-elev)",
    "variable": "var(--colors-app-bg-elev)"
  },
  "colors.appFg": {
    "value": "var(--colors-fg)",
    "variable": "var(--colors-app-fg)"
  },
  "colors.appMuted": {
    "value": "var(--colors-muted)",
    "variable": "var(--colors-app-muted)"
  },
  "colors.appBrand": {
    "value": "var(--colors-brand)",
    "variable": "var(--colors-app-brand)"
  },
  "colors.appBrand2": {
    "value": "var(--colors-brand700)",
    "variable": "var(--colors-app-brand2)"
  },
  "spacing.-1": {
    "value": "calc(var(--spacing-1) * -1)",
    "variable": "var(--spacing-1)"
  },
  "spacing.-2": {
    "value": "calc(var(--spacing-2) * -1)",
    "variable": "var(--spacing-2)"
  },
  "spacing.-3": {
    "value": "calc(var(--spacing-3) * -1)",
    "variable": "var(--spacing-3)"
  },
  "spacing.-4": {
    "value": "calc(var(--spacing-4) * -1)",
    "variable": "var(--spacing-4)"
  },
  "spacing.-5": {
    "value": "calc(var(--spacing-5) * -1)",
    "variable": "var(--spacing-5)"
  },
  "spacing.-6": {
    "value": "calc(var(--spacing-6) * -1)",
    "variable": "var(--spacing-6)"
  },
  "colors.colorPalette": {
    "value": "var(--colors-color-palette)",
    "variable": "var(--colors-color-palette)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar