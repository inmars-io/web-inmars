import { html, property, MarsElement } from '@web-inmars/core';
import { styles } from './MarsSpinner.styles.js';

/**
 * # <mars-spinner>
 * Web component that allows us to show an accessible and beautiful spinner so that users can interact
 *
 * ## Installation
 * ```bash
 *  npm i @web-inmars/spinner --save
 * ```
 *
 * ## Usage
 * ```html
 * <script type="module">
 *   import '@web-inmars/spinner/mars-spinner.js';
 * </script>
 *
 * <mars-spinner>
 *     Click me!
 * </mars-spinner>
 * ```
 * @element mars-spinner
 */

export class MarsSpinner extends MarsElement {
  static styles: any = [MarsElement.styles, styles];

  @property({ type: String }) title = 'Hey there';

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
