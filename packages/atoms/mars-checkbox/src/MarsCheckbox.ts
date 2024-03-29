import {
  html,
  property,
  MarsElement,
  unsafeCSS,
  css,
  colorGray,
  fontFundations,
} from '@web-inmars/core';
import { styles } from './MarsCheckbox.styles.js';

/**
 * # <mars-checkbox>
 * Web component that allows us to show an accessible and beautiful checkbox so that users can interact
 *
 * ## Installation
 * ```bash
 *  npm i @web-inmars/checkbox --save
 * ```
 *
 * ## Usage
 * ```html
 * <script type="module">
 *   import '@web-inmars/checkbox/mars-checkbox.js';
 * </script>
 *
 * <mars-checkbox>
 *     Click me!
 * </mars-checkbox>
 * ```
 * @element mars-checkbox
 */

export class MarsCheckbox extends MarsElement {
  static styles = [
    MarsElement.styles,
    css`
      :host {
        ${unsafeCSS(colorGray([200, 300, 400, 500, 600, 700, 800]))};
        ${unsafeCSS(fontFundations(['xs']))};
      }
    `,
    styles,
  ];

  @property({ type: String }) value = '';

  @property({ type: String }) variant = '';

  @property({ type: String }) name = '';

  @property({ type: String }) label = '';

  @property({ type: String }) caption = '';

  @property({ type: Boolean, attribute: 'show-caption' }) showCaption = false;

  @property({ type: Boolean }) disabled = false;

  @property({ type: Boolean }) checked = false;

  __change(event: Event & { target: HTMLInputElement }) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      return;
    }
    const newEvent = new CustomEvent('on-change', {
      detail: { event },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(newEvent);
  }

  __renderCaption() {
    const { showCaption, caption } = this;
    return (
      (showCaption &&
        caption &&
        html`<span part="caption">${caption}</span>`) ||
      ''
    );
  }

  render() {
    const { children, name, checked, value, label, disabled, __change } = this;
    return html`
      <label for=${name}>
        <input
          id=${name}
          part="checkbox"
          type="checkbox"
          name=${name}
          ?checked=${checked}
          .value=${value}
          ?disabled=${disabled}
          @change=${__change}
        />
        <span part="label">${children.length ? children : label}</span>
      </label>
      ${this.__renderCaption()}
    `;
  }
}
