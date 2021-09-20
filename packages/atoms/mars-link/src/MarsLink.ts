import { html, property, MarsElement } from '@web-inmars/mars-core';
import { styles } from './MarsLink.styles';

/**
 * # <mars-link>
 * Web component that allows us to show an accessible and beautiful link so that users can interact
 *
 * ## Installation
 * ```bash
 *  npm i @web-inmars/mars-link --save
 * ```
 *
 * ## Usage
 * ```html
 * <script type="module">
 *   import 'mars-link/mars-link.js';
 * </script>
 *
 * <mars-link href="#">
 *     I'm a link!
 * </mars-link>
 * ```
 * @element mars-link
 */

export class MarsLink extends MarsElement {
  static get styles() {
    return [...super.styles, styles];
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
