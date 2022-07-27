import { html, property, MarsElement } from '@web-inmars/mars-core';
import { styles } from './MarsButton.styles.js';

/**
 * # <mars-button>
 * Web component that allows us to show an accessible and beautiful button so that users can interact
 *
 * ## Installation
 * ```bash
 *  npm i @web-inmars/mars-button --save
 * ```
 *
 * ## Usage
 * ```html
 * <script type="module">
 *   import 'mars-button/mars-button.js';
 * </script>
 *
 * <mars-button>
 *     Click me!
 * </mars-button>
 * ```
 * @element mars-button
 */

export class MarsButton extends MarsElement {
  static styles: any = [ MarsElement.styles, styles ];

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
    return html`<button
      part="button"
      .type=${this.type}
      ?disabled=${this.disabled}
      @click=${this.__click}
    >
      <slot> ${this.value} </slot>
    </button>`;
  }
}
