import { html, unsafeHTML, property, MarsElement } from '@web-inmars/mars-core';
import { styles } from './MarsTitle.styles';

/**
 * # <mars-title>
 * Web component that allows us to show an accessible and beautiful title so that users can interact
 *
 * ## Installation
 * ```bash
 *  npm i @web-inmars/mars-title --save
 * ```
 *
 * ## Usage
 * ```html
 * <script type="module">
 *   import 'mars-title/mars-title.js';
 * </script>
 *
 * <mars-title>
 *     Click me!
 * </mars-title>
 * ```
 * @element mars-title
 */

export class MarsTitle extends MarsElement {
  static get styles() {
    return [...super.styles, styles];
  }

  @property({ type: String }) value = '';

  @property({ type: String }) variant = '';

  @property({ type: String }) heading = '';

  @property({ type: Boolean }) disabled = false;

  render() {
    return html`${unsafeHTML(
      `<h${this.heading} class="title" part=${`title-${this.heading}`}>
        ${this.value}
      </h${this.heading}>`
    )}`;
  }
}
