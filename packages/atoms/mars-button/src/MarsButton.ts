import { html, property, MarsElement } from '@web-inmars/core';
import { styles } from './MarsButton.styles';
export class MarsButton extends MarsElement {
  static get styles() {
    return [...super.styles, styles];
  }

  @property({ type: String }) value = '';

  @property({ type: String }) variant = '';

  __click(event: any) {
    let newEvent = new CustomEvent('on-click', {
      detail: { event },
    });
    this.dispatchEvent(newEvent);
  }

  render() {
    return html` <button part="button" @click=${this.__click}>
      <slot> ${this.value} </slot>
    </button>`;
  }
}
