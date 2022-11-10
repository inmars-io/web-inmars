import {
  html,
  property,
  MarsElement,
  unsafeCSS,
  css,
  colorGray,
  fontFundations,
} from '@web-inmars/mars-core';
import { styles } from './MarsAvatar.styles.js';

function __renderDefault() {
  return html`
    <svg
      part="default"
      xmlns="http://www.w3.org/2000/svg"
      height="34px"
      viewBox="0 0 24 24"
      width="34px"
      fill="#000000"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
      />
    </svg>
  `;
}

export class MarsAvatar extends MarsElement {
  static styles: any = [
    MarsElement.styles,
    css`
      :host {
        ${unsafeCSS(colorGray([200, 300, 400, 500]))};
        ${unsafeCSS(fontFundations(['xs']))};
      }
    `,
    styles,
  ];

  @property({ type: String }) name = '';

  @property({ type: String }) img = '';

  @property({ type: String }) color = '';

  @property({ type: String }) abbr = '';

  updated(changedProps: any) {
    if (changedProps.has('color')) {
      this.__updateColorBg();
    }
  }

  __updateColorBg() {
    this.style.setProperty(`--_avatar-color-bg`, this.color);
  }

  __renderImg() {
    return html` <img src="${this.img}" alt="${this.name}" part="img" /> `;
  }

  __renderAbbr() {
    let abbr = '';
    if (!this.abbr) {
      abbr = this.name
        .split(' ')
        .map(word => word[0])
        .join('');
    }

    return html`
      <abbr title="${this.name || abbr}" part="abbr"> ${abbr} </abbr>
    `;
  }

  __selectRender() {
    if (this.img) {
      return this.__renderImg();
    }

    if (this.abbr || this.name) {
      return this.__renderAbbr();
    }

    return __renderDefault();
  }

  render() {
    return this.__selectRender();
  }
}
