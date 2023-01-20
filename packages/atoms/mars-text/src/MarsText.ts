import { html, unsafeHTML, property, MarsElement } from '@web-inmars/core';
import { styles } from './MarsText.styles.js';

/**
 * # <mars-text>
 * Web component that allows us to show an accessible and beautiful text so that users can interact
 *
 * ## Installation
 * ```bash
 *  npm i @web-inmars/text --save
 * ```
 *
 * ## Usage
 * ```html
 * <script type="module">
 *   import '@web-inmars/text/mars-text.js';
 * </script>
 *
 * <mars-text>
 *     Click me!
 * </mars-text>
 * ```
 * @element mars-text
 */

export class MarsText extends MarsElement {
  static get styles() {
    return [MarsElement.styles, styles];
  }

  @property({ type: String }) value = '';

  @property({ type: String }) variant = '';

  @property({ type: String }) tag = '';

  @property({ type: String, attribute: 'css-part' }) cssPart = '';

  @property({ type: Boolean }) disabled = false;

  render() {
    return html`${unsafeHTML(
      `<${this.tag} class="text" part=${this.cssPart || this.tag}>
        ${this.value}
      </${this.tag}>`
    )}`;
  }
}
