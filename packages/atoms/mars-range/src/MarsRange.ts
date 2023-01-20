import {
  html,
  property,
  MarsElement,
  unsafeCSS,
  css,
  colorGray,
  fontFundations,
} from '@web-inmars/core';
import { styles } from './MarsRange.styles.js';

/**
 * # <mars-range>
 * Web component that allows us to show an accessible and beautiful range so that users can interact
 *
 * ## Installation
 * ```bash
 *  npm i @web-inmars/range --save
 * ```
 *
 * ## Usage
 * ```html
 * <script type="module">
 *   import '@web-inmars/range/mars-range.js';
 * </script>
 *
 * <mars-range>
 *     Click me!
 * </mars-range>
 * ```
 * @element mars-range
 */

export class MarsRange extends MarsElement {
  static styles = [
    MarsElement.styles,
    css`
      :host {
        ${unsafeCSS(colorGray([500]))};
        ${unsafeCSS(fontFundations(['xs']))};
      }
    `,
    styles,
  ];

  @property({ type: String }) value = '';

  @property({ type: String }) min = '1';

  @property({ type: String }) max = '100';

  @property({ type: String }) step = '';

  @property({ type: String }) label = '';

  @property({ type: String }) variant = '';

  @property({ type: Boolean }) disabled = false;

  __input(event: Event & { target: HTMLInputElement }) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      return;
    }
    this.value = event?.target?.value;
    const newEvent = new CustomEvent('range-input', {
      detail: { event, value: this.value },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(newEvent);
  }

  render() {
    return html`
      <label part="label">
        ${this.label}
        <input
          type="range"
          part="range"
          .disabled=${this.disabled}
          .min=${this.min}
          .max=${this.max}
          .value=${this.value}
          .step=${this.step}
          @input=${this.__input}
        />
      </label>
    `;
  }
}
