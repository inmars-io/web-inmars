import {
  html,
  property,
  MarsElement,
  unsafeCSS,
  css,
  colorGray,
  fontFundations,
} from '@web-inmars/core';
import { styles } from './MarsTextarea.styles.js';

/**
 * # <mars-textarea>
 * Web component that allows us to show an accessible and beautiful textarea so that users can interact
 *
 * ## Installation
 * ```bash
 *  npm i @web-inmars/textarea --save
 * ```
 *
 * ## Usage
 * ```html
 * <script type="module">
 *   import '@web-inmars/textarea/mars-textarea.js';
 * </script>
 *
 * <mars-textarea>
 *     Click me!
 * </mars-textarea>
 * ```
 * @element mars-textarea
 */

export class MarsTextarea extends MarsElement {
  static get styles() {
    return [
      MarsElement.styles,
      css`
        :host {
          ${unsafeCSS(colorGray([200, 300, 400, 600, 700, 800]))};
          ${unsafeCSS(fontFundations(['xs']))};
        }
      `,
      styles,
    ];
  }

  @property({ type: String }) value = '';

  @property({ type: String }) name = '';

  @property({ type: String }) for = '';

  @property({ type: String }) variant = '';

  @property({ type: String }) caption = '';

  @property({ type: String }) label = '';

  @property({ type: Boolean }) disabled = false;

  @property({ type: Boolean, attribute: 'show-caption' }) showCaption = false;

  __input(event: Event & { target: HTMLInputElement }) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      return;
    }
    this.value = event.target.value;
    const newEvent = new CustomEvent('on-input', {
      detail: { event, value: this.value },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(newEvent);
  }

  __renderLabel() {
    return this.label && html`<label for=${this.for}>${this.label}</label>`;
  }

  __renderCaption() {
    return this.showCaption && this.caption
      ? html`<span>${this.caption}</span>`
      : '';
  }

  render() {
    return html` <textarea
        part="textarea"
        .name=${this.name}
        .placeholder=${this.label}
        ?disabled=${this.disabled}
        @input=${this.__input}
      >
${this.value}</textarea
      >
      ${this.__renderLabel()} ${this.__renderCaption()}`;
  }
}
