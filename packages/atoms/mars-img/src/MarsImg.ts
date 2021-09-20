import { html, property, MarsElement } from '@web-inmars/mars-core';
import { styles } from './MarsImg.styles';

/**
 * # <mars-img>
 * Web component that allows us to show an accessible and beautiful img.
 *
 * ## Installation
 * ```bash
 *  npm i @web-inmars/mars-img --save
 * ```
 *
 * ## Usage
 * ```html
 * <script type="module">
 *   import 'mars-img/mars-img.js';
 * </script>
 *
 * <mars-img src="url/from/images" alt="Alt from image"></mars-img>
 * ```
 * @element mars-img
 */

export class MarsImg extends MarsElement {
  static get styles() {
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
