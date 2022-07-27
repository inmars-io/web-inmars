import { css } from 'lit';
import { calcRemMixin } from './mixins.js';

export const COLOR_INDIGO = {
  100: css`#dbcfec`,
  200: css`#bba3db`,
  300: css`#9f7fcd`,
  400: css`#7648b7`,
  500: css`#5f3993`,
  600: css`#472b6e`,
  700: css`#2f1d49`,
  800: css`#1f1331`,
  900: css`#0c0712`,
};

export const COLOR_CRIMSON = {
  100: css`#fce9e8`,
  200: css`#f7bebb`,
  300: css`#f1928d`,
  400: css`#ec665f`,
  500: css`#e6362d`,
  600: css`#cd2118`,
  700: css`#a01a13`,
  800: css`#72130e`,
  900: css`#440b08`,
};

export const COLOR_CORAL = {
  100: css`#fadcd1`,
  200: css`#f5b9a3`,
  300: css`#f09575`,
  400: css`#eb7247`,
  500: css`#e7531e`,
  600: css`#b83f14`,
  700: css`#8a2f0f`,
  800: css`#5c200a`,
  900: css`#2e1005`,
};

export const COLOR_ORCHER = {
  100: css`#fdeace`,
  200: css`#fbd59d`,
  300: css`#fac16b`,
  400: css`#f8ac3a`,
  500: css`#f29408`,
  600: css`#c57907`,
  700: css`#945b05`,
  800: css`#633d03`,
  900: css`#321f01`,
};

export const COLOR_YELLOW = {
  100: css`#fffde6`,
  200: css`#fef8b3`,
  300: css`#fef59a`,
  400: css`#fdf068`,
  500: css`#fdeb38`,
  600: css`#e3cf02`,
  700: css`#b1a102`,
  800: css`#7e7301`,
  900: css`#4c4501`,
};

export const COLOR_COBALT = {
  100: css`#d0f1fb`,
  200: css`#a1e3f7`,
  300: css`#71d5f4`,
  400: css`#42c7f0`,
  500: css`#11a7d5`,
  600: css`#0d82a6`,
  700: css`#095c75`,
  800: css`#053847`,
  900: css`#032630`,
};
export const COLOR_FUCSHIA = {
  100: css`#fbd0e7`,
  200: css`#f8a0ce`,
  300: css`#f570b5`,
  400: css`#f2409c`,
  500: css`#e30f7c`,
  600: css`#bf0d69`,
  700: css`#8f0a4f`,
  800: css`#600635`,
  900: css`#30031b`,
};

export const COLOR_GRAY = {
  100: css`#f9fafb`,
  200: css`#ebedef`,
  300: css`#e0e3e6`,
  400: css`#ccd1d7`,
  500: css`#bcbec0`,
  600: css`#93969a`,
  700: css`#65696c`,
  800: css`#404244`,
  900: css`#191a1a`,
};

export const COLOR_PRIMARY = {
  100: css`var(
      --theme-color-primary-100,
      var(--color-indigo-100))`,
  200: css`var(
      --theme-color-primary-200,
      var(--color-indigo-200))`,
  300: css`var(
      --theme-color-primary-300,
      var(--color-indigo-300))`,
  400: css`var(
      --theme-color-primary-400,
      var(--color-indigo-400))`,
  500: css`var(
      --theme-color-primary-500,
      var(--color-indigo-500))`,
  600: css`var(
      --theme-color-primary-600,
      var(--color-indigo-600))`,
  700: css`var(
      --theme-color-primary-700,
      var(--color-indigo-700))`,
  800: css`var(
      --theme-color-primary-800,
      var(--color-indigo-800))`,
  900: css`var(
      --theme-color-primary-900,
      var(--color-indigo-900))`,
};

export const COLOR_SECONDARY = {
  100: css`var(
        --theme-color-secondary-100,
        var(--color-crimson-100))`,
  200: css`var(
        --theme-color-secondary-200,
        var(--color-crimson-200))`,
  300: css`var(
        --theme-color-secondary-300,
        var(--color-crimson-300))`,
  400: css`var(
        --theme-color-secondary-400,
        var(--color-crimson-400))`,
  500: css`var(
        --theme-color-secondary-500,
        var(--color-crimson-500))`,
  600: css`var(
        --theme-color-secondary-600,
        var(--color-crimson-600))`,
  700: css`var(
        --theme-color-secondary-700,
        var(--color-crimson-700))`,
  800: css`var(
        --theme-color-secondary-800,
        var(--color-crimson-800))`,
  900: css`var(
        --theme-color-secondary-900,
        var(--color-crimson-900))`,
};

export const COLOR_TERTIARY = {
  100: css`var(
          --theme-color-tertiary-100,
          var(--color-coral-100))`,
  200: css`var(
          --theme-color-tertiary-200,
          var(--color-coral-200))`,
  300: css`var(
          --theme-color-tertiary-300,
          var(--color-coral-300))`,
  400: css`var(
          --theme-color-tertiary-400,
          var(--color-coral-400))`,
  500: css`var(
          --theme-color-tertiary-500,
          var(--color-coral-500))`,
  600: css`var(
          --theme-color-tertiary-600,
          var(--color-coral-600))`,
  700: css`var(
          --theme-color-tertiary-700,
          var(--color-coral-700))`,
  800: css`var(
          --theme-color-tertiary-800,
          var(--color-coral-800))`,
  900: css`var(
          --theme-color-tertiary-900,
          var(--color-coral-900))`,
};

