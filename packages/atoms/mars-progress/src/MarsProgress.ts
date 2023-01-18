import { html, property, MarsElement } from '@web-inmars/core';
import { styles } from './MarsProgress.styles.js';

/**
 * # <mars-progress>
 * Web component that allows us to show an accessible and beautiful progress so that users can interact
 *
 * ## Installation
 * ```bash
 *  npm i @web-inmars/progress --save
 * ```
 *
 * ## Usage
 * ```html
 * <script type="module">
 *   import '@web-inmars/progress/mars-progress.js';
 * </script>
 *
 * <mars-progress>
 *     Click me!
 * </mars-progress>
 * ```
 * @element mars-progress
 */

export class MarsProgress extends MarsElement {
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
