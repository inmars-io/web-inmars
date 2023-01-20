import {
  html,
  property,
  MarsElement,
  unsafeCSS,
  css,
  colorGray,
  fontFundations,
} from '@web-inmars/core';
import { styles } from './MarsSwitch.styles.js';

/**
 * # <mars-switch>
 * Web component that allows us to show an accessible and beautiful switch so that users can interact
 *
 * ## Installation
 * ```bash
 *  npm i @web-inmars/switch --save
 * ```
 *
 * ## Usage
 * ```html
 * <script type="module">
 *   import '@web-inmars/switch/mars-switch.js';
 * </script>
 *
 * <mars-switch>
 *     Click me!
 * </mars-switch>
 * ```
 * @element mars-switch
 */

export class MarsSwitch extends MarsElement {
  static get styles() {
    return [
      MarsElement.styles,
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
    const { name, checked, value, label, disabled, __change } = this;
    return html`
      <label for=${name} part="switch-box">
        <input
          id=${name}
          part="switch"
          type="checkbox"
          name=${name}
          ?checked=${checked}
          .value=${value}
          ?disabled=${disabled}
          @change=${__change}
        />
        <span part="slider">
          <span part="slider-content">
            <slot name="slider"></slot>
          </span>
        </span>
        <span part="label"><slot name="label">${label}</slot></span>
      </label>
      ${this.__renderCaption()}
    `;
  }
}
