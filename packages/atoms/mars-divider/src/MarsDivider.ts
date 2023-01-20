import { html, MarsElement } from '@web-inmars/core';
import { styles } from './MarsDivider.styles.js';

/**
 * # <mars-divider>
 * Web component that allows us to show an accessible and beautiful divider so that users can interact
 *
 * ## Installation
 * ```bash
 *  npm i @web-inmars/divider --save
 * ```
 *
 * ## Usage
 * ```html
 * <script type="module">
 *   import '@web-inmars/divider/mars-divider.js';
 * </script>
 *
 * <mars-divider>
 *     Click me!
 * </mars-divider>
 * ```
 * @element mars-divider
 */

export class MarsDivider extends MarsElement {
  static styles = [MarsElement.styles, styles];

  render() {
    return html` <hr part="hr" /> `;
  }
}
