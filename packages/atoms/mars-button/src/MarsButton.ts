import { html, property, MarsElement, BasicEventMixin } from '@web-inmars/core';
import { styles } from './MarsButton.styles.js';

/**
 * # <mars-button>
 * Web component that allows us to show an accessible and beautiful button so that users can interact
 *
 * ## Installation
 * ```bash
 *  npm i @web-inmars/button --save
 * ```
 *
 * ## Usage
 * ```html
 * <script type="module">
 *   import '@web-inmars/button/mars-button.js';
 * </script>
 *
 * <mars-button>
 *     Click me!
 * </mars-button>
 *
 * <mars-button value="Click me!"></mars-button>
 * ```
 * @element mars-button
 */

export class MarsButton extends BasicEventMixin(MarsElement) {
  /** @private */
  static is = 'mars-button';

  /** @private */
  static styles = [MarsElement.styles, styles];

  @property({ type: String }) value = '';

  @property({ type: String }) variant = 'filled';

  @property({ type: String }) type = 'button';

  @property({ type: Boolean }) disabled = false;

  render() {
    const detail = { value: this.value };
    return html`<button
      part="button"
      .type=${this.type}
      .value=${this.value}
      ?disabled=${this.disabled}
      @click=${(e: Event) => this.__click(e, detail)}
      @dblclick=${(e: Event) => this.__dblclick(e, detail)}
      @keydown=${(e: Event) => this.__keydown(e, detail)}
      @keyup=${(e: Event) => this.__keyup(e, detail)}
      @keypress=${(e: Event) => this.__keypress(e, detail)}
    >
      <slot name="left"></slot>
      <slot>${this.value}</slot>
      <slot name="right"></slot>
    </button>`;
  }
}
