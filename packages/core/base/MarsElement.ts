import { LitElement, css, unsafeCSS } from 'lit-element';
import {
  colorGray,
  colorFundations,
  fontFundations,
  colorMarsBase,
} from '../styles/fundations';

export class MarsElement extends LitElement {
  static styles = [
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
