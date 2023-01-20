import { html, property, MarsElement } from '@web-inmars/core';
import { styles } from './MarsTag.styles.js';

/**
 * # <mars-tag>
 * Web component that allows us to show an accessible and beautiful tag so that users can interact
 *
 * ## Installation
 * ```bash
 *  npm i @web-inmars/tag --save
 * ```
 *
 * ## Usage
 * ```html
 * <script type="module">
 *   import '@web-inmars/tag/mars-tag.js';
 * </script>
 *
 * <mars-tag>
 *     Click me!
 * </mars-tag>
 * ```
 * @element mars-tag
 */

export class MarsTag extends MarsElement {
  static styles = [MarsElement.styles, styles];

  @property({ type: String }) text = 'Hey there';

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.text} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
