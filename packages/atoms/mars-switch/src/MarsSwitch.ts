import {
  html,
  property,
  MarsElement,
  unsafeCSS,
  css,
  colorGray,
  fontFundations,
} from '@web-inmars/mars-core';
import { styles } from './MarsSwitch.styles';

export class MarsSwitch extends MarsElement {
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
    const { name, checked, value, label, disabled, id, __change } = this;
    return html`
      <label for=${id} part="switch-box">
        <input
          id=${id}
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
