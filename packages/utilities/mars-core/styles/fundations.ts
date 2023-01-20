import {
  COLOR_INDIGO,
  COLOR_CRIMSON,
  COLOR_CORAL,
  COLOR_GRAY,
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  COLOR_TERTIARY,
  COLOR_TEXT,
  FONT_FAMILY,
  FONT_SIZE_MOBILE,
} from './tokens.js';

const selectVariables = (
  types: (string | number)[],
  tokens: any,
  name: string
) => {
  let styleTempl = '';
  types.forEach((type: string | number) => {
    if (tokens[type]) styleTempl += `--${name}-${type}: ${tokens[type]};`;
  });

  return styleTempl;
};

export const colorIndigo = (types: (string | number)[]) =>
  selectVariables(types, COLOR_INDIGO, 'color-indigo');

export const colorCrimson = (types: (string | number)[]) =>
  selectVariables(types, COLOR_CRIMSON, 'color-crimson');

export const colorCoral = (types: (string | number)[]) =>
  selectVariables(types, COLOR_CORAL, 'color-coral');

export const colorGray = (types: (string | number)[]) =>
  selectVariables(types, COLOR_GRAY, 'color-gray');

export const colorPrimary = (types: (string | number)[]) =>
  selectVariables(types, COLOR_PRIMARY, 'color-primary');

export const colorSecondary = (types: (string | number)[]) =>
  selectVariables(types, COLOR_SECONDARY, 'color-secondary');

export const colorTertiary = (types: (string | number)[]) =>
  selectVariables(types, COLOR_TERTIARY, 'color-tertiary');

export const colorText = (types: (string | number)[]) =>
  selectVariables(types, COLOR_TEXT, 'color-text');

export const fontFamily = (types: (string | number)[]) =>
  selectVariables(types, FONT_FAMILY, 'font-family');

export const fontSizeMobile = (types: (string | number)[]) =>
  selectVariables(types, FONT_SIZE_MOBILE, 'font-size-mobile');

export const colorMarsBase = (types: (string | number)[]) => `${colorIndigo(
  types
)}
  ${colorCrimson(types)}
  ${colorCoral(types)}`;

export const colorPrimaries = (types: (string | number)[]) => `${colorPrimary(
  types
)}
  ${colorSecondary(types)}
  ${colorTertiary(types)}`;

export const colorFundations = (
  types: (string | number)[]
) => `${colorPrimaries(types)}
  ${colorText(types)}`;

export const fontFundations = (types: (string | number)[]) => `${fontFamily(
  types
)}
  ${fontSizeMobile(types)}`;
