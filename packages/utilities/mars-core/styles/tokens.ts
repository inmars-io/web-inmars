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
  primary: css`var(--theme-font-family-primary, 'Open Sans', sans-serif)`,
  secondary: css`var(--theme-font-family-secondary, 'Montserrat', sans-serif)`,
  mono: css`var(--theme-font-family-mono, 'Roboto Mono', monospace)`,
};

export const FONT_FAMILY_TITLE = {
  primary: css`var(--theme-font-family-title-primary, 'Montserrat', sans-serif)`,
  secondary: css`var(--theme-font-family-title-secondary, 'Open Sans', sans-serif)`,
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

export const COLOR_LIGHT = {
  primary: css`var(--theme-color-primary, #5F3993)`,
  'on-primary': css`var(--theme-color-on-primary, #FFFFFF)`,
  outline: css`var(--theme-color-outline, #79747E)`,
  surface1: css`var(--theme-color-surface1, #F0F0F8)`,
  'secondary-container': css`var(--theme-color-secondary-container, #E8DEF6)`,
  'on-secondary-container': css`var(--theme-color-on-secondary-container, #160E20)`,
  'on-surface': css`var(--theme-color-on-surface, #191A1A)`,
  'surface-variant': css`var(--theme-color-surface-variant, #E7E0EC)`,
  'on-surface-variant': css`var(--theme-color-on-surface-variant, #191A1A)`,
  'surface-layer': css`var(--theme-color-surface-layer, #D7D0DC)`,
};

export const COLOR_DARK = {
  primary: css`var(--theme-color-primary, #B09DCB)`,
  'on-primary': css`var(--theme-color-on-primary, #472B6E)`,
  outline: css`var(--theme-color-outline, #938F99)`,
  surface1: css`var(--theme-color-surface1, #2a2a2d)`,
  'secondary-container': css`var(--theme-color-secondary-container, #544C60)`,
  'on-secondary-container': css`var(--theme-color-on-secondary-container, #F4EAFF)`,
  'on-surface': css`var(--theme-color-on-surface, #EDEFF1)`,
  'surface-variant': css`var(--theme-color-surface-variant, #49454F)`,
  'on-surface-variant': css`var(--theme-color-on-surface-variant, #CAC4D0)`,
  'surface-layer': css`var(--theme-color-surface-layer, #56535C)`,
};

export default {
  COLOR_INDIGO,
  COLOR_CRIMSON,
  COLOR_CORAL,
  COLOR_GRAY,
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  COLOR_TERTIARY,
  COLOR_TEXT,
  FONT_FAMILY,
  FONT_FAMILY_TITLE,
  FONT_SIZE_MOBILE,
  FONT_SIZE_DESKTOP,
  COLOR_LIGHT,
  COLOR_DARK,
};
