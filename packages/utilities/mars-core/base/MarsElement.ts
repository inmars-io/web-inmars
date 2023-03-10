import { LitElement, css, unsafeCSS, CSSResultGroup, property } from '..';
import {
  colorGray,
  colorFundations,
  fontFundations,
  colorMarsBase,
  colorLight,
  colorDark,
} from '../styles/fundations.js';

import { lightMode, darkMode } from '../styles/modes.js';

export class MarsElement extends LitElement {
  /** @private */
  static styles: CSSResultGroup = [
    css`
      :host {
        ${unsafeCSS(colorGray([100]))};
        ${unsafeCSS(colorMarsBase([300, 400, 500, 600, 700]))};
        ${unsafeCSS(
          colorLight([
            'primary',
            'on-primary',
            'outline',
            'surface1',
            'secondary-container',
            'on-secondary-container',
            'on-surface',
            'surface-variant',
            'on-surface-variant',
            'surface-layer',
          ])
        )};
        ${unsafeCSS(
          colorDark([
            'primary',
            'on-primary',
            'outline',
            'surface1',
            'secondary-container',
            'on-secondary-container',
            'on-surface',
            'surface-variant',
            'on-surface-variant',
            'surface-layer',
          ])
        )};
        ${unsafeCSS(
          colorFundations([300, 400, 500, 600, 700, 'base', 'title'])
        )};
        ${unsafeCSS(fontFundations(['primary', 'secondary', 'sm', 'xs']))};
      }
    `,
    lightMode,
    darkMode,
  ];

  @property({ type: String }) mode = 'light';
}
