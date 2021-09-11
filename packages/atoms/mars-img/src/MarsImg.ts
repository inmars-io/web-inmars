import { html, property, MarsElement } from '@web-inmars/mars-core';
import { styles } from './MarsImg.styles';

export class MarsImg extends MarsElement {
  static get styles() {
    return [...super.styles, styles];
  }

  @property({ type: String }) src = '';

  @property({ type: String }) variant = '';

  @property({ type: String }) alt = '';

  @property({ type: Boolean }) disabled = false;

  render() {
    return this.src
      ? html`<img .src=${this.src} alt=${this.alt} part="image" />`
      : '';
  }
}
