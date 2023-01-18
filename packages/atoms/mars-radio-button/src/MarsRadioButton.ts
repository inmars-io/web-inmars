import {
  html,
  property,
  MarsElement,
  unsafeCSS,
  css,
  colorGray,
  fontFundations,
} from '@web-inmars/core';
import { styles } from './MarsRadioButton.styles.js';

/**
 * # <mars-radio-button>
 * Web component that allows us to show an accessible and beautiful radio-button so that users can interact
 *
 * ## Installation
 * ```bash
 *  npm i @web-inmars/radio-button --save
 * ```
 *
 * ## Usage
 * ```html
 * <script type="module">
 *   import '@web-inmars/radio-button/mars-radio-button.js';
 * </script>
 *
 * <mars-radio-button>
 *     Click me!
 * </mars-radio-button>
 * ```
 * @element mars-radio-button
 */

export class MarsRadioButton extends MarsElement {
  static get styles(): any {
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
      <label for=${id} part="label-box">
        <input
          id=${id}
          part="radiobutton"
          type="radio"
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
