import { html, property, MarsElement } from '@web-inmars/core';
import { styles } from './MarsBadge.styles.js';

/**
 * # <mars-badge>
 * Web component that allows us to show an accessible and beautiful badge so that users can interact
 *
 * ## Installation
 * ```bash
 *  npm i @web-inmars/badge --save
 * ```
 *
 * ## Usage
 * ```html
 * <script type="module">
 *   import '@web-inmars/badge/mars-badge.js';
 * </script>
 *
 * <mars-badge>
 *     Click me!
 * </mars-badge>
 * ```
 * @element mars-badge
 */
export class MarsBadge extends MarsElement {
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
