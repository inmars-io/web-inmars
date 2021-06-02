import TOKENS from './tokens';

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

export const colorIndigo = (types: any[]) => {
  return selectVariables(types, TOKENS.COLOR_INDIGO, 'color-indigo');
};

export const colorCrimson = (types: any[]) => {
  return selectVariables(types, TOKENS.COLOR_CRIMSON, 'color-crimson');
};

export const colorCoral = (types: any[]) => {
  return selectVariables(types, TOKENS.COLOR_CORAL, 'color-coral');
};

export const colorOrcher = (types: any[]) => {
  return selectVariables(types, TOKENS.COLOR_ORCHER, 'color-orcher');
};

export const colorYellow = (types: any[]) => {
  return selectVariables(types, TOKENS.COLOR_YELLOW, 'color-yellow');
};

export const colorCobalt = (types: any[]) => {
  return selectVariables(types, TOKENS.COLOR_COBALT, 'color-cobalt');
};

export const colorFucshia = (types: any[]) => {
  return selectVariables(types, TOKENS.COLOR_FUCSHIA, 'color-fucshia');
};

export const colorGray = (types: any[]) => {
  return selectVariables(types, TOKENS.COLOR_GRAY, 'color-gray');
};

export const colorPrimary = (types: any[]) => {
  return selectVariables(types, TOKENS.COLOR_PRIMARY, 'color-primary');
};

export const colorSecondary = (types: any[]) => {
  return selectVariables(types, TOKENS.COLOR_SECONDARY, 'color-secondary');
};

export const colorTertiary = (types: any[]) => {
  return selectVariables(types, TOKENS.COLOR_TERTIARY, 'color-tertiary');
};

export const colorText = (types: any[]) => {
  return selectVariables(types, TOKENS.COLOR_TEXT, 'color-text');
};

export const fontFamily = (types: any[]) => {
  return selectVariables(types, TOKENS.FONT_FAMILY, 'font-family');
};

export const fontSizeMobile = (types: any[]) => {
  return selectVariables(types, TOKENS.FONT_SIZE_MOBILE, 'font-size-mobile');
};

export const fontSizeDesktop = (types: any[]) => {
  return selectVariables(types, TOKENS.FONT_SIZE_DESKTOP, 'font-size-desktop');
};

export const fontWeight = (types: any[]) => {
  return selectVariables(types, TOKENS.FONT_WEIGHT, 'font-weight');
};

export const fontSpacing = (types: any[]) => {
  return selectVariables(types, TOKENS.FONT_SPACING, 'font-spacing');
};

export const fontLineheight = (types: any[]) => {
  return selectVariables(types, TOKENS.FONT_LINEHEIGHT, 'font-lineheight');
};

export const gridBreackpoints = (types: any[]) => {
  return selectVariables(types, TOKENS.GRID_BREACKPOINTS, 'grid-breackpoints');
};

export const gridContainerWidth = (types: any[]) => {
  return selectVariables(types, TOKENS.GRID_CONTAINER_WIDTH, 'container-width');
};

export const gridColumns = (types: any[]) => {
  return selectVariables(types, TOKENS.GRID_COLUMS, 'grid-cols');
};

export const gridGutter = (types: any[]) => {
  return selectVariables(types, TOKENS.GRID_GUTTER, 'grid-gutter');
};

export const gridSpacer = (types: any[]) => {
  return selectVariables(types, TOKENS.GRID_SPACER, 'grid-spacer');
};
export const colorMarsBase = (types: any[]) => {
  return `${colorIndigo(types)}
  ${colorCrimson(types)}
  ${colorCoral(types)}`;
};

export const colorPrimaries = (types: any[]) => {
  return `${colorPrimary(types)}
  ${colorSecondary(types)}
  ${colorTertiary(types)}`;
};

export const colorFundations = (types: any[]) => {
  return `${colorPrimaries(types)}
  ${colorText(types)}`;
};

export const fontFundations = (types: any[]) => {
  return `${fontFamily(types)}
  ${fontSizeMobile(types)}`;
};
