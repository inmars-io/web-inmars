import { html, property, MarsElement } from '@web-inmars/core';
import { styles } from './MarsImg.styles.js';

/**
 * # <mars-img>
 * Web component that allows us to show an accessible and beautiful img so that users can interact
 *
 * ## Installation
 * ```bash
 *  npm i @web-inmars/img --save
 * ```
 *
 * ## Usage
 * ```html
 * <script type="module">
 *   import '@web-inmars/img/mars-img.js';
 * </script>
 *
 * <mars-img>
 *     Click me!
 * </mars-img>
 * ```
 * @element mars-img
 */

export class MarsImg extends MarsElement {
  static get styles(): any {
    return [...super.styles, styles];
  }

  @property({ type: String }) src = '';

  @property({ type: String }) variant = '';

  @property({ type: String }) alt = '';

  @property({ type: Boolean }) disabled = false;

  render() {
    return this.src
      ? html`<img .src=${this.src} alt=${this.alt} part="image" />`
      : '';
  }
}