export const COLOR_TEXT = {
  base: css`var(--theme-color-text-base, var(--color-gray-200))`,
  title: css`var(--theme-color-text-base, var(--color-gray-400))`,
};

export const FONT_FAMILY = {
  primary: css`var(--theme-font-family-primary, 'Quicksand', sans-serif)`,
  secondary: css`var(--theme-font-family-secondary, 'Montserrat', sans-serif)`,
  mono: css`var(--theme-font-family-mono, 'Roboto Mono', monospace)`,
};

export const FONT_FAMILY_TITLE = {
  primary: css`var(--theme-font-family-title-primary, 'Montserrat', sans-serif)`,
  secondary: css`var(--theme-font-family-title-secondary, 'Quicksand', sans-serif)`,
  mono: css`var(--theme-font-family-title-mono, 'Roboto Mono', monospace)`,
};

export const FONT_SIZE_MOBILE = {
  xs4: css`var(--theme-font-size-mobile-4xs, ${calcRemMixin(8)})`,
  xs3: css`var(--theme-font-size-mobile-3xs, ${calcRemMixin(10)})`,
  xs2: css`var(--theme-font-size-mobile-2xs, ${calcRemMixin(12)})`,
  xs: css`var(--theme-font-size-mobile-xs, ${calcRemMixin(14)})`,
  sm: css`var(--theme-font-size-mobile-sm, ${calcRemMixin(16)})`,
  base: css`var(--theme-font-size-mobile-base, ${calcRemMixin(18)})`,
  md: css`var(--theme-font-size-mobile-md, ${calcRemMixin(20)})`,
  lg: css`var(--theme-font-size-mobile-lg, ${calcRemMixin(24)})`,
  xl: css`var(--theme-font-size-mobile-xl, ${calcRemMixin(28)})`,
  xl2: css`var(--theme-font-size-mobile-xl2, ${calcRemMixin(32)})`,
  xl3: css`var(--theme-font-size-mobile-xl3, ${calcRemMixin(36)})`,
  xl4: css`var(--theme-font-size-mobile-xl4, ${calcRemMixin(40)})`,
  xl5: css`var(--theme-font-size-mobile-xl5, ${calcRemMixin(44)})`,
  xl6: css`var(--theme-font-size-mobile-xl6, ${calcRemMixin(48)})`,
  xl7: css`var(--theme-font-size-mobile-xl7, ${calcRemMixin(52)})`,
};

export const FONT_SIZE_DESKTOP = {
  xs4: css`var(--theme-font-size-desktop-4xs, ${calcRemMixin(8)})`,
  xs3: css`var(--theme-font-size-desktop-3xs, ${calcRemMixin(10)})`,
  xs2: css`var(--theme-font-size-desktop-2xs, ${calcRemMixin(12)})`,
  xs: css`var(--theme-font-size-desktop-xs, ${calcRemMixin(14)})`,
  sm: css`var(--theme-font-size-desktop-sm, ${calcRemMixin(16)})`,
  base: css`var(--theme-font-size-desktop-base, ${calcRemMixin(18)})`,
  md: css`var(--theme-font-size-desktop-md, ${calcRemMixin(20)})`,
  lg: css`var(--theme-font-size-desktop-lg, ${calcRemMixin(24)})`,
  xl: css`var(--theme-font-size-desktop-xl, ${calcRemMixin(28)})`,
  xl2: css`var(--theme-font-size-desktop-xl2, ${calcRemMixin(32)})`,
  xl3: css`var(--theme-font-size-desktop-xl3, ${calcRemMixin(36)})`,
  xl4: css`var(--theme-font-size-desktop-xl4, ${calcRemMixin(40)})`,
  xl5: css`var(--theme-font-size-desktop-xl5, ${calcRemMixin(44)})`,
  xl6: css`var(--theme-font-size-desktop-xl6, ${calcRemMixin(48)})`,
  xl7: css`var(--theme-font-size-desktop-xl7, ${calcRemMixin(52)})`,
};

export const FONT_WEIGHT = {
  xs2: css`var(--theme-font-weight-2xs, 100)`,
  xs: css`var(--theme-font-weight-xs, 200)`,
  sm: css`var(--theme-font-weight-sm, 300)`,
  base: css`var(--theme-font-weight-base, 400)`,
  md: css`var(--theme-font-weight-md, 500)`,
  lg: css`var(--theme-font-weight-lg, 600)`,
  xl: css`var(--theme-font-weight-xl, 700)`,
};

