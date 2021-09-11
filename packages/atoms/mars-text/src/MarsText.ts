import { html, unsafeHTML, property, MarsElement } from '@web-inmars/mars-core';
import { styles } from './MarsText.styles';

export class MarsText extends MarsElement {
  static get styles() {
    return [...super.styles, styles];
  }

  @property({ type: String }) value = '';

  @property({ type: String }) variant = '';

  @property({ type: String }) tag = '';

  @property({ type: String, attribute: 'css-part' }) cssPart = '';

  @property({ type: Boolean }) disabled = false;

  render() {
    return html`${unsafeHTML(
      `<${this.tag} class="text text2" part=${this.cssPart || this.tag}>
        ${this.value}
      </${this.tag}>`
    )}`;
  }
}
