import { html, property, classMap, styleMap } from '@web-inmars/core';
import { styles } from './MarsButton.styles';
import { MarsElement } from '@web-inmars/core';

export class MarsButton extends MarsElement {
  static get styles() {
    return [...super.styles, styles];
  }

  @property({ type: String }) value = '';

  @property({ type: String }) color = '';

  @property({ type: String, attribute: 'text-color' })
  textColor = '';

  @property({ type: String, attribute: 'mars-color' })
  marsColor = '';

  @property({ type: String }) variant = '';

  __click(event: any) {
    let newEvent = new CustomEvent('on-click', {
      detail: { event },
    });
    this.dispatchEvent(newEvent);
  }

  render() {
    return html`<button
      class=${classMap({
        'mars-button': true,
        [this.marsColor]: this.marsColor,
        [this.variant]: this.variant,
      })}
      style=${styleMap({
        'background-color': this.color,
        color: this.textColor,
      })}
      @click=${this.__click}
    >
      <slot> ${this.value} </slot>
    </button>`;
  }
}
