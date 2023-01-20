import { LitElement, css, unsafeCSS, CSSResultGroup } from 'lit';
import {
  colorGray,
  colorFundations,
  fontFundations,
  colorMarsBase,
} from '../styles/fundations.js';

export class MarsElement extends LitElement {
  static styles: CSSResultGroup = [
    css`
      :host {
        ${unsafeCSS(colorGray([100]))};
        ${unsafeCSS(colorMarsBase([300, 400, 500, 600, 700]))};
        ${unsafeCSS(
          colorFundations([300, 400, 500, 600, 700, 'base', 'title'])
        )};
        ${unsafeCSS(fontFundations(['primary', 'secondary', 'sm']))};
      }
    `,
  ];
}
