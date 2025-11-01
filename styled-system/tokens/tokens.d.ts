/* eslint-disable */
export type Token = `colors.${ColorToken}` | `radii.${RadiusToken}` | `spacing.${SpacingToken}` | `sizes.${SizeToken}` | `breakpoints.${BreakpointToken}`

export type ColorPalette = "bg" | "bgElev" | "fg" | "muted" | "brand" | "brand700" | "appBg" | "appBgElev" | "appFg" | "appMuted" | "appBrand" | "appBrand2"

export type ColorToken = "bg" | "bgElev" | "fg" | "muted" | "brand" | "brand700" | "appBg" | "appBgElev" | "appFg" | "appMuted" | "appBrand" | "appBrand2" | "colorPalette"

export type RadiusToken = "lg" | "full"

export type SpacingToken = "1" | "2" | "3" | "4" | "5" | "6" | "-1" | "-2" | "-3" | "-4" | "-5" | "-6"

export type SizeToken = "maxw" | "breakpoint-sm" | "breakpoint-md" | "breakpoint-lg" | "breakpoint-xl" | "breakpoint-2xl"

export type BreakpointToken = "sm" | "md" | "lg" | "xl" | "2xl"

export type Tokens = {
		colors: ColorToken
		radii: RadiusToken
		spacing: SpacingToken
		sizes: SizeToken
		breakpoints: BreakpointToken
} & { [token: string]: never }

export type TokenCategory = "aspectRatios" | "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "cursor" | "shadows" | "spacing" | "radii" | "borders" | "borderWidths" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"