import { property, MarsElement, html } from '@web-inmars/core';
import { styles } from './MarsIcon.styles.js';

/**
 * # <mars-icon>
 * Web component that allows us to show an accessible and beautiful icon so that users can interact
 *
 * ## Installation
 * ```bash
 *  npm i @web-inmars/icon --save
 * ```
 *
 * ## Usage
 * ```html
 * <script type="module">
 *   import '@web-inmars/icon/mars-icon.js';
 * </script>
 *
 * <mars-icon name="iconname"></mars-icon>
 * ```
 *
 * ## ⚠️ Load the icon font
 * If you don't provide your own icon font via the --mars-icon-font CSS variable you need to load the default google font material icons. You can do that by inserting the following link in the head tag of your index.html file. Check out the available icons here.
 *
 * ```html
 * <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
 * ```
 *
 * @cssprop --mars-icon-font - Icon font. Default: 'Material Icons'
 * @cssprop --mars-icon-color - Icon color. Default: --mars-mode-on-surface
 * @cssprop --mars-icon-size - Icon size. Default: '24px'
 *
 * @element mars-icon
 */

export class MarsIcon extends MarsElement {
  /** @private */
  static get styles() {
    return [MarsElement.styles, styles];
  }

  /** @description Icon name. Example: home, search, menu. */
  @property({ type: String }) name = '';

  render() {
    return html`${this.name}`;
  }
}
