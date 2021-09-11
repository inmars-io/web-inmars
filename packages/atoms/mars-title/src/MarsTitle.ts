import { html, unsafeHTML, property, MarsElement } from '@web-inmars/mars-core';
import { styles } from './MarsTitle.styles';

export class MarsTitle extends MarsElement {
  static get styles() {
    return [...super.styles, styles];
  }

  @property({ type: String }) value = '';

  @property({ type: String }) variant = '';

  @property({ type: String }) heading = '';

  @property({ type: Boolean }) disabled = false;

  render() {
    return html`${unsafeHTML(
      `<h${this.heading} class="title" part=${`title-${this.heading}`}>
        ${this.value}
      </h${this.heading}>`
    )}`;
  }
}
