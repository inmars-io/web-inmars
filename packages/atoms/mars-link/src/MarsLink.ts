import { html, property, MarsElement } from '@web-inmars/core';
import { styles } from './MarsLink.styles.js';

/**
 * # <mars-link>
 * Web component that allows us to show an accessible and beautiful link so that users can interact
 *
 * ## Installation
 * ```bash
 *  npm i @web-inmars/link --save
 * ```
 *
 * ## Usage
 * ```html
 * <script type="module">
 *   import '@web-inmars/link/mars-link.js';
 * </script>
 *
 * <mars-link>
 *     Click me!
 * </mars-link>
 * ```
 * @element mars-link
 */

export class MarsLink extends MarsElement {
  static get styles() {
    return [MarsElement.styles, styles];
  }

  @property({ type: String }) value = '';

  @property({ type: String }) variant = '';

  @property({ type: String }) href = '';

  @property({ type: String }) target = '';

  @property({ type: String }) rel = '';

  @property({ type: String }) type = '';

  @property({ type: Boolean }) disabled = false;

  render() {
    return this.href
      ? html`<a
          part="link"
          href=${this.href}
          .target=${this.target}
          .type=${this.type}
          >${this.value}</a
        >`
      : '';
  }
}