export const FONT_SPACING = {
  xs2: css`var(--theme-font-spacing-2xs, ${calcRemMixin(8)})`,
  xs: css`var(--theme-font-spacing-xs, ${calcRemMixin(10)})`,
  sm: css`var(--theme-font-spacing-sm, ${calcRemMixin(12)})`,
  base: css`var(--theme-font-spacing-base, ${calcRemMixin(14)})`,
  md: css`var(--theme-font-spacing-md, ${calcRemMixin(16)})`,
  lg: css`var(--theme-font-spacing-lg, ${calcRemMixin(18)})`,
  xl: css`var(--theme-font-spacing-xl, ${calcRemMixin(20)})`,
};

export const FONT_LINEHEIGHT = {
  xs2: css`var(--theme-font-lineheight-2xs, 1)`,
  xs: css`var(--theme-font-lineheight-xs, 1.1)`,
  sm: css`var(--theme-font-lineheight-sm, 1.3)`,
  base: css`var(--theme-font-lineheight-base, 1.4)`,
  md: css`var(--theme-font-lineheight-md, 1.5)`,
  lg: css`var(--theme-font-lineheight-lg, 2)`,
  xl: css`var(--theme-font-lineheight-xl, 2.4)`,
};

export const GRID_BREACKPOINTS = {
  xs: css`var(--theme-grid-breackpoints-xs, ${calcRemMixin(320)})`,
  sm: css`var(--theme-grid-breackpoints-sm, ${calcRemMixin(480)})`,
  md: css`var(--theme-grid-breackpoints-md, ${calcRemMixin(768)})`,
  lg: css`var(--theme-grid-breackpoints-lg, ${calcRemMixin(1024)})`,
  xl: css`var(--theme-grid-breackpoints-xl, ${calcRemMixin(1200)})`,
  xl2: css`var(--theme-grid-breackpoints-2xl, ${calcRemMixin(1400)})`,
};

export const GRID_CONTAINER_WIDTH = {
  sm: css`var(--theme-grid-breackpoints-sm, ${calcRemMixin(420)})`,
  md: css`var(--theme-grid-breackpoints-md, ${calcRemMixin(720)})`,
  lg: css`var(--theme-grid-breackpoints-lg, ${calcRemMixin(960)})`,
  xl: css`var(--theme-grid-breackpoints-xl, ${calcRemMixin(1120)})`,
  xl2: css`var(--theme-grid-breackpoints-2xl, ${calcRemMixin(1240)})`,
};

export const GRID_COLUMS = {
  desktop: css`var(--theme-grid-cols-2xs, 12)`,
  tablet: css`var(--theme-grid-cols-xs, 8)`,
  mobile: css`var(--theme-grid-cols-sm, 4)`,
  default: css`var(--theme-grid-cols-base, var(--grid-cols-desktop))`,
};

export const GRID_GUTTER = {
  width: css`var(--theme-grid-gutter-width, 1.5rem)`,
};

export const GRID_SPACER = {
  xs6: css`var(--theme-grid-spacer-xs6, ${calcRemMixin(1)})`,
  xs5: css`var(--theme-grid-spacer-xs5, ${calcRemMixin(2)})`,
  xs4: css`var(--theme-grid-spacer-xs4, ${calcRemMixin(4)})`,
  xs3: css`var(--theme-grid-spacer-xs3, ${calcRemMixin(8)})`,
  xs2: css`var(--theme-grid-spacer-xs2, ${calcRemMixin(12)})`,
  xs: css`var(--theme-grid-spacer-xs, ${calcRemMixin(14)})`,
  sm: css`var(--theme-grid-spacer-sm, ${calcRemMixin(16)})`,
  md: css`var(--theme-grid-spacer-md, ${calcRemMixin(18)})`,
  lg: css`var(--theme-grid-spacer-lg, ${calcRemMixin(20)})`,
  xl: css`var(--theme-grid-spacer-xl, ${calcRemMixin(24)})`,
  xl2: css`var(--theme-grid-spacer-xl2, ${calcRemMixin(28)})`,
  xl3: css`var(--theme-grid-spacer-xl3, ${calcRemMixin(32)})`,
  xl4: css`var(--theme-grid-spacer-xl4, ${calcRemMixin(36)})`,
  xl5: css`var(--theme-grid-spacer-xl5, ${calcRemMixin(40)})`,
  xl6: css`var(--theme-grid-spacer-xl6, ${calcRemMixin(46)})`,
};

export default {
  COLOR_INDIGO,
  COLOR_CRIMSON,
  COLOR_CORAL,
  COLOR_ORCHER,
  COLOR_YELLOW,
  COLOR_COBALT,
  COLOR_FUCSHIA,
  COLOR_GRAY,
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  COLOR_TERTIARY,
  COLOR_TEXT,
  FONT_FAMILY,
  FONT_FAMILY_TITLE,
  FONT_SIZE_MOBILE,
  FONT_SIZE_DESKTOP,
  FONT_WEIGHT,
  FONT_SPACING,
  FONT_LINEHEIGHT,
  GRID_BREACKPOINTS,
  GRID_CONTAINER_WIDTH,
  GRID_COLUMS,
  GRID_GUTTER,
  GRID_SPACER,
};
