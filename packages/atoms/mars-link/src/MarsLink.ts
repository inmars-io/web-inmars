import { html, property, MarsElement } from '@web-inmars/mars-core';
import { styles } from './MarsLink.styles';

export class MarsLink extends MarsElement {
  static get styles() {
    return [...super.styles, styles];
  }

  @property({ type: String }) value = '';

  @property({ type: String }) variant = '';

  @property({ type: String }) href = '';

  @property({ type: String }) target = '';

  @property({ type: String }) rel = '';

  @property({ type: String }) type = '';

  @property({ type: Boolean }) disabled = false;

  render() {
    return this.href
      ? html`<a
          part="link"
          href=${this.href}
          .target=${this.target}
          .type=${this.type}
          >${this.value}</a
        >`
      : '';
  }
}
