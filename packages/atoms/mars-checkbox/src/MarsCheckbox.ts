import {
  html,
  property,
  MarsElement,
  unsafeCSS,
  css,
  colorGray,
  fontFundations,
} from '@web-inmars/mars-core';
import { styles } from './MarsCheckbox.styles';

/**
 * # <mars-checkbox>
 * Web component that allows us to show an accessible and beautiful checkbox so that users can interact
 *
 * ## Installation
 * ```bash
 *  npm i @web-inmars/mars-checkbox --save
 * ```
 *
 * ## Usage
 * ```html
 * <script type="module">
 *   import 'mars-checkbox/mars-checkbox.js';
 * </script>
 *
 * <mars-checkbox>
 *     Click me!
 * </mars-checkbox>
 * ```
 * @element mars-checkbox
 */

export class MarsCheckbox extends MarsElement {
  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          ${unsafeCSS(colorGray([200, 300, 400, 500, 600, 700, 800]))};
          ${unsafeCSS(fontFundations(['xs']))};
        }
      `,
      styles,
    ];
  }

  @property({ type: String }) value = '';

  @property({ type: String }) variant = '';

  @property({ type: String }) id = '';

  @property({ type: String }) name = '';

  @property({ type: String }) label = '';

  @property({ type: String }) caption = '';

  @property({ type: Boolean, attribute: 'show-caption' }) showCaption = false;

  @property({ type: Boolean }) disabled = false;

  @property({ type: Boolean }) checked = false;

  __change(event: any) {
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
    const { children, name, checked, value, label, disabled, id, __change } =
      this;
    return html`
      <label for=${id}>
        <input
          id=${id}
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
