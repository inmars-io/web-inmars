import { html, property, MarsElement } from '@web-inmars/mars-core';
import { styles } from './MarsButton.styles';

export class MarsButton extends MarsElement {
  static get styles() {
    return [...super.styles, styles];
  }

  @property({ type: String }) value = '';

  @property({ type: String }) variant = '';

  @property({ type: String }) type = 'button';

  @property({ type: Boolean }) disabled = false;

  __click(event: any) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      return;
    }
    const newEvent = new CustomEvent('on-click', {
      detail: { event },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(newEvent);
  }

  render() {
    return html` <button
      part="button"
      .type=${this.type}
      ?disabled=${this.disabled}
      @click=${this.__click}
    >
      <slot> ${this.value} </slot>
    </button>`;
  }
}
