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

const selectVariables = (types: any[], tokens: any, name: string) => {
  let styleTempl: any = '';
  types.forEach((type: any) => {
    if (tokens[type]) styleTempl += `--${name}-${type}: ${tokens[type]};`;
  });

  return styleTempl;
};

export const colorIndigo = (types: any[]) =>
  selectVariables(types, COLOR_INDIGO, 'color-indigo');

export const colorCrimson = (types: any[]) =>
  selectVariables(types, COLOR_CRIMSON, 'color-crimson');

export const colorCoral = (types: any[]) =>
  selectVariables(types, COLOR_CORAL, 'color-coral');

export const colorGray = (types: any[]) =>
  selectVariables(types, COLOR_GRAY, 'color-gray');

export const colorPrimary = (types: any[]) =>
  selectVariables(types, COLOR_PRIMARY, 'color-primary');

export const colorSecondary = (types: any[]) =>
  selectVariables(types, COLOR_SECONDARY, 'color-secondary');

export const colorTertiary = (types: any[]) =>
  selectVariables(types, COLOR_TERTIARY, 'color-tertiary');

export const colorText = (types: any[]) =>
  selectVariables(types, COLOR_TEXT, 'color-text');

export const fontFamily = (types: any[]) =>
  selectVariables(types, FONT_FAMILY, 'font-family');

export const fontSizeMobile = (types: any[]) =>
  selectVariables(types, FONT_SIZE_MOBILE, 'font-size-mobile');

export const colorMarsBase = (types: any[]) => `${colorIndigo(types)}
  ${colorCrimson(types)}
  ${colorCoral(types)}`;

export const colorPrimaries = (types: any[]) => `${colorPrimary(types)}
  ${colorSecondary(types)}
  ${colorTertiary(types)}`;

export const colorFundations = (types: any[]) => `${colorPrimaries(types)}
  ${colorText(types)}`;

export const fontFundations = (types: any[]) => `${fontFamily(types)}
  ${fontSizeMobile(types)}`;
