import TOKENS from './tokens.js';

const selectVariables = <T extends object, U extends keyof T>(
  types: any[],
  tokens: T,
  name: string
) => {
  let styleTempl: any = '';
  types.forEach((type: U) => {
    if (tokens[type]) styleTempl += `--${name}-${type}: ${tokens[type]};`;
  });

  return styleTempl;
};

export const colorIndigo = (types: any[]) =>
  selectVariables(types, TOKENS.COLOR_INDIGO, 'color-indigo');

export const colorCrimson = (types: any[]) =>
  selectVariables(types, TOKENS.COLOR_CRIMSON, 'color-crimson');

export const colorCoral = (types: any[]) =>
  selectVariables(types, TOKENS.COLOR_CORAL, 'color-coral');

export const colorOrcher = (types: any[]) =>
  selectVariables(types, TOKENS.COLOR_ORCHER, 'color-orcher');

export const colorYellow = (types: any[]) =>
  selectVariables(types, TOKENS.COLOR_YELLOW, 'color-yellow');

export const colorCobalt = (types: any[]) =>
  selectVariables(types, TOKENS.COLOR_COBALT, 'color-cobalt');

export const colorFucshia = (types: any[]) =>
  selectVariables(types, TOKENS.COLOR_FUCSHIA, 'color-fucshia');

export const colorGray = (types: any[]) =>
  selectVariables(types, TOKENS.COLOR_GRAY, 'color-gray');

export const colorPrimary = (types: any[]) =>
  selectVariables(types, TOKENS.COLOR_PRIMARY, 'color-primary');

export const colorSecondary = (types: any[]) =>
  selectVariables(types, TOKENS.COLOR_SECONDARY, 'color-secondary');

export const colorTertiary = (types: any[]) =>
  selectVariables(types, TOKENS.COLOR_TERTIARY, 'color-tertiary');

export const colorText = (types: any[]) =>
  selectVariables(types, TOKENS.COLOR_TEXT, 'color-text');

export const fontFamily = (types: any[]) =>
  selectVariables(types, TOKENS.FONT_FAMILY, 'font-family');

export const fontSizeMobile = (types: any[]) =>
  selectVariables(types, TOKENS.FONT_SIZE_MOBILE, 'font-size-mobile');

export const fontSizeDesktop = (types: any[]) =>
  selectVariables(types, TOKENS.FONT_SIZE_DESKTOP, 'font-size-desktop');

export const fontWeight = (types: any[]) =>
  selectVariables(types, TOKENS.FONT_WEIGHT, 'font-weight');

export const fontSpacing = (types: any[]) =>
  selectVariables(types, TOKENS.FONT_SPACING, 'font-spacing');

export const fontLineheight = (types: any[]) =>
  selectVariables(types, TOKENS.FONT_LINEHEIGHT, 'font-lineheight');

export const gridBreackpoints = (types: any[]) =>
  selectVariables(types, TOKENS.GRID_BREACKPOINTS, 'grid-breackpoints');

export const gridContainerWidth = (types: any[]) =>
  selectVariables(types, TOKENS.GRID_CONTAINER_WIDTH, 'container-width');

export const gridColumns = (types: any[]) =>
  selectVariables(types, TOKENS.GRID_COLUMS, 'grid-cols');

export const gridGutter = (types: any[]) =>
  selectVariables(types, TOKENS.GRID_GUTTER, 'grid-gutter');

export const gridSpacer = (types: any[]) =>
  selectVariables(types, TOKENS.GRID_SPACER, 'grid-spacer');
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
