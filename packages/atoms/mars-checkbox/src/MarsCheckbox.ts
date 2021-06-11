import {
  html,
  property,
  MarsElement,
  unsafeCSS,
  css,
  colorGray,
  fontFundations,
} from '@web-inmars/core';
import { styles } from './MarsCheckbox.styles';
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
    let newEvent = new CustomEvent('on-change', {
      detail: { event },
    });
    this.dispatchEvent(newEvent);
  }
  __renderCaption(showCaption: boolean, caption: string) {
    return (
      (showCaption &&
        caption &&
        html`<span part="caption">${this.caption}</span>`) ||
      ''
    );
  }

  render() {
    const {
      name,
      checked,
      value,
      label,
      caption,
      disabled,
      showCaption,
      id,
      __change,
    } = this;
    return html`
      <label for=${id}>
        <input
          id=${id}
          part="checkbox"
          type="checkbox"
          name=${name}
          ?checked=${checked}
          value=${value}
          ?disabled=${disabled}
          @change=${__change}
        />
        <span part="label"
          >${this.children.length ? this.children : this.label}</span
        >
      </label>
      ${this.__renderCaption(showCaption, caption)}
    `;
  }
}
