import {
  html,
  property,
  MarsElement,
  unsafeCSS,
  css,
  colorGray,
  fontFundations,
} from '@web-inmars/mars-core';
import { styles } from './MarsRange.styles.js';

export class MarsRange extends MarsElement {
  static styles: any = [
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

  __input(event: any) {
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
